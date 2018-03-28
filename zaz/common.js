var zazAlphabet = "m|a|n|o|p|e|b|u|t|i|d|q|k|á|g|ó|y|é|w|ú|s|í|z|q́|c|à|j|ò|f|è|v|ù|x|ì|l|q̀".split("|");
var zVs = "a|o|e|u|i|q|á|ó|é|ú|í|q́|à|ò|è|ù|ì|q̀".split("|");
var zHs = "a|o|e|u|i|q|ah|oh|eh|uh|ih|qh|ra|ro|re|ru|ri|rq".split("|");
var zoCs = "m|n|p|b|t|d|k|g|y|w|s|z|c|j|f|v|x|l".split("|"); /*ONLY consonants*/
var zCs = "m|n|p|b|t|d|k|g|y|w|s|z|c|j|f|v|x|l| |-|.|'".split("|");
var IPAVs = "a|ɔ|ɛ|u|e|ɒ|aiʔ|ɔiʔ|ɛiʔ|uiʔ|eiʔ|ɒiʔ|ʔia|ʔiɔ|ʔiɛ|ʔiu|ʔie|ʔiɒ".split("|");
var IPACs = "m;n;p;b;t;d;k;g;θ;ð;s;z;ʃ;ʒ;f;v;χ;l; ;-;/   /;:".split(";");
var zazGlosses = [  ["a-","(si.)","(singular)\nused to say there is one of something"],
                    ["o-","(th.)","(this/that)\nuUsed to refer to an object in the context of the conversation"],
                    ["e-","(prod.)","(product)\nMakes the word a product of the previous words"],
                    ["u-","(the)","(the)\nMakes the word a definite item - \'the tree\'"],
                    ["i-","(ofl.)","(of last)\nMakes the word of the last subject, such as a characteristic"],
                    ["q-","(pl.)","(plural)\nMakes the word two or more of the word (only used if the amount is not already stated)"],
                    ["á-","(sub)","(subject)\nMarks the word as the new subject of the clause"],
                    ["ó-","(pll.)","(paucal)\nMakes the word some of the word"],
                    ["é-","(any)","(any)\nMakes the word any of the word"],
                    ["ú-","(all)","(all)\nMakes the word all of the word"],
                    ["í-","(s.)","(source)\nMakes previous words in the sentence go (usually physically) from the word"],
                    ["q́-","(mst.)","(most)\nMarks the word as the most in a selection"],
                    ["à-","(ex.)","(exactly/only)\nMarks the word as the only word in a selection, or marks it as exact"],
                    ["ò-","(ft.)","(first)\nMarks the word as the first in a selection"],
                    ["è-","(lt.)","(last)\nMarks the word as the last in a selection"],
                    ["ù-","(for)","(for)\nMakes the previous clause or object for the word"],
                    ["ì-","(d.)","(destination)\nMakes previous words in the sentence go (usually physically) towards the word"],
                    ["q̀-","(lst.)","(least)\nMarks the word as the least in a selection"],
                    ["ii-","(own)","(owned)\nMarks the word as owned by the subject"],
                    ["qq-","(t.)","(too)\nMakes the word mean -too much- of itself"],
                    
                    ["-a","(adj.)","(adjective)\nMakes the word its adjective form"],
                    ["-o","(v.)","(verb)\nMakes the word its verb form"],
                    ["-e","(b.)","(being)\nMakes the word a being, where it makes something itself"],
                    ["-u","(p.)","(process)"],
                    ["-i","(w.)","(with)"],
                    ["-q","(num.)","(number)"],
                    ["-á","(ag.)","(against)"],
                    ["-ó","(fv.)","(future verb)\nMakes the word its verb form, in the future tense"],
                    ["-é","(fb.)","(future being)\nMakes the word a being, where it makes something itself, in the future tense"],
                    ["-ú","(fp.)","(future process)"],
                    ["-í","(fw.)","(future with)"],
                    ["-q́","(prog.)","(progressive)"],
                    ["-à","(al.)","(alike)"],
                    ["-ò","(pv.)","(past verb)\nMakes the word its verb form, in the past tense"],
                    ["-è","(pb.)","(past being)\nMakes the word a being, where it makes something itself, in the past tense"],
                    ["-ù","(pp.)","(past process)"],
                    ["-ì","(pw.)","(past with)"],
                    ["-q̀","(dn.)","(have done)"],
                    ["-qa","(nnum.)","(negative number)"],
                    
                    ["zo","z:and","and\nsimply creates a new clause"],
                    ["zà","z:thank","thank you\nused to show gratitude"],
                    ["zù","z:no2","no (positive)\nused as a negative response to a question posed in the positive"],
                    ["zì","z:depends","depends on/if\nused to give conditional possibility to a first clause, on account of the second clause."],
                    
                    ["va","v:I","I/me\nused to refer to the speaker (yourself)"],
                    ["qva","v:exclusive","we (exclusive)\nused to refer to the speaker & others, excluding the listener"],
                    ["vo","v:that","this/that\nused to refer to an object in context"],
                    ["ve","v:inclusive","we (inclusive)\nused to refer to the speaker and listener/s"],
                    ["vu","v:you","you\nused to refer to the listener (somebody else)"],
                    ["vi","v:him","him\nused to refer to a male in context"],
                    ["vq","v:her","her\nused to refer to a female in context"],
                    ["vè","v:here","here\nused to refer to the most local vicinity"],
                    
                    ["ka","k:obli","(obligative)\nThe subject -will- do the verb"],
                    ["kq","k:expe","(expedient)\nThe subject -should- do the verb"],
                    
                    ["mq̀","m:q̀","(partner)\nThis person is exclusively with the subject, where they are highly trusted, and loved"]
                 ];

