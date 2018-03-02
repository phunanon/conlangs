

let _vow = ["i", "e", "a", "o", "u", "í", "é", "á", "ó", "ú", "ì", "è", "à", "ò", "ù", "h"];
let _con = ["m", "n", "p", "b", "t", "d", "k", "g", "w", "s", "z", "c", "j", "f", "v", "y"];
let _chr = _vow.concat(_con).concat(" ");
let _ipa = ["i", "ɛ", "a", "ɒ", "u", "i\u030B", "ɛ\u030B", "a\u030B", "ɒ\u030B", "u\u030B", "i\u030F", "ɛ\u030F", "a\u030F", "ɒ\u030F", "u\u030F", "ə", "m", "n", "p", "b", "t", "d", "k", "g", "w", "s", "z", "ʃ", "ʒ", "f", "v", "θ", " "];
let _spk = ["i", "E", "a", "0", "u", "i\u030B", "E\u030B", "a\u030B", "0\u030B", "u\u030B", "i\u030F", "E\u030F", "a\u030F", "0\u030F", "u\u030F", "@", "m", "n", "p", "b", "t", "d", "k", "g", "w", "s", "z", "S", "Z", "f", "v", "T", " "];
let HEAD = "MIHEAD", NOUN = "NOUN", ONOUN = "ONOUN", ADJ = "ADJ", VERB = "VERB", NUMBER = "NUMBER", PERIOD = "PERIOD";



function chrFind (chr, set)
{
    for (c in set) {
        if (set[c] == chr) { return parseInt(c); }
    }
    return -1;
}


function latin2IPA (latin)
{
    let IPA = latin.trim().split("?").join(" ");
    for (c in _chr) {
        IPA = IPA.split(_chr[c]).join(_ipa[c]);
    }
    return IPA;
}


function determineGlossFeatures (gloss)
{
    return { optional: (gloss[1] == "!"), feature: {"h:":HEAD, "n:":NOUN, "n!":ONOUN, "a!":ADJ, "v:":VERB, "p:":PERIOD}[gloss.substr(0, 2)] }
}


function gloss2html (gloss)
{
    gloss = gloss.split(" ");
    let gloss_html = ""
    for (g in gloss) {
        let feature = determineGlossFeatures(gloss[g]).feature;
        gloss_html += "<"+ feature +">"+
            " <span class='feature'>"+ gloss[g].substr(0, 2) +"</span>"+
            gloss[g].substr(2, gloss[g].length-2) +
            "</"+ feature +">";
    }
    return gloss_html;
}


function head2binhead (head)
{
    let bin_head = 0;
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
    return bin_head;
}


function gloss2rootIndex (gloss, feature)
{
    feature = feature.toLowerCase();
    if (feature == "onoun") { feature = "noun"; }
    if (feature == "period") { return (gloss == "new" ? 0xFF : 0x7F); }
    if (feature == "mihead") { return head2binhead(gloss); }

    for (l in _lex) {
        let lex = _lex[l];
        let roots = lex[feature].split("/");
        for (r in roots) {
            if (roots[r].toLowerCase() == gloss.toLowerCase()) {
                let index = parseInt(l);
                return index;
            }
        }
    }
    return "?";
}

