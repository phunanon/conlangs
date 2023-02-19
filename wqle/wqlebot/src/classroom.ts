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
import { sortedByRootThenGenre, toIpa } from "./wqle";
const { floor, ceil } = Math;

type Classroom = {
  flashcards: {
    id: string;
    foreign: string;
    choices: string[];
    scores: { [userSf: string]: number };
  };
};

const { read: readClass, write: writeClass } =
  MakeJsonIo<Classroom>("classroom");

const fmt = (word: string) => `__${word}__ - ${toIpa(word)}`;
const fj = (entry: Entry) => entry.foreign.join(", ");
const fmtScore = (score: number) =>
  `${floor(score)} ${" ¼½¾"[floor(score * 4) % 4]}`;

export async function HandleFlashcardsMessage(
  [userSf]: UserRef,
  response: string
) {
  const classroom = await readClass();
  const { flashcards } = classroom;
  let score = flashcards.scores[userSf] ?? 1;

  const reset = response === "reset";

  //Reset the learner's progress
  if (reset) {
    flashcards.scores[userSf] = score = 0;
    await writeClass(classroom);
  }

  /** The answer to the previous question */
  const correct = response === flashcards.foreign.split(", ")[0];

  /** The next entry the learner should be quizzed on */
  const nextAskEntry = await randomEntry(ceil(score));
  const nextLearnEntry = await nthEntry(
    floor(score),
    sortedByRootThenGenre((e) => e.native)
  );

  const nextQuestion = async () => {
    const choices = await randomChoices(fj(nextAskEntry), score);
    flashcards.id = nextAskEntry.foreign[0];
    flashcards.foreign = fj(nextAskEntry);
    flashcards.choices = choices;
    await writeClass(classroom);

    const emoji = score % 1 === 0 ? ":arrow_up_small:" : "";
    const embed = new EmbedBuilder().setTitle(
      `__${nextAskEntry.native}__ vai?`
    );
    const fields: APIEmbedField[] = [];
    if (nextLearnEntry) {
      const genre = nextLearnEntry.genre[0];
      fields.push({
        name: "wani kxdi",
        value: `${fmt(nextLearnEntry.native)}\n${genre}. ${fj(nextLearnEntry)}`,
        inline: true,
      });
    }
    fields.push({
      name: `wilx ui ${emoji}`,
      value: `${fmtScore(score)}  ${nextAskEntry.n}`,
      inline: true,
    });
    embed.addFields(fields);
    return { embeds: [embed], ...buttons(choices) };
  };

  //The learner was correct
  //Increment score, update the interaction, ask another question
  if (correct) {
    flashcards.scores[userSf] = score += 0.25;
    const { choices, id } = flashcards;
    return {
      update: buttons(choices, { correct: id }),
      reply: await nextQuestion(),
    };
  }

  //The learner was wrong
  //Update the interaction, ask another question
  return {
    update: buttons(flashcards.choices, {
      correct: flashcards.id,
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
          : ButtonStyle.Primary
      )
      .setDisabled(disabled);
  });
  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(components);
  return { components: [row] };
}
