import { TextChannel } from "discord.js";
import { Entry } from "./dict";
import { entryToMessage } from "./translation-report";
import { sortedByRootThenGenre } from "./wqle";

type Dict = {
  [native: string]: {
    sf: string;
    ts: number;
  };
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function resetChannel(entries: Entry[], channel: TextChannel) {
  //Delete all channel messages
  let deleted: Awaited<ReturnType<typeof channel.bulkDelete>>;
  do {
    deleted = await channel.bulkDelete(100);
    await sleep(1000);
  } while (deleted.size != 0);
  //Populate channel with new messages
  const totalEntries = entries.length;
  entries = entries.filter((e) => e.foreign.length);
  const dict: Dict = {};
  entries = sortedByRootThenGenre<Entry>((e) => e.native)(entries);
  const bulk = 32;
  for (let e = 0; e < entries.length; e += bulk) {
    const batch = entries.slice(e, e + bulk);
    const message = batch.map(entryToMessage).join("\n");
    const { id: sf } = await channel.send(".\n" + message);
    batch.forEach((entry) => {
      dict[entry.native] = { sf, ts: Date.now() };
    });
    await sleep(500);
  }
  await channel.send(
    `${entries.length.toLocaleString()}/${totalEntries.toLocaleString()} entries.`
  );
}
