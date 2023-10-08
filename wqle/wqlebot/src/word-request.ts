import { ChannelType, Message } from "discord.js";
import { appendProvisionalWord, Entry, lookupNativeWord, randomFreeWord } from "./dict";
import { translateWordsReport } from "./translation-report";
import { determineGenre, validWord } from "./wqle";

export async function handleWordRequest(message: Message) {
  const { content, channel, author } = message;
  if (!("send" in channel)) return;

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
    ...{ native, foreign, genre },
    provision: "provisional",
    by: author.id,
  });

  await channel.send(await translateWordsReport([native]));
}