function toIPA(input)
{
    //Remove any end periods
    input = (input[input.length - 1] == "." ? input.substr(0, input.length - 1) : input);
//We need to split the whole input, as there are characters like characters like q\u0301
    input = splitText(input);
    for (var c = 0, len = input.length; c < len; c++)
    {
        var isV = zVs.indexOf(input[c]);
        var isC = zCs.indexOf(input[c]);
        input[c] = (isV > -1 ? IPAVs[isV] : IPACs[isC]);
    }
    input = input.join("");
//Do any doubled letters
    for (var i = 0, len = zVs.length; i < len; i++)
    {
        input = input.split(IPAVs[i] + IPAVs[i]).join(IPAVs[i] + "." + IPAVs[i]);
    }
    for (var i = 0, len = zoCs.length; i < len; i++) //The last 3 should not be done
    {
        input = input.split(IPACs[i] + IPACs[i]).join(IPACs[i] + "." + IPACs[i]);
    }
//Replace ' with :
    //input = input.split("\'").join("\:");
//Replace - with '
    input = input.split("-").join("\'");
//Remove syllable breaks and glottal stops next to non vowels, but not between them
    for (var i = 0, len = zCs.length; i < len; i++)
    {
        input = input.split(IPACs[i] + "." + IPACs[i]).join(IPACs[i] + "..." + IPACs[i]);
        input = input.split(IPACs[i] + ".").join(IPACs[i]);
        input = input.split("." + IPACs[i]).join(IPACs[i]);
        input = input.split("ʔ" + IPACs[i]).join(IPACs[i]);
        input = input.split(IPACs[i] + "ʔ").join(IPACs[i]);
    }
//Remove trailing glottal stops
    input = input.split("ʔ ").join(" ");
    input = input.split(" ʔ").join(" ");
//Remove any starting or ending glottal stops
    input = "#" + input + "#";
    input = input.split("#ʔ").join("#");
    input = input.split("ʔ#").join("#");
    input = input.substring(1, input.length - 1);
//And double dots
    input = input.split("..").join(".");
//And double glottals
    input = input.split("ʔʔ").join("ʔ");
//Create a result
    var result = "/" + input + "/";
//Compress /'s up to letters
    result = result.split("/ ").join("/");
    result = result.split(" /").join(" /");
//Then remove //'s
    result = result.split("//").join("/");
//Return result
    return result;
}

function toZazNumeral(input)
{
    var neg = input < 0;
    input = Math.abs(input);
    var b18 = input.toString(18).toUpperCase();
    var zaz = '';
    for (var z = 0, len = b18.length; z < len; z++)
    {
        var parsed = parseInt(b18[z], 18);
        zaz += (z % 2 == 0 ? zoCs[parsed] : zVs[parsed]);
    }
    return zaz + 'q' + (neg ? "a" : "");
}

