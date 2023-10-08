import { Entry, lookupForeignWord } from "./dict";
import { sortedByRootThenGenre } from "./wqle";
import { standardise } from "./wqle2";

export async function translateWordsReport(words: string[]) {
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
  const sorted = sortedByRootThenGenre<Entry>((e) => e.native)(allEntries);
  const translated: string[] = [];
  translated.push(...sorted.map(entryToMessage));
  return `${
    unknown.size ? `Unknown: ${[...unknown].join(", ")}` : "."
  }\n${translated.join("\n")}`;
}

export const entryToMessage = (entry: Entry) => {
  const { native, foreign, genre, provision } = entry;
  const foreigns = foreign.join(", ");
  const ipa = standardise(native).abbreviatedIpa;
  const prov = provision === "provisional" ? `(provisional)` : "";
  const left = `${genre[0]}. ${native.padEnd(7)} /${(ipa + "/").padEnd(8)}`;
  return `\`${left}\` ${prov} ${foreigns} `;
};