let latin_space_rules = {
    NUMBER_NUMBER: false, NUMBER_NOUN: false, NUMBER_ONOUN: false, NUMBER_VERB: true, NUMBER_ADJ: true, NUMBER_MIHEAD: true, NUMBER_PERIOD: true,
    NOUN_NUMBER: true, NOUN_NOUN: false, NOUN_ONOUN: false, NOUN_VERB: true, NOUN_ADJ: false, NOUN_MIHEAD: true, NOUN_PERIOD: true,
    ONOUN_NUMBER: true, ONOUN_NOUN: false, ONOUN_ONOUN: false, ONOUN_VERB: true, ONOUN_ADJ: false, ONOUN_MIHEAD: true, ONOUN_PERIOD: true,
    VERB_NUMBER: true, VERB_NOUN: true, VERB_ONOUN: true, VERB_ADJ: false, VERB_MIHEAD: true, VERB_PERIOD: true,
    ADJ_NUMBER: true, ADJ_NOUN: true, ADJ_ONOUN: false, ADJ_VERB: true, ADJ_ADJ: false, ADJ_MIHEAD: true, ADJ_PERIOD: true,
    MIHEAD_NUMBER: true, MIHEAD_NOUN: true, MIHEAD_ONOUN: true, MIHEAD_VERB: true, MIHEAD_ADJ: true, MIHEAD_MIHEAD: true, MIHEAD_PERIOD: true,
    PERIOD_NUMBER: true, PERIOD_NOUN: true, PERIOD_ONOUN: true, PERIOD_VERB: true, PERIOD_ADJ: true, PERIOD_MIHEAD: true, PERIOD_PERIOD: true
};
function gloss2multi (gloss)
{
    let bin_html = [], bin = [], hex_html = [], hex = [], latin_html = "", latin_styled = "", latin = [], ascii = [];
    gloss = gloss.split(" ");
  //Process words
    let regular = NOUN;
    let prev_feature = HEAD;
    let is_numbering = false, number = [], n = 0;

    function getGlossRoot (w) { return gloss[w].substr(2, gloss[w].length - 2); }

    let gloss_len = gloss.length;
    for (let w = 0; w < gloss_len; ++w) {
        let features = determineGlossFeatures(gloss[w]);
        let feature = features.feature;
        let optional = features.optional;
        let root = "?";
        let gloss_root = "";

        if (!is_numbering) {
          //Find root index
            gloss_root = getGlossRoot(w);
            root = gloss2rootIndex(gloss_root, feature);
        } else {
            root = parseInt(number[n].substr(1, 7), 2);
            optional = parseInt(number[n][0]);
        }

        let space = (latin_space_rules[prev_feature+"_"+feature] ? " " : "");
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
            let full_root = (optional ? 128 : 0) + root;
            let root_bin = pad(full_root.toString(2), "00000000");
            let root_hex = pad(full_root.toString(16), "00");
            let root_ascii = "&#"+ full_root +";";
            let root_latin = index2latin(full_root);

            bin.push(root_bin);
            hex.push(root_hex);
            latin.push(root_latin);
            ascii.push(root_ascii);
            bin_html.push('<'+ feature +'>'+ root_bin +'</'+ feature +'>');
            hex_html.push('<'+ feature +'>'+ root_hex +'</'+ feature +'>');
            latin_html += space + '<'+ feature +'_subtle>'+ root_latin +'</'+ feature +'_subtle>';
            latin_styled += space + root_latin;
        } else {
            bin.push(pad((optional ? '1' : '0') + "???????", "00000000"));
            hex.push("??");
            latin.push("?");
            bin_html.push('<'+ feature +'>'+ (optional ? '1' : '0') +'?</'+ feature +'>');
            hex_html.push('<'+ feature +'>??</'+ feature +'>');
            latin_html += '<'+ feature +'_subtle>??</'+ feature +'_subtle>';
            latin_styled += space + "??";
        }
        prev_feature = feature;
    }
  //Return processed results
    return { bin_html: bin_html.join(""), bin: bin.join(""),
            hex_html: "0x"+ hex_html.join(""), hex: "0x"+ hex.join(""),
            ascii: ascii.join(""),
            latin_html: latin_html, latin_styled: latin_styled.trim(), latin: latin.join(" "),
            ipa: latin2IPA(latin_styled),
            bytes: hex.length, chars: hex.length*2
        };
}

function index2latin (index)
{
    index = parseInt(index);
  //Split and select
    let high = (index & 0xF0) >> 4;
    let low = index & 0x0F;
    high = _con[high];
    low = _vow[low];

    return high +""+ low;
}


//https://itinerarium.github.io/phoneme-synthesis/
function latin2spk (latin)
{
    let spk = "";
    for (c in latin) {
        spk += _spk[chrFind(latin[c], _chr)];
    }
    return spk;
}


function num2mi_bin (num)
{
    num = parseInt(num);
    let overflows = Math.floor(Math.floor(Math.log2(num)) / 7);
    let bin = num.toString(2);
    bin = pad(bin, new Array( (Math.ceil(bin.length / 7) * 7) + 1 ).join("0"));
    let num_out = [];
    for (let o = 0; o <= overflows; ++o) {
        let this_bin = bin.substr(o * 7, 7);
        num_out.push((o < overflows ? "1" : "0") + pad(this_bin, "0000000"));
    }
    return num_out
}





function gEs (e) { return document.querySelectorAll(e); }
function gE  (e) { return document.querySelector(e); }
function pad (n, p) { return (p + n).slice(-p.length); }
function determineLumApprox (r, g, b) { return (0.33 * r) + (0.5 * g) + (0.16 * b); }
function insertArrayAt (array, index, insert) { Array.prototype.splice.apply(array, [index, 0].concat(insert)); }
function rt (num, multiple) { return multiple*Math.round(num/multiple); } //Round to multiple