//Convert diacritics to other characters
function toNormalisedLatinScript(input, changeFontTo)
{
    var orig = "á|ó|é|ú|í|q́|à|ò|è|ù|ì|q̀".split("|");
    var replace = "á|ó|é|ú|ı́|q́|à|ò|è|ù|ı̀|q̀".split("|");
    for (var v = 0, len = orig.length; v < len; v++)
    {
        if (changeFontTo !== false)
        {
            input = input.split(orig[v]).join(replace[v][0] + "<span style='padding-left:7px;font-size: " + changeFontTo + "%'>" + replace[v][1] + "</span>");
        } else {
            input = input.split(orig[v]).join(replace[v]);
        }
    }
    return input;
}

function toCord(input)
{
//We need to split the whole input, as there are characters like characters like q\u0301
    input = splitText(input);
//Go through, and generate the cord lengths needed
    var built = "<pre>";
    var length = 2;
    var total = 0;
    var start = "<span onclick='this.style.backgroundColor = \"green\"'>";
    var end = "cm</span>\t";
    for (var c = 0, len = input.length; c < len; c++)
    {
        if (input[c] == " ")
        {
            built += "\t";
            length += 2;
        } else {
            for (var C = 0; C < zCs.length - 1; C++)
            {
                if (zCs[C] == input[c])
                { 
                    built += start + "c" + (C + 1) + end;
                    total += C + 1;
                    length++;
                    
eak;
                }
            }
            for (var V = 0; V < zVs.length; V++)
            {
                if (zVs[V] == input[c])
                {
                    built += start + "v" + (V + 1) + end;
                    total += V + 1;
                    length++;
                    break;
                }
            }
        }
    }
    total += length;
    return built + "</pre><br/>" + length + "cm of Primary cord; " + total + "cm of cord in total needed";
}

function toColour(colourHex)
{
    var hexes = [colourHex.substr(1,2), colourHex.substr(3,2), colourHex.substr(5,2)];
    var zaz = '';
    for (var i = 0, len = hexes.length; i < len; i++)
    {
        var parsed = Math.round(parseInt(hexes[i], 16) / 15);
        zaz += (i % 2 == 0 ? zoCs[parsed] : zVs[parsed]);
    }
    return zaz + "qà";
}

function toElement(shells)
{
    /*
amamama m
VCVCVCV C  lower-upper boundry
||||||| |
||||||| \- 1-10 first & second shell
||||||\--- 1-18 third shell
|||||\---- 1-18 first half of fourth shell
||||\----- 0-14 second half of fourth shell
|||\------ 1-18 first half of fifth shell
||\------- 0-14 second half of fifth shell
|\-------- 1-18 sixth shell
\--------- 1-8  seventh shell
    */
    shells = shells.split(", ").join(",");
    shells = shells.split(",");
    for (var s = 0, len = shells.length; s < len; s++)
    {
        shells[s] = parseInt(shells[s]); //this is how many electrons per shell
    }
    var ename = "qá";
    var ns = 0; //name shells - how many characters we have moved
    for (var s = (s > 1 ? 1 : 0), len = shells.length; s < len; s++)
    {
        //First and second shells need to be combined
        if (s == 1) { shells[1] += shells[0]; }
        //The forth and fifth shells need to be split
        if (s == 3 || s == 4)
        {
            var one = (shells[s] < 18 ? shells[s] : 18); //calculate the first half
            var two = (shells[s] > 18 ? shells[s] - 18 : 0); //calculate the second half
            ename = (ns % 2 == 0 ? zoCs[one - 1] : zVs[one - 1]) + ename; //output the number for the amount of electrons - 1
            //don't include the second part of the shell if this the last part of the element, and the second half is 0
            if (shells.length - 1 != s || two != 0)
            {
                ns++;
                ename = (ns % 2 == 0 ? zoCs[two] : zVs[two]) + ename; //output the number for the amount of electrons
            }
        } else {
            ename = (ns % 2 == 0 ? zoCs[shells[s] - 1] : zVs[shells[s] - 1]) + ename; //output the number for the amount of electrons - 1
        }
        ns++;
    }
    return ename;
}

