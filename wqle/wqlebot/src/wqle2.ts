const vowels = "ì í à á ú ù ò ó i u y o e a x q".split(" ");
const consonants = "p t k m s c h w b d g n z j v l".split(" ");
const lones = [...vowels, ...consonants];
const longVowels = "iu ui ia ai ua au iq qi".split(" ");
const ipas = [
  ..."iu ui ia ai ua au iɒ ɒi i u e ɵ ɛ a ɶ ɒ".split(" "),
  ..."p t k m s ʃ h w b d g n z ʒ v l".split(" "),
];

export function standardise(sentence: string) {
  //Standardise the sentence: lone characters, spaces, no abbreviations
  // Replace longs with lones
  for (let l = 0; l < longVowels.length; ++l) {
    sentence = sentence.replaceAll(longVowels[l], vowels[l]);
  }
  // Insert spaces between words
  //  Before verbs
  sentence = sentence.replaceAll(/([^\s])([bdgnzjvl][ìíàáúùòó])/g, "$1 $2");
  //  Before adjectives
  sentence = sentence.replaceAll(/([^\s])([ptkmschw][ìíàáúùòó])/g, "$1 $2");
  //  Before nouns
  sentence = sentence.replaceAll(/([^\s])([ptkmschw][iuyoeaxq])/g, "$1 $2");
  // Restore i suffixes
  sentence = sentence.replaceAll(/([bdgnzjvl])(\s|$)/g, "$1i ");
  // Restore p prefixes
  sentence = sentence.replaceAll(/(\s|^)([iuyoeaxqìíàáúùòó])/g, "$1p$2");

  const short = sentence.trim();

  const abbreviate = (sentence: string) => {
    return (
      sentence
        // Remove i suffixes
        .replaceAll(/([bdgnzjvl])i(\s|$)/g, "$1$2")
        // Remove p prefixes
        .replaceAll(/(\s|^)p([iuyoeaxqìíàáúùòó])/g, "$1$2")
    );
  };

  const elongate = (sentence: string) => {
    for (let l = 0; l < longVowels.length; ++l) {
      sentence = sentence.replaceAll(vowels[l], longVowels[l]);
    }
    return sentence;
  };

  const long = elongate(short);

  const toIpa = (short: string) => {
    for (let i = 0; i < short.length; ++i) {
      const idx = lones.indexOf(short[i]);
      if (idx !== -1) {
        short = short.replace(short[i], ipas[idx]);
      }
    }
    short = short.replaceAll(/b( |$)/g, "pʼ$1");
    short = short.replaceAll(/d( |$)/g, "tʼ$1");
    short = short.replaceAll(/g( |$)/g, "kʼ$1");
    return short;
  };

  return {
    long,
    short,
    longSpaceless: long.replaceAll(" ", ""),
    shortSpaceless: short.replaceAll(" ", ""),
    shortAbbreviated: abbreviate(short),
    longAbbreviated: abbreviate(long),
    ipa: toIpa(short),
    abbreviatedIpa: toIpa(abbreviate(short)),
  };
}
