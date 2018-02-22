

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

function gloss2multi (gloss)
{
    var bin_html = [], bin = [], hex_html = [], hex = [], latin_html = [], latin = [], ascii_html = [], ascii = [];
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
            var root_ascii = num2ascii(full_root);
            var root_latin = index2latin(full_root);

            bin.push(root_bin);
            hex.push(root_hex);
            latin.push(root_latin);
            ascii.push(root_ascii);
            bin_html.push('<'+ feature +'>'+ root_bin +'</'+ feature +'>');
            hex_html.push('<'+ feature +'>'+ root_hex +'</'+ feature +'>');
            latin_html.push('<'+ feature +'>'+ root_latin +'</'+ feature +'>');
            ascii_html.push(num2ascii_html(full_root));
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
            ascii_html: ascii_html.join(""), ascii: ascii.join(""),
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


function num2ascii (num)
{
    return "&#"+ num +";";
}
function num2ascii_html (num)
{
    copyable = num2ascii(num);
    var is_invisible = num < 32;
    if (is_invisible) { num += 0x2400; }
    return "<char data-show='"+ num2ascii(num) +"'"+ (is_invisible ? " style='margin: 0 .15rem'" : "") +">"+ copyable +"</char>";
}






function gEs (e) { return document.querySelectorAll(e); }
function gE  (e) { return document.querySelector(e); }
function pad (n, p) { return (p + n).slice(-p.length); }
function determineLumApprox (r, g, b) { return (0.33 * r) + (0.5 * g) + (0.16 * b); }
function insertArrayAt (array, index, insert) { Array.prototype.splice.apply(array, [index, 0].concat(insert)); }
