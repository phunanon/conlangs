//tt'a
//1234
//
//00000000
//21113444

let i1 = ["p", "t", "k", "ʃ", "v", "s", "z", "ʒ"];
let o1 = ["p", "t", "k", "c", "v", "s", "z", "j"];
let i2 = ["", "-"];
let i3 = ["", "'"];
let i4 = ["i", "e", "ɛ", "a", "ɒ", "o", "u", "ə"];
let o4 = ["i", "y", "e", "a", "q", "o", "u", "h"];

function alt_i2ipa (index)
{
    index = parseInt(index);
  //Split and select
    let _1 = (index & 0x70) >> 4;
    let _2 = (index & 0x80) >> 7;
    let _3 = (index & 0x08) >> 3;
    let _4 = (index & 0x07);

    return i1[_1] + i2[_2] + i3[_3] + i4[_4];
}
function alt_i2latin (index)
{
    index = parseInt(index);
  //Split and select
    let _1 = (index & 0x70) >> 4;
    let _2 = (index & 0x80) >> 7;
    let _3 = (index & 0x08) >> 3;
    let _4 = (index & 0x07);

    return o1[_1] + o4[_4] + (_2 && _3 ? "\u030C" : (_2?"\u0300":"") + (_3?"\u0301":""));
}
function mihex2alt (hex)
{
    let mi_hex = hex.match(/.{2}/g);
    let mi_latin = "";
    let mi_ipa = "";

    for (let m of mi_hex) {
        m = parseInt(m, 16);
        mi_ipa += alt_i2ipa(m) +" ";
        mi_latin += alt_i2latin(m) +" ";
    }
    mi_ipa = mi_ipa.slice(0, -1);
    mi_latin = mi_latin.slice(0, -1);

    return { latin: mi_latin, ipa: mi_ipa.replace(/(.)-/g, "$1$1") };
}

let alt_multi = mihex2alt("4cb6385f5c4c14385638c57f56d2146267623356");
console.log(alt_multi.latin +"\n/"+ alt_multi.ipa +"/");