function forZahz(zaz)
{
    return zaz.split("q́").join("h").split("q̀").join("r"); //For font purposes
}

function toLatinZaz(zaz) //Changes diacritical characters like so: à - ra, á - ah
{
    var zahz = splitText(zaz);
    for (var v = 0, len = zHs.length; v < len; v++)
    {
        for (var c = 0, vlen = zahz.length; c < vlen; c++)
        {
            zahz[c] = (zahz[c] === zVs[v] ? zHs[v] : zahz[c]);
        }
    }
    return zahz.join("");
}

/*
        .ahan, .ahanC {
            min-width: 0.2em;
            position: relative;
            margin: 0 !important;
        }
        .ahanC {
            font-size: 60%;
            position: absolute;
            top: 0.4em;
            left: 0.15em;
        }
*/

function toHTMLZahzan(zaz)
{
    zaz = forZahz(zaz);
    var z = toZahzan(zaz);
    var html = '';
    for (var i = 0, len = z.length; i < len; i++)
    {
        if (z[i].v !== false) //Vowel?
        {
            html += '<span class="ahan">' + z[i].v;
            if (z[i].c !== false) //And consonant?
            {
                html += '<span class="ahanC">' + z[i].c + '</span>';
            }
            html += '</span>';
            continue;
        }
        if (z[i].c !== false) //Just consonant (and maybe other)?
        {
            html += '<span class="ahan">' + z[i].c + '</span>' + (z[i].o !== false ? '<span class="ahan">' + z[i].o + '</span>' : '');
            continue;
        }
        //Must be other
        html += '<span class="ahan">' + z[i].o + '</span>';
    }
    return html;
}

function toZahzan(zaz) //Group consonants with their following vowels to create zahzan (and separate other)
{
    zaz = splitText(zaz)
    var zahzan = [];
    for (var c = 0, len = zaz.length; c < len; c++)
    {
        if (cT(zaz[c]) == 1 && (cT(zaz[c + 1]) == 2 || c == len - 1)) //Is this a consonant, followed by a space/punc/end?
        {
            zahzan.push({c: zaz[c], v: false, o: (c != len - 1 ? zaz[c + 1] : false)});
            c++
            continue;
        }
        if (cT(zaz[c]) == 1 && cT(zaz[c + 1]) == 0) //Is this a consonant, followed by a vowel?
        {
            zahzan.push({c: zaz[c], v: zaz[c + 1], o: false});
            c++;
            continue;
        }
        if (cT(zaz[c]) == 0) //Is this a vowel?
        {
            zahzan.push({c: false, v: zaz[c], o: false});
            continue;
        }
        //Must be other
        zahzan.push({c: false, v: false, o: zaz[c]});
    }
    return zahzan;
}

function splitText(input) //Splits zaz text into an array
{
    var splitInput = [];
    for (var c = 0, len = input.length; c < len; c++)
    {
        var nextChar = input[c];
        if (c != input.length - 1)
        {
            if (input[c + 1].charCodeAt(0) == 768 || input[c + 1].charCodeAt(0) == 769) { nextChar += input[c + 1]; c++; }
        }
        splitInput.push(nextChar);
    }
    return splitInput;
}

/*charType*/     function cT(c) { return (zVs.indexOf(c) > -1 || c === "r" || c === "h" ? 0 : (zoCs.indexOf(c) > -1 ? 1 : 2)); } //0: vowel, 1: consonant, 2: other
/*addCommas*/    function aC(s) { s += ''; x = s.split('.'); x1 = x[0]; x2 = x.length > 1 ? '.' + x[1] : ''; var rgx = /(\d+)(\d{3})/; while (rgx.test(x1)) { x1 = x1.replace(rgx, '$1' + ',' + '$2'); } return x1 + x2; }
/*Randnum*/      function rN() { if (window.crypto.getRandomValues === undefined) { return Math.random(); } var rand = new Uint32Array(1); window.crypto.getRandomValues(rand); return pF("0." + rand[0]); }
/*Shuffle array*/function sA(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
/*parseInt*/     function pI(f) { return parseInt(f); }
/*parseFloat*/   function pF(f) { return parseFloat(f); }
/*getElement*/   function gE(e) { return document.getElementById(e); }
