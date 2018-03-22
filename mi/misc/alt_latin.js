var _alt_vow = ["i", "e", "a", "o", "u", "im", "em", "am", "om", "um", "in", "en", "an", "on", "un", "h"];
var _alt_con = ["p", "b", "t", "d", "k", "g", "r", "s", "z", "c", "j", "f", "v", "y", "l", "w"];
function index2altLatin (index)
{
    index = parseInt(index);
  //Split and select
    let high = (index & 0xF0) >> 4;
    let low = index & 0x0F;
    high = _alt_con[high];
    low = _alt_vow[low];

    return high +""+ low;
}

var mi_hex = "0c7c004dae6139fe7f365ec2391112fe4fde367f61fe5e087f361c08613935bd7f27048661ce3964".match(/.{2}/g);
var mi_latin = "";
for (let m of mi_hex) {
    m = parseInt(m, 16);
    mi_latin += index2altLatin(m) + " ";
}

console.log(mi_latin.trim());