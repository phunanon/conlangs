const abc = [
  "p t k m s c h w",
  "i u y o e a x q",
  "b d g n z j v l",
  "iu ui ia ai ua au iq qi",
].map((s) => s.split(" "));

const vowels = [...abc[1], ...abc[3]];
const consonants = [...abc[0], ...abc[2]];
const cha =
  "ì í à á ú ù ò ó i u y o e a x q p t k m s c h w b d g n z j v l".split(" ");
const ipa =
  "iu ui ia ai ua au iɒ ɒi i u e ɵ ɛ a ɶ ɒ p t k m s ʃ h w b d g n z ʒ v l".split(
    " "
  );

export function wordIpa(wqle: string) {
  let itxt = wqle;
  let ipaTxt = "";
  while (itxt.length > 0) {
    let found = false;
    for (const c in cha)
      if (itxt.startsWith(cha[c])) {
        ipaTxt += ipa[c];
        itxt = itxt.slice(cha[c].length);
        found = true;
        break;
      }
    if (!found) itxt = itxt.slice(1);
  }
  const penult = ipaTxt.at(-2);
  if (ipaTxt.endsWith("i") && penult && consonants.includes(penult)) {
    const coda = ipaTxt.at(-2);
    const ejective = coda && {"b": "pʼ", "d": "tʼ", "g": "kʼ"}[coda] || coda;
    ipaTxt = ipaTxt.slice(0, -2) + ejective;
  }
  return ipaTxt;
}

function wordNibbles(wqleWord: string) {
  const nibbles: number[] = [];
  for (let i = 0; i < wqleWord.length; ++i) {
    if (
      abc[1].includes(wqleWord[i]) &&
      i + 1 !== wqleWord.length &&
      abc[3].includes(wqleWord[i] + wqleWord[i + 1])
    ) {
      nibbles.push(vowels.indexOf(wqleWord.slice(i, i + 2)));
      ++i;
    } else {
      const set = vowels.includes(wqleWord[i]) ? vowels : consonants;
      nibbles.push(set.indexOf(wqleWord[i]));
    }
  }
  return nibbles;
}

function nibblesToInt(nibbles: number[]) {
  return nibbles.reduce((acc, n) => acc * 16n + BigInt(n), 0n);
}

function nibblesWord(nibbles: number[]) {
  return nibbles.map((n, i) => (i % 2 ? vowels[n] : consonants[n])).join("");
}

/*
export function determineGenre(wqleWord: string) {
  const nibbles = wordNibbles(wqleWord);
  const [n0, n1] = nibbles;
  const [b0, b1] = [n0 & 0x8, n1 & 0x8];
  return b0 && b1 ? "verb" : !b0 && b1 ? "adjective" : "noun";
}
*/

export function determineGenre(wqleWord: string) {
  const nou = /^[ptkmschw][iuyoeaxq]([bdgnzjvl][iuyoeaxq])*$/;
  const ver = /^[bdgnzjvl](iu|ui|ia|ai|au|ua|iq|qi)([bdgnzjvl][iuyoeaxq])*$/;
  const adj = /^[ptkmschw](iu|ui|ia|ai|au|ua|iq|qi)([bdgnzjvl][iuyoeaxq])*$/;
  return (
    (nou.test(wqleWord) && "noun") ||
    (adj.test(wqleWord) && "adjective") ||
    (ver.test(wqleWord) && "verb")
  );
}

export const validWord = (word: string) =>
  /^(([ptkmschw]|[bdgnzjvl])(iu|ui|ia|ai|au|ua|iq|qi|[iuyoeaxq]))+$/.test(word);

export function sortedByRootThenGenre<T>(key: (x: T) => string) {
  return (entries: T[]) => {
    const score = (x: T) => {
      const native = key(x);
      const genre = determineGenre(native);
      const nibbles = wordNibbles(key(x)).map((n, i) =>
        i === 1 ? n % 8 : i % 2 ? n : n & 0x7
      );
      const int = Number(
        nibblesToInt(nibbles) +
          (nibbles.length > 2 ? 1n << (BigInt(nibbles.length - 2) * 4n) : 0n)
      );
      const answer =
        int + (genre === "noun" ? 0 : genre === "adjective" ? 0.3 : 0.6);
      return answer;
    };
    return entries.sort((a, b) => score(a) - score(b));
  };
}
