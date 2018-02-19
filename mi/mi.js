
var _lex = [

//Language features: pronouns, clause dividers, conditionals
    { noun: "me/I", type: "pronoun", verb: "I_am", adj: "", comment: "" },
    { noun: "you", type: "pronoun", verb: "you_are", adj: "", comment: "" },
    { noun: "actor", type: "pronoun", verb: "has", adj: "", comment: "Refers to the actor of actions taken in the sentence" },
    { noun: "it/that/this", type: "pronoun", verb: "it_is", adj: "", comment: "" },
    { noun: "they/them", type: "pronoun", verb: "they_are", adj: "", comment: "" },
    { noun: "us_inclusive/we_inclusive", type: "pronoun", verb: "we_in_are", adj: "", comment: "" },
    { noun: "us_exclusive/we_exclusive", type: "pronoun", verb: "we_ex_are", adj: "", comment: "" },
    { noun: "all/always", type: "quantity, time", verb: "", adj: "many", comment: "" },
    { noun: "nothing/never", type: "quantity, time", verb: "", adj: "few", comment: "" },
    { noun: "partial/sometimes", type: "quantity, time", verb: "", adj: "some", comment: "" },
    { noun: "only/just", type: "quantity, time", verb: "", adj: "", comment: "" },
    { noun: "any", type: "quantity", verb: "", adj: "", comment: "" },
    { noun: "every", type: "quantity", verb: "", adj: "", comment: "" },
    { noun: "here", type: "spatial", verb: "move_close/go_to", adj: "close/near", comment: "" },
    { noun: "there", type: "spatial", verb: "move_away/go_from", adj: "far_away/distant", comment: "" },
    { noun: "also", type: "conjunction", verb: "", adj: "opposite", comment: "Used to seperate clauses" },
    { noun: "and/&", type: "conjunction", verb: "", adj: "same", comment: "Used to list" },
    { noun: "soft_and", type: "conjunction", verb: "", adj: "", comment: "Used to list, retaining and extending adjectives, possession, and etc. See -206." },
    { noun: "if_then", type: "conjunction", verb: "", adj: "should", comment: "Used to denote an if-then relationship between the leading and following clauses" },
    { noun: "compare_to", type: "", verb: "", adj: "must", comment: "Used to denote a comparison between the leading and following clause" },
    { noun: "soft_also", type: "", verb: "", adj: "", comment: "" },
    { noun: "however", type: "", verb: "", adj: "would", comment: "" },
    { noun: "question/?", type: "question", verb: "", adj: "", comment: "" },

//Communication, mathematics, direction
    { noun: "word/name", type: "", verb: "learn", adj: "", comment: "" },
    { noun: "schol/education", type: "", verb: "teach", adj: "", comment: "" },
    { noun: "up", type: "", verb: "rise/jump", adj: "above", comment: "" },
    { noun: "down", type: "", verb: "fall", adj: "below/under", comment: "" },
    { noun: "north", type: "", verb: "", adj: "scarce/poor", comment: "" },
    { noun: "east", type: "", verb: "", adj: "rich/right", comment: "" },
    { noun: "south", type: "", verb: "", adj: "", comment: "" },
    { noun: "west", type: "", verb: "", adj: "left", comment: "" },
    { noun: "ease/ability", type: "", verb: "", adj: "easy/probable", comment: "" },
    { noun: "difficulty/inability", type: "", verb: "", adj: "difficult", comment: "" },
    { noun: "method/work/use", type: "", verb: "work/use", adj: "", comment: "" },
    { noun: "conflict/fight", type: "", verb: "", adj: "", comment: "" },
    { noun: "time", type: "", verb: "", adj: "soon", comment: "" },
    { noun: "travel", type: "", verb: "travel", adj: "", comment: "" },
    { noun: "begin/start", type: "", verb: "begin/start", adj: "slow", comment: "" },
    { noun: "end/stop/speed", type: "", verb: "end/stop", adj: "fast", comment: "" },
    { noun: "positive", type: "", verb: "", adj: "possible/happy/can", comment: "" },
    { noun: "negative/not", type: "", verb: "", adj: "impossible/unable/cannot/sad", comment: "Used to negate a situation" },
    { noun: "within/in", type: "", verb: "", adj: "", comment: "" },
    { noun: "with", type: "", verb: "", adj: "", comment: "" },

//Life, nature, time
    { noun: "normality/calm/peace", type: "", verb: "rest", adj: "normal/quiet", comment: "" },
    { noun: "change/chaos", type: "", verb: "", adj: "", comment: "" },
    { noun: "nest/bed", type: "", verb: "", adj: "low", comment: "" },
    { noun: "sky", type: "", verb: "", adj: "high", comment: "" },
    { noun: "machine/process", type: "", verb: "", adj: "", comment: "" },
    { noun: "life/nature", type: "", verb: "live", adj: "natural/wild", comment: "" },
    { noun: "person", type: "", verb: "", adj: "", comment: "" },
    { noun: "animal", type: "", verb: "hunt", adj: "", comment: "" },
    { noun: "plant", type: "", verb: "grow", adj: "", comment: "" },
    { noun: "food", type: "", verb: "eat", adj: "eaten", comment: "" },
    { noun: "earth/mountain", type: "", verb: "", adj: "large/big/much", comment: "" },
    { noun: "water/rain/river/Spring", type: "rain/drink", verb: "wet", adj: "", comment: "" },
    { noun: "fire/light/Summer ", type: "", verb: "burn", adj: "bright", comment: "" },
    { noun: "air/wind/Autumn", type: "", verb: "blow", adj: "windy", comment: "" },
    { noun: "snow/Winter", type: "", verb: "snow", adj: "", comment: "" },
    { noun: "noise", type: "", verb: "", adj: "loud", comment: "" },
    { noun: "sun/day", type: "", verb: "shine", adj: "hot", comment: "" },
    { noun: "earlier/before", type: "", verb: "", adj: "early", comment: "" },
    { noun: "now", type: "", verb: "", adj: "little/small", comment: "" },
    { noun: "later/aftewards", type: "", verb: "wait/postpone", adj: "", comment: "" },
    { noun: "moon/night", type: "", verb: "obscure/cover/sleep", adj: "cold", comment: "" },
    { noun: "yesterday", type: "", verb: "", adj: "most", comment: "" },
    { noun: "today", type: "", verb: "", adj: "", comment: "" },
    { noun: "tomorrow", type: "", verb: "", adj: "least", comment: "" },
    { noun: "age", type: "", verb: "", adj: "", comment: "" },
    { noun: "old", type: "", verb: "", adj: "old", comment: "" },
    { noun: "new", type: "", verb: "", adj: "new", comment: "" },
//Humanity and its stuff
    { noun: "desire/want/pleasure", type: "", verb: "desire/want/like", adj: "", comment: "" },
    { noun: "friend/unison", type: "", verb: "", adj: "friendly/in unison", comment: "" },
    { noun: "enemy", type: "", verb: "", adj: "hostile", comment: "" },
    { noun: "family", type: "", verb: "know_person", adj: "familiar", comment: "" },
    { noun: "neighbour", type: "", verb: "know_thing", adj: "", comment: "" },
    { noun: "adult", type: "", verb: "", adj: "more", comment: "" },
    { noun: "child", type: "", verb: "", adj: "less", comment: "" },
    { noun: "female/girl/wife/she", type: "", verb: "", adj: "", comment: "" },
    { noun: "male/boy/husband/he", type: "", verb: "", adj: "", comment: "" },
//Buildings, furniture, structures, protocols, objects, locations
    { noun: "rock/stone", type: "", verb: "", adj: "", comment: "" },
    { noun: "tree/wood", type: "", verb: "", adj: "", comment: "" },
    { noun: "building/room", type: "", verb: "", adj: "", comment: "" },
    { noun: "door/entry", type: "", verb: "", adj: "", comment: "" },
    { noun: "table/platform", type: "", verb: "", adj: "", comment: "" },
    { noun: "toy", type: "", verb: "play", adj: "", comment: "" },
    { noun: "meeting/visit", type: "", verb: "", adj: "", comment: "" },
    { noun: "collection", type: "", verb: "", adj: "", comment: "" },
    { noun: "metre", type: "", verb: "", adj: "", comment: "" },
    { noun: "square", type: "", verb: "", adj: "", comment: "" },
    { noun: "circle", type: "", verb: "", adj: "", comment: "" },
    { noun: "place", type: "", verb: "", adj: "", comment: "" },
    { noun: "opposite/other_side", type: "location", verb: "", adj: "beside", comment: "" },
    { noun: "unknown_location", type: "", verb: "lose", adj: "lost", comment: "" },
    { noun: "house/home", type: "", verb: "", adj: "", comment: "" },
    { noun: "village", type: "", verb: "", adj: "", comment: "" },
    { noun: "town", type: "", verb: "", adj: "", comment: "" },
    { noun: "city", type: "", verb: "", adj: "", comment: "" },
    { noun: "country", type: "", verb: "", adj: "", comment: "" },
    { noun: "wall/fence", type: "", verb: "", adj: "", comment: "" },
    { noun: "null", type: "null", verb:"ignore", adj: "ignored", comment: "Used in place of a noun upon repeating grammar pattern" }
];




