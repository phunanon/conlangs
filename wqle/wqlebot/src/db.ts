const {
  promises: { readFile, writeFile },
} = require("fs");

export const MakeJsonIo = <T>(name: string) => ({
  read: async () => JSON.parse(await readFile(`${name}.json`)) as T,
  write: async (obj: T) =>
    await writeFile(`${name}.json`, JSON.stringify(obj, null, 2)),
});
