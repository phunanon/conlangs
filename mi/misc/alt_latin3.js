//att'a
//12345
//
//00000000
//34221155

var f1_5 = ["ə", "ɛ", "a", "ɒ"];
var f2 = ["p", "t", "k", "ʃ"];
var f3 = ["", "-"];
var f4 = ["", "ʼ"];

function index2altLatin (index)
{
    index = parseInt(index);
  //Split and select
    let _3 = (index & 0x80) >> 7;
    let _4 = (index & 0x40) >> 6;
    let _2 = (index & 0x30) >> 4;
    let _1 = (index & 0x0C) >> 2;
    let _5 = (index & 0x03) >> 0;

    return f1_5[_1] + f2[_2] + f3[_3] + f4[_4] + f1_5[_5];
}

var mi_hex = "4837ba2a0d".match(/.{2}/g);
var mi_latin = "";
for (let m of mi_hex) {
    m = parseInt(m, 16);
    mi_latin += index2altLatin(m) + " ";
}

console.log(mi_latin.trim());