var _vow = ["i", "e", "a", "o", "u", "í", "é", "á", "ó", "ú", "ì", "è", "à", "ò", "ù"];
var _con = ["m", "n", "p", "b", "t", "d", "k", "g", "w", "s", "z", "c", "j", "f", "v"];
var _chr = _con.concat([" "]).concat(_vow.concat([" "]));
var _ipa = ["m", "n", "p", "b", "t", "d", "k", "g", "θ", "s", "z", "ʃ", "ʒ", "f", "v", " ", "i", "ɛ", "a", "ɒ", "u", "i˥", "ɛ˥", "a˥", "ɒ˥", "u˥", "i˩", "ɛ˩", "a˩", "ɒ˩", "u˩", " "];
var _spk = ["m", "n", "p", "b", "t", "d", "k", "g", "T", "s", "z", "S", "Z", "f", "v", " ", "i", "E", "a", "0", "u", "i˥", "E˥", "a˥", "0˥", "u˥", "i˩", "E˩", "a˩", "0˩", "u˩", " "];
var _num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, NaN, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, NaN];



function chrFind (chr, set)
{
    for (c in set) {
        if (set[c] == chr) { return parseInt(c); }
    }
    return -1;
}


function latin2IPA (latin)
{
    var IPA = latin.trim().split("?").join(" ");
    for (c in _chr) {
        IPA = IPA.split(_chr[c]).join(_ipa[c]);
    }
    return IPA;
}



