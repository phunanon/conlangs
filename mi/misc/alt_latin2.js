var _1 = ["p", "t", "k", "ʃ"];
var _2 = ["", "ʼ"];
var _3 = ["ə", "ɛ", "a", "ɒ"];
var _4 = ["ʔ", "m", "n", "θ", "f", "l", "s", "ɾ"];

function index2altLatin (index)
{
    index = parseInt(index);
  //Split and select
    let _2_ = (index & 0x80) >> 7;
    let _1_ = (index & 0x60) >> 5;
    let _3_ = (index & 0x18) >> 3;
    let _4_ = (index & 0x07);

    return _1[_1_] + _2[_2_] + _3[_3_] + _4[_4_];
}

var mi_hex = "40001ea745".match(/.{2}/g);
var mi_latin = "";
for (let m of mi_hex) {
    m = parseInt(m, 16);
    mi_latin += index2altLatin(m) + " ";
}

console.log(mi_latin.trim());