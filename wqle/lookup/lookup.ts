const e = (el: string) => document.querySelector(el) as HTMLElement;

type Entry = { type: "noun" | "adjective" | "verb"; native: string; foreign: string[] };
type Dictionary = Entry[];

let words: Dictionary = [];

function pageLoad() {
    downloadDict();
    e("#build").value = "";
}

function parseDict(md: string) {
    let dict = md
        .split("\n")
        .slice(2, -1)
        .map(l => l.split("|").slice(1));

    const f = (x: string) => x.split(",").flatMap(x => (x.trim() == "" ? [] : [x.trim()]));
    dict.forEach(e => {
        const [nN, nA, nV, ...foreigns] = e;
        const [fN, fA, fVt, fVi] = foreigns.map(f);
        if (![...fN, ...fA, ...fVt, ...fVi].length) return;
        const pushIf = (type: Entry["type"], native: string, foreign: string[]) => {
            if (foreign.length) words.push({ type, native, foreign });
        };
        pushIf("noun", nN, fN);
        pushIf("adjective", nA, fA);
        pushIf("verb", nV, [...fVi, ...fVt]);
    });
}

async function downloadDict() {
    parseDict(await (await fetch("../dict.md")).text());
    presentTable(words);
}

function searchFor(query: string) {
    return words.filter(w => [w.native, ...w.foreign].some(w => w.match(query)));
}

function makeShorter(word: string) {
    const longs = "iu ui ia ai au ua iq qi".split(" ");
    const shorts = "ì í à á ù ú ò ó".split(" ");
    longs.forEach((l, i) => (word = word.replaceAll(l, shorts[i])));
    if (word[0] == "p" && word.length == 2) word = word[1];
    if (word.length == 4 && word[3] == "i") word = word.slice(0, 3);
    return word;
}

function toIPA(text: string) {
    const cha = "ì í à á ù ú ò ó i u y o e a x q p t k m s c h w b d g n z j v l".split(" ");
    const ipa = "iu ui ia ai au ua iɒ ɒi i u e ɵ ɛ a ɶ ɒ p t k m s ʃ h w b d g n z ʒ v l".split(
        " ",
    );
    cha.push(" ");
    ipa.push(" ");
    cha.forEach((c, i) => (text = text.replaceAll(c, ipa[i])));
    return text;
}

function DOM_updateIPA() {
    e("#ipa").innerText = toIPA(e("#build").value);
}

function DOM_addWord(word: string) {
    e("#build").value = (e("#build").value + " " + makeShorter(word)).trim();
    e("#query").value = "";
    e("#query").focus();
    presentTable(words);
    DOM_updateIPA();
}

function presentTable(words: Entry[]) {
    const table = words.map(({ type, native, foreign }: Entry) => {
        return `<tr onclick="DOM_addWord('${native}')"><td>${type}</td><td>${makeShorter(
            native,
        )}</td><td>${foreign.join(", ")}</td></tr>`;
    });
    e("#results").innerHTML = `<tr><th>Genre</th><th>Native</th><th>Foreign</th></tr>${table.join(
        "",
    )}`;
    e("#info").innerText = `Showing ${table.length} / ${words.length} words.`;
}

let searchDelayTmr: number;
function DOM_search(evt: KeyboardEvent) {
    const query = e("#query").value.trim();
    clearTimeout(searchDelayTmr);
    if (evt.key == "Enter") {
        query.split(" ").forEach(q => {
            const results = searchFor(q);
            if (results.length) {
                DOM_addWord(results[0].native);
            }
        });
        return;
    }
    searchDelayTmr = setTimeout(() => presentTable(searchFor(query)), 100);
}