var HEAD = "MIHEAD", NOUN = "NOUN", ONOUN = "ONOUN", ADJ = "ADJ", VERB = "VERB";

function gloss2rootIndex (gloss, feature)
{
    feature = feature.toLowerCase();
    if (feature == "onoun") { feature = "noun"; }

    for (l in _lex) {
        var lex = _lex[l];
        var roots = lex[feature].split("/");
        for (r in roots) {
            if (roots[r].toLowerCase() == gloss.toLowerCase()) {
                var index = parseInt(l);
              //Shift past all possibilities of 1111
                index += parseInt(index / 16);
                return index;
            }
        }
    }
    return "?";
}

function gloss2multi (gloss)
{
    var bin_html = [], bin = [], hex_html = [], hex = [], latin_html = [], latin = [], ascii = [];
    gloss = gloss.split(" ");
    var head = gloss.splice(0, 1)[0];
    head = head.substr(2, head.length - 2).split("");
  //Process head byte
    var bin_head = 0;
    for (h in head) {
        switch (head[h]) {
            case "p": bin_head |= 64;  break;
            case "i": bin_head |= 128; break;
            case "f": bin_head |= 192; break;
            case "s": bin_head |= 4;   break;
            case "r": bin_head |= 8;   break;
            case "h": bin_head |= 12;  break;
            case "m": bin_head |= 2;   break;
            case "q": bin_head |= 1;   break;
        }
    }

    var root_bin = bin_head.toString(2);
    bin_html.push("<mihead>"+ pad(root_bin, "00000000") +"</mihead>");
    bin.push(pad(root_bin, "00000000"));

    var root_hex = pad(bin_head.toString(16), "00");
    hex.push(root_hex);
    hex_html.push('<mihead>'+ root_hex +'</mihead>');

    var root_latin = index2latin(bin_head);
    latin.push(root_latin);
    latin_html.push('<mihead>'+ root_latin +'</mihead>');
  //Process words
    var regular = NOUN;
    var last_feature = NOUN;
    for (w in gloss) {
        var feature = gloss[w].substr(0, 2);
        var optional = (gloss[w][1] == "!");
        feature = {"h:":HEAD, "n:":NOUN, "n!":ONOUN, "a!":ADJ, "v:":VERB}[feature];
        var root = "?";

      //Find root index
        root = gloss2rootIndex(gloss[w].substr(2, gloss[w].length - 2), feature);

        if (root != "?") {
            var full_root = (optional ? 128 : 0) + root;
            var root_bin = pad(full_root.toString(2), "00000000");
            var root_hex = pad(full_root.toString(16), "00");
            var root_ascii = '&#'+ full_root +';';
            var root_latin = index2latin(full_root);

            bin.push(root_bin);
            hex.push(root_hex);
            latin.push(root_latin);
            ascii.push(root_ascii);
            bin_html.push('<'+ feature +'>'+ root_bin +'</'+ feature +'>');
            hex_html.push('<'+ feature +'>'+ root_hex +'</'+ feature +'>');
            latin_html.push('<'+ feature +'>'+ root_latin +'</'+ feature +'>');
        } else {
            bin.push(pad((optional ? '1' : '0') + "???????", "00000000"));
            hex.push("??");
            latin.push("?");
            bin_html.push('<'+ feature +'>'+ (optional ? '1' : '0') +'?</'+ feature +'>');
            hex_html.push('<'+ feature +'>??</'+ feature +'>');
            latin_html.push('<'+ feature +'>?</'+ feature +'>');
        }
    }
  //Return binary
    return { bin_html: bin_html.join(""), bin: bin.join(""),
            hex_html: "0x"+ hex_html.join(""), hex: "0x"+ hex.join(""),
            ascii: ascii.join(""),
            latin_html: latin_html.join(""), latin: latin.join(" "),
            ipa: latin2IPA(latin.join(" "))
        };
}

function index2latin (index)
{
    index = parseInt(index);
  //Split and select
    var high = (index & 0xF0) >> 4;
    var low = index & 0x0F;
    high = _con[high];
    low = _vow[low];

    return high +""+ low;
}


//https://itinerarium.github.io/phoneme-synthesis/
function latin2spk (latin)
{
    var spk = "";
    for (c in latin) {
        spk += _spk[chrFind(latin[c], _chr)];
    }
    return spk;
}
