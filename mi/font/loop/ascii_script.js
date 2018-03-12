bin = "0000110010100101001101100010011101111111110011100011011000111001";
bin = bin.match(/.{2}/g);
ascii = "";
i = 0;
for (let b in bin) {
    if (b % 4 == 0) { ascii += " "; }
    switch (bin[b]) {
        case "00": ascii += "i"; break;
        case "01": ascii += "o"; break;
        case "10": ascii += "|"; break;
        case "11": ascii += "0"; break;
    }
}
ascii.trim()