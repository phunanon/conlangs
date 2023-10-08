import {
  ActionRowBuilder,
  APIEmbedField,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} from "discord.js";
import { UserRef } from ".";
import { MakeJsonIo } from "./db";
import { Entry, nthEntry, randomEntry } from "./dict";
import { sortedByRootThenGenre } from "./wqle";
import { standardise } from "./wqle2";
const { floor, ceil } = Math;

type Score = number;
type Seconds = number;
type Classroom = {
  flashcards: {
    correct: string;
    choices: string[];
    users: { [userSf: string]: [Score, Seconds] };
  };
};

const { read: readClass, write: writeClass } =
  MakeJsonIo<Classroom>("classroom");

const fmt = (word: string) =>
  `__${word}__ - ${standardise(word).abbreviatedIpa}`;
const fj = (entry: Entry) => entry.foreign.join(", ");
const d = () => Math.floor(Date.now() / 1000);
const fmtScore = (score: number) =>
  `${floor(score)} ${" ¼½¾"[floor(score * 4) % 4]}`;

export async function HandleFlashcardsMessage(
  [userSf]: UserRef,
  response: string
) {
  const classroom = await readClass();
  const { flashcards } = classroom;
  const user =
    flashcards.users[userSf] ?? (flashcards.users[userSf] = [1, d()]);

  /** The answer to the previous question */
  const correct = response === flashcards.correct;

  /** The next entry the learner should be quizzed on */
  const nextAskEntry = await randomEntry(ceil(user[0]));
  const nextLearnEntry = await nthEntry(
    floor(user[0]),
    sortedByRootThenGenre((e) => e.native)
  );

  const nextQuestion = async () => {
    const choices = [
      ...(await randomChoices(fj(nextAskEntry), user[0])),
      "🤷",
    ];
    flashcards.correct = nextAskEntry.foreign[0];
    flashcards.choices = choices;
    await writeClass(classroom);

    const emoji = user[0] % 1 === 0 ? ":arrow_up_small:" : "";
    const embed = new EmbedBuilder().setTitle(
      `__${nextAskEntry.native}__ vai?`
    );
    const fields: APIEmbedField[] = [];
    if (nextLearnEntry) {
      const genre = nextLearnEntry.genre[0];
      fields.push({
        name: "wani wiu",
        value: `${fmt(nextLearnEntry.native)}\n${genre}. ${fj(nextLearnEntry)}`,
        inline: true,
      });
    }
    fields.push({
      name: `wilx ui ${emoji}`,
      value: `${fmtScore(user[0])}  ${nextAskEntry.n}`,
      inline: true,
    });
    embed.addFields(fields);
    return { embeds: [embed], ...buttons(choices) };
  };

  //The learner was correct
  //Increment score, update the interaction, ask another question
  if (correct) {
    const sinceLastCorrect = d() - user[1];
    const newScore = user[0] + 0.5 - sinceLastCorrect / 60 / 60 / 8;
    const newRoundedScore = Math.floor(newScore * 4) / 4;
    //Ensure you can't lose more than down to ten, if you already know ten
    user[0] = Math.max(user[0] > 10 ? 10 : 0, newRoundedScore);
    user[1] = d();
    const { choices, correct: id } = flashcards;
    return {
      update: buttons(choices, { correct: id }),
      reply: await nextQuestion(),
    };
  }

  //The learner was wrong
  //Update the interaction, ask another question
  return {
    update: buttons(flashcards.choices, {
      correct: flashcards.correct,
      incorrect: response,
    }),
    reply: await nextQuestion(),
  };
}

async function randomChoices(correct: string, score: number) {
  const randEntries = await Promise.all(
    [0, 1].map(async () => await randomEntry(ceil(score)))
  );

  const randForeigns = randEntries.map(fj);
  randForeigns.splice(floor(Math.random() * randForeigns.length), 0, correct);

  const distinctForeigns: string[] = [];
  for (const w of randForeigns) {
    const id = w.split(", ")[0];
    if (!distinctForeigns.some((e) => e.split(", ")[0] === id)) {
      distinctForeigns.push(w);
    }
  }

  return distinctForeigns;
}

function buttons(
  choices: string[],
  { correct, incorrect }: { correct?: string; incorrect?: string } = {}
) {
  const disabled = !!(correct || incorrect);
  const components = choices.map((foreign) => {
    const first = foreign.split(", ")[0]!;
    return new ButtonBuilder()
      .setCustomId(first)
      .setLabel(foreign)
      .setStyle(
        correct === first
          ? ButtonStyle.Success
          : incorrect === first
          ? ButtonStyle.Danger
          : first === '🤷'
          ? ButtonStyle.Secondary
          : ButtonStyle.Primary
      )
      .setDisabled(disabled);
  });
  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(components);
  return { components: [row] };
}
