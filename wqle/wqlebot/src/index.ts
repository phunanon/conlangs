import { Client, GatewayIntentBits, TextChannel } from "discord.js";
import { HandleFlashcardsMessage } from "./classroom";
const {
  promises: { readFile },
} = require("fs");
import {
  appendProvisionalWord,
  Entry,
  lookupNativeWord,
  lookupForeignWord,
  allEntries,
} from "./dict";
import { randomFreeWord, wordSplit } from "./dict";
import { resetChannel } from "./discord-dict";
import { determineGenre, toIpa, validWord } from "./wqle";

let token = "";
let wordReqChSf = "";
let transStrChSf = "";
let classroomChSf = "";
let dictChSf = "";

async function loadConfig() {
  ({ token, wordReqChSf, transStrChSf, classroomChSf, dictChSf } = JSON.parse(
    await readFile("config.json")
  ));
  client.login(token);
}
loadConfig();

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
    const replyError = async (err?: string) =>
      await message.reply(
        err ??
          `Must be two lines:
1. the foreign word, or words seperated by commas
2. and either e.g.: "n" "a" "t" "i" for a random noun, adjective, transitive verb, or intransitive verb; "[wqle]" or "t [wqle]" or "i [wqle]" for a particular wqle word`
      );

    const lines = content.trim().split("\n");
    if (lines.length !== 2) {
      await replyError();
      return;
    }

    const foreign = lines[0]!.split(",").map((x) => x.trim().toLowerCase());
    if (!foreign.length) {
      await replyError();
      return;
    }

    async function determineWordRequest(
      line: string
    ): Promise<string | [Entry["genre"], string]> {
      const forNewWord = /^[nati]$/.test(line);
      const forWqleVerb = /^[ti] \w+$/.test(line);

      if (forWqleVerb) {
        const [g, w] = line.split(" ") as ["i" | "t", string];
        const genre = determineGenre(w);
        return genre === "verb"
          ? [`${g}. ${genre}`, w]
          : `wqle word did not match ${g}. verb.`;
      }

      if (forNewWord) {
        const genreKey: { [key: string]: Entry["genre"] } = {
          n: "noun",
          a: "adjective",
          t: "t. verb",
          i: "i. verb",
        };
        const genre = genreKey[line[0]!]!;
        const native = (await randomFreeWord(genre)) ?? "none";
        return [genre, native];
      }

      //For compounds
      if (line.includes(" ")) {
        const native = line.replaceAll(" ", "");
        if (!validWord(native)) {
          return `invalid compound word ${line}`;
        }
        return ["compound", line.replaceAll(" ", "")];
      }
      
      const genre = determineGenre(line);
      return genre
        ? genre === "verb"
          ? `request a verb like "i ${line}" or "t ${line}".`
          : [genre, line]
        : `could not determine genre of ${line}`;
    }

    const result = await determineWordRequest(lines[1]!);
    if (!Array.isArray(result)) {
      await replyError(result);
      return;
    }
    const [genre, native] = result;

    const existingNative = await lookupNativeWord(native);
    if (existingNative && existingNative.genre === genre) {
      await channel.send(
        `That word is already taken, meaning ${existingNative.foreign}.`
      );
      return;
    }

    if (native === "none") {
      await channel.send(
        "No more free words of that genre available! The dictionary is full of two-syllable words; try more syllables."
      );
      return;
    }

    await appendProvisionalWord({
      native,
      foreign,
      genre,
      provision: "provisional",
      by: author.id,
    });

    await channel.send(await translateWordsReport([native]));
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
  try {
    if (!interaction.isButton() || channelId !== classroomChSf) return;

    const { reply, update } = await HandleFlashcardsMessage(
      [user.id, "user"],
      interaction.customId
    );
    reply && (await channel?.send(reply));
    update && (await interaction.update(update));
  } catch (e) {
    console.error(e);
  }
});

export const entryToMessage = (entry: Entry) => {
  const { native, foreign, genre, provision } = entry;
  const foreigns = foreign.join(", ");
  const ipa = toIpa(native);
  const prov = provision === "provisional" ? `(provisional)` : "";
  const left = `${genre[0]}. ${native.padEnd(7)} /${(ipa + "/").padEnd(8)}`;
  return `\`${left}\` ${prov} ${foreigns} `;
};

async function translateWordsReport(words: string[]) {
  const translated: string[] = [];
  const unknown = new Set<string>();
  words = words.map((word) => word.toLowerCase());
  const allEntries: Entry[] = [];
  await Promise.all(
    words.map(async (word) => {
      const entries = await lookupForeignWord(word);
      if (!entries.length) {
        unknown.add(word);
      } else {
        const unique = entries.filter(
          (entry) => !allEntries.some((e) => e.native === entry.native)
        );
        allEntries.push(...unique);
      }
    })
  );
  translated.push(...allEntries.map(entryToMessage));
  return `${
    unknown.size ? `Unknown: ${[...unknown].join(", ")}` : "."
  }\n${translated.join("\n")}`;
}
