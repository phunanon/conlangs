import {
  Client,
  GatewayIntentBits,
  SlashCommandBuilder,
  TextChannel,
} from "discord.js";
import { HandleFlashcardsMessage } from "./classroom";
import { readFile } from "fs/promises";
import { allEntries } from "./dict";
import { wordSplit } from "./dict";
import { resetChannel } from "./discord-dict";
import { translateWordsReport } from "./translation-report";
import { handleWordRequest } from "./word-request";
import { showcase } from "./showcase";
import { standardise } from "./wqle2";

let token = "";
let guildSf = "";
let wordReqChSf = "";
let transStrChSf = "";
let classroomChSf = "";
let dictChSf = "";

async function main() {
  //Load config
  ({ token, guildSf, wordReqChSf, transStrChSf, classroomChSf, dictChSf } =
    JSON.parse((await readFile("config.json")).toString()));
  //Client set-up
  client.once("ready", async () => {
    const guild = await client.guilds.fetch(guildSf);
    await guild?.commands.create(
      new SlashCommandBuilder()
        .setName("showcase")
        .setDescription("Generate a showcase image of a wqle sentence")
        .addStringOption((option) =>
          option
            .setName("sentence")
            .setDescription("The wqle sentence to showcase")
            .setRequired(true)
        )
    );
    await guild?.commands.create(
      new SlashCommandBuilder()
        .setName("represent")
        .setDescription("Generate representations of a wqle sentence")
        .addStringOption((option) =>
          option
            .setName("sentence")
            .setDescription("The wqle sentence to represent")
            .setRequired(true)
        )
    );
    client.on("interactionCreate", async (interaction) => {
      if (!interaction.isCommand()) return;
      const { commandName, options } = interaction;
      if (commandName === "showcase") {
        const sentence = options.get("sentence", true).value as string;
        interaction.reply({
          files: [{ attachment: showcase(sentence), name: "newName.png" }],
        });
      } else if (commandName === "represent") {
        const sentence = options.get("sentence", true).value as string;
        const lines = Object.entries(standardise(sentence)).map(
          ([k, v]) => `${k}: ${v}`
        );
        interaction.reply(lines.join("\n"));
      }
    });
  });
  client.login(token);
}
main();

type ChannelRef = [string, "channel"];
export type UserRef = [string, "user"];

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("messageCreate", async (message) => {
  const transStrChRef: ChannelRef = [transStrChSf, "channel"];

  const { author, guild, content, channelId, thread, channel } = message;
  if (author.bot || !guild || !content || channel.isDMBased() || thread) {
    return;
  }

  const FetchChannel = async ([channelSf]: ChannelRef) => {
    try {
      const channel = await guild.channels.fetch(channelSf);
      return (channel as TextChannel) ?? undefined;
    } catch (e) {
      return undefined;
    }
  };

  const SendToChannel = async (channelRef: ChannelRef, content: string) => {
    const channel = await FetchChannel(channelRef);
    if (!channel) {
      console.error(`${channelRef} not found!`);
      return;
    }
    await channel.send(content.slice(0, 4000));
  };

  const wordPeeks = wordSplit(content, /\?([a-zA-Z]+)/g);
  const isInWordReqCh = channelId === wordReqChSf;
  const isInDictCh = channelId === dictChSf;

  if (isInDictCh) {
    if (content === "reset") {
      await resetChannel(await allEntries(), channel as TextChannel);
    }
    return;
  }

  //Handle word peeks
  if (wordPeeks.length) {
    await message.reply(await translateWordsReport(wordPeeks));
    return;
  }

  //Handle word requests
  if (isInWordReqCh) {
    await handleWordRequest(message);
    return;
  }

  //Send to translation stream
  {
    const words = wordSplit(content.toLowerCase());
    await SendToChannel(transStrChRef, await translateWordsReport(words));
  }
});

//Handle classroom responses
client.on("interactionCreate", async (interaction) => {
  const { user, channelId, channel } = interaction;
  if (!channel || !("send" in channel)) return;
  try {
    if (!interaction.isButton() || channelId !== classroomChSf) return;

    console.log("classroom interaction", user.tag);

    const { reply, update } = await HandleFlashcardsMessage(
      [user.id, "user"],
      interaction.customId
    );
    reply && (await channel.send(reply));
    update && (await interaction.update(update));
  } catch (e) {
    console.error(e);
  }
});
