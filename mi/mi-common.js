

var _vow = ["i", "e", "a", "o", "u", "í", "é", "á", "ó", "ú", "ì", "è", "à", "ò", "ù", "q"];
var _con = ["m", "n", "p", "b", "t", "d", "k", "g", "w", "s", "z", "c", "j", "f", "v", "y"];
var _chr = _con.concat(_vow).concat(" ");
var _ipa = ["m", "n", "p", "b", "t", "d", "k", "g", "θ", "s", "z", "ʃ", "ʒ", "f", "v", "ð", "i", "ɛ", "a", "ɒ", "u", "i˥", "ɛ˥", "a˥", "ɒ˥", "u˥", "i˩", "ɛ˩", "a˩", "ɒ˩", "u˩", "ə", " "];
var _spk = ["m", "n", "p", "b", "t", "d", "k", "g", "T", "s", "z", "S", "Z", "f", "v", "D", "i", "E", "a", "0", "u", "i˥", "E˥", "a˥", "0˥", "u˥", "i˩", "E˩", "a˩", "0˩", "u˩", "@", " "];


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



var HEAD = "MIHEAD", NOUN = "NOUN", ONOUN = "ONOUN", ADJ = "ADJ", VERB = "VERB", NUMBER = "NUMBER";

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

var latin_space_rules = {
    NUMBER_NUMBER: false, NUMBER_NOUN: false, NUMBER_ONOUN: false, NUMBER_VERB: true, NUMBER_ADJ: true,
    NOUN_NUMBER: true, NOUN_NOUN: false, NOUN_ONOUN: false, NOUN_VERB: true, NOUN_ADJ: false,
    ONOUN_NUMBER: true, ONOUN_NOUN: false, ONOUN_ONOUN: false, ONOUN_VERB: true, ONOUN_ADJ: false,
    VERB_NUMBER: true, VERB_NOUN: true, VERB_ONOUN: true, VERB_ADJ: false,
    ADJ_NUMBER: true, ADJ_NOUN: false, ADJ_ONOUN: false, ADJ_VERB: true, ADJ_ADJ: false
};
function gloss2multi (gloss)
{
    var bin_html = [], bin = [], hex_html = [], hex = [], latin_html = [], latin_styled = "", latin = [], ascii = [];
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
    var prev_feature = HEAD;
    var is_numbering = false, number = [], n = 0;

    function getGlossRoot (w) { return gloss[w].substr(2, gloss[w].length - 2); }

    var gloss_len = gloss.length;
    for (var w = 0; w < gloss_len; ++w) {
        var feature = gloss[w].substr(0, 2);
        var optional = (gloss[w][1] == "!");
        feature = {"h:":HEAD, "n:":NOUN, "n!":ONOUN, "a!":ADJ, "v:":VERB}[feature];
        var root = "?";
        var gloss_root = "";

        if (!is_numbering) {
          //Find root index
            gloss_root = getGlossRoot(w);
            root = gloss2rootIndex(gloss_root, feature);
        } else {
            root = parseInt(number[n].substr(1, 7), 2);
            optional = parseInt(number[n][0]);
        }

        if (root != "?" || is_numbering) {
          //Prepare if number
            if (is_numbering || gloss_root == "number") {
                if (gloss_root == "number") { //Begin numbering?
                    is_numbering = true;
                    feature = NUMBER;
                    number = num2mi_bin(getGlossRoot(w + 1));
                    gloss.splice(w + 1, 1);
                    insertArrayAt(gloss, w + 1, number);
                    gloss_len += number.length - 1;
                } else if (optional) { //Continue numbering?
                    ++n;
                    is_numbering = true;
                    feature = NUMBER;
                } else { //Reset for next number
                    n = 0;
                    is_numbering = false;
                    feature = NUMBER;
                }
            }
            var full_root = (optional ? 128 : 0) + root;
            var root_bin = pad(full_root.toString(2), "00000000");
            var root_hex = pad(full_root.toString(16), "00");
            var root_ascii = "&#"+ full_root +";";
            var root_latin = index2latin(full_root);

            bin.push(root_bin);
            hex.push(root_hex);
            latin.push(root_latin);
            ascii.push(root_ascii);
            bin_html.push('<'+ feature +'>'+ root_bin +'</'+ feature +'>');
            hex_html.push('<'+ feature +'>'+ root_hex +'</'+ feature +'>');
            latin_html.push('<'+ feature +'>'+ root_latin +'</'+ feature +'>');
            latin_styled += (latin_space_rules[prev_feature+"_"+feature] ? " " : "") + root_latin;
        } else {
            bin.push(pad((optional ? '1' : '0') + "???????", "00000000"));
            hex.push("??");
            latin.push("?");
            bin_html.push('<'+ feature +'>'+ (optional ? '1' : '0') +'?</'+ feature +'>');
            hex_html.push('<'+ feature +'>??</'+ feature +'>');
            latin_html.push('<'+ feature +'>?</'+ feature +'>');
        }
        prev_feature = feature;
    }
  //Return binary
    return { bin_html: bin_html.join(""), bin: bin.join(""),
            hex_html: "0x"+ hex_html.join(""), hex: "0x"+ hex.join(""),
            ascii: ascii.join(""),
            latin_html: latin_html.join(""), latin_styled: latin_styled.trim(), latin: latin.join(" "),
            ipa: latin2IPA(latin_styled)
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


function num2mi_bin (num)
{
    num = parseInt(num);
    var overflows = Math.floor(Math.floor(Math.log2(num)) / 7);
    var bin = num.toString(2);
    bin = pad(bin, new Array( (Math.ceil(bin.length / 7) * 7) + 1 ).join("0"));
    var num_out = [];
    for (var o = 0; o <= overflows; ++o) {
        var this_bin = bin.substr(o * 7, 7);
        num_out.push((o < overflows ? "1" : "0") + pad(this_bin, "0000000"));
    }
    return num_out
}





function gEs (e) { return document.querySelectorAll(e); }
function gE  (e) { return document.querySelector(e); }
function pad (n, p) { return (p + n).slice(-p.length); }
function determineLumApprox (r, g, b) { return (0.33 * r) + (0.5 * g) + (0.16 * b); }
function insertArrayAt (array, index, insert) { Array.prototype.splice.apply(array, [index, 0].concat(insert)); }
