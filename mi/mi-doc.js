
function loadLexicon ()
{
    gE("button#loadLexicon").style.display = "none";
    let lex_html = "";
    let mi_index = 0;
    for (let lex in _lex) {
        let mi      = index2latin(mi_index) +"/"+ index2latin(mi_index+128);
        let noun    = _lex[lex].noun;
        let type    = _lex[lex].type;
        let verb    = _lex[lex].verb;
        let adj     = _lex[lex].adj;
        let comment = _lex[lex].comment;
      //Prepare colours
        function rgb2hex (r, g, b) { return "#"+ Math.floor(r/16).toString(16) + Math.floor(g/16).toString(16) + Math.floor(b/16).toString(16); }
        function w_or_b (r, g, b) { return (determineLumApprox(r/255, g/255, b/255) < .4 ? "#fff" : "#000"); }
        let r1 = (mi_index >> 5) * 36,  g1 = ((mi_index >> 2) & 0x07) * 36,  b1 = (mi_index & 0x03) * 85,
            r2 = ((0x80 | mi_index) >> 5) * 36,  g2 = (((0x80 | mi_index) >> 2) & 0x07) * 36,  b2 = ((0x80 | mi_index) & 0x03) * 85;
        let bg_colour1 = rgb2hex(r1, g1, b1), bg_colour2 = rgb2hex(r2, g2, b2);
        let fg_colour1 = w_or_b(r1, g1, b1), fg_colour2 = w_or_b(r2, g2, b2);

        lex_html += '<tr>'+
            '<td class="hex">0x'+ pad(parseInt(mi_index).toString(16), "00") +'</td>'+
            '<td class="mi"><speaker onclick="spk(\''+ mi +'\')"></speaker> '+ mi +'</td>'+
            '<td class="english cutoff" title="'+ noun +'">'+ noun +'</td>'+
            '<td class="type cutoff" title="'+ type +'">'+ type +'</td>'+
            '<td class="english verb cutoff" title="'+ verb +'">'+ verb +'</td>'+
            '<td class="english adj cutoff" title="'+ adj +'">'+ adj +'</td>'+
            '<td class="comment cutoff" title="'+ comment +'">'+ comment +'</td>'+
            '<td class="mono" style="color: '+ fg_colour1 +'; background-color: '+ bg_colour1 +'">'+ bg_colour1 +'</td>'+
            '<td class="mono" style="color: '+ fg_colour2 +'; background-color: '+ bg_colour2 +'">'+ bg_colour2 +'</td>'+
            '</tr>';
        ++mi_index;
    }
    gE("#s4 #t1").innerHTML += lex_html;
}

function loadExamples ()
{
    gE("button#loadExamples").style.display = "none";
    let examples_html = "";
    for (e in _examples) {
        if (_examples[e][1] == "") { continue; }
        let multi_out = gloss2multi(_examples[e][1]);
        examples_html += "<example><english>"+ _examples[e][0] +"</english>"+
            "<gloss>"+ _examples[e][1] +"</gloss>"+
            "<mi class='native'>"+ multi_out.latin_styled +"</mi>"+
            "<ipa><speaker onclick='spk(\""+ multi_out.latin_styled +"\")''></speaker> /"+ multi_out.ipa +"/</ipa>"+
            (_examples[e][1].indexOf("p:") == -1 ? "<button class='load' onclick='toolSentenceMakerLoad("+ e +")'>load</button>" : "<button class='load' onclick='toolParagrapherLoad("+ e +")'>load</button>")+
            "</example>";
    }
    gE("#s6 examples").innerHTML = examples_html;
}


function loadPage ()
{
  //1. Phonology & Orthography
    //Vowels
    let vow_html = "";
    for (let c = 0, clen = _con.length; c < clen; ++c) {
        let num = c;
        vow_html += '<tr><td>xxxx'+ pad(num.toString(2), '0000') +'</td>'+
            '<td>0x'+ pad(num.toString(16).toUpperCase(), '00') +'</td>'+
            '<td><span class="mi">'+ _chr[c] +'</span> <span class="native">'+ _chr[c] +'</span></td>'+
            '<td><speaker onclick="spk(\''+ _chr[c] +'a\')"></speaker> /'+ _ipa[c] +'/</td></tr>';
    }
    gE("#s1 #t1").innerHTML += vow_html;
    //Consonants
    let con_html = "";
    for (let c = _vow.length, clen = _chr.length - 1; c < clen; ++c) {
        let num = c;
        con_html += '<tr><td>'+ pad(num.toString(2), '0000') +'xxxx</td>'+
            '<td>0x'+ pad(num.toString(16).toUpperCase(), '00') +'</td>'+
            '<td><span class="mi">'+ _chr[c] +'</span> <span class="native">'+ _chr[c] +'</span></td>'+
            '<td><speaker onclick="spk(\''+ _chr[c] +'a\')"></speaker> /'+ _ipa[c] +'/</td></tr>';
    }
    gE("#s1 #t2").innerHTML += con_html;
  //Speakers
    meSpeak.loadConfig("mespeak/mespeak_config.json");
    meSpeak.loadVoice("mespeak/en-rp.json");
  //Tools
    setTimeout(toolSentenceMaker, 100);
  //GET param
    let GET = window.location.search.substr(1);
    if (GET != "") {
        gE("tool#sentence-maker #englishin").value = "";
        gE("tool#sentence-maker #preglossed").checked = true;
        gE("tool#sentence-maker #glossin").value = GET.replace(/\+/g, " ");
        gE("tool#sentence-maker #output").scrollIntoView();
    }
}



//http://www.masswerk.at/mespeak/
let spk_words = [];
let spk_syllables = [];
let spk_w = 0, spk_s = 0;
let spk_speed = 150;
let WORD_GAP = 200;
let SYLL_WAIT = 200;
function speakNext ()
{
    if (spk_w < spk_words.length) {
        if (spk_s == 0) { //Prepare syllables
            spk_syllables = spk_words[spk_w].replace(/(.{2})(\u030B|\u030F)/g, " $1$2 ").replace(/\s+/g, " ").split(" "); // "dɛ̏kudȁʒɛ"  -> ["dɛ̏", "kudȁ", "ʒɛ"]
        }
        if (spk_s < spk_syllables.length) { //Continue speaking syllables
            speakPart(spk_syllables[spk_s]);
            setTimeout(speakNext, SYLL_WAIT*(spk_syllables[spk_s].replace(/˥|˩/g, "").length/2));
            ++spk_s;
        } else { //Finish speaking syllables
            spk_s = 0;
            ++spk_w;
            setTimeout(speakNext, WORD_GAP);
        }
    }
}
function speakPart (part)
{
  //Handle tone, by converting to pitch
    let pitch = 50;
    if (part.slice(-1) == "\u030B") {
        word = part.substr(0, part.length - 1);
        pitch = 90;
    }
    if (part.slice(-1) == "\u030F") {
        word = part.substr(0, part.length - 1);
        pitch = 10;
    }
  //Actually speak, with callback for next syllable
    meSpeak.speak("[["+ part +"]]", {speed: spk_speed, pitch: pitch, wordgap: 0, nostop: true});
}
function spk (text, speed = 100) //Speaks faux-tonal Latin-script mi
{
    spk_speed = speed;
  //Convert to espeak format
    text = latin2spk(text);
  //Split into words
    spk_words = text.split(" ");
  //Begin speech process
    spk_w = 0;
    spk_s = 0;
    speakNext();
}



let _evi = { d: "direct knowledge", s: "non-visual sense", r: "inferential", h: "hearsay" };
let _tense = { n: "no", p: "past", i: "present", f:"future" }
function toolSentenceMaker ()
{
    let preview = [];
    let gloss = gE("tool#sentence-maker #glossin").value.trim();
  //Generate head
    let tense = gE("tool#sentence-maker #tense").value;
    let evidentiality = gE("tool#sentence-maker #evidentiality").value;
    let imperative = gE("tool#sentence-maker #imperative").value;
    let question = gE("tool#sentence-maker #question").value;

    function tf (bool) { return (bool ? "true" : "false"); }
  //Generate gloss
    if (gE("tool#sentence-maker #preglossed").checked) {
        gE("tool#sentence-maker preview").innerHTML = "";
        gE("tool#sentence-maker #glossout").innerHTML = gloss2html(gloss);

        tense = "n";
        evidentiality = "d";
        question = imperative = false;
        let head = gloss.split(" ")[0].split(":")[1];
        for (h in head) {
            switch (head[h]) {
                case "n": case "p": case "i": case "f": tense = head[h]; break;
                case "d": case "s": case "r": case "h": evidentiality = head[h]; break;
                case "m": imperative = true; break;
                case "q": question = true;   break;
            }
        }
    } else {
        gloss = tense + evidentiality + imperative + question +" "+ gloss; //Head
        let input = gloss.split(" ");
        gloss = input;
        let part = 0; //0 head, 1 (noun) noun, 2 (adj) verb, 3 (adj) noun/null ...
        let was_number = false;
        for (w in input) {
            let word = input[w];
            let optional = (word[0] == "!");
            let feature; //either HEAD, NOUN, ONOUN, ADJ, or VERB
            switch (part) {
                case 0: feature = HEAD; break;
                case 1: feature = (optional ? ONOUN : NOUN); break;
                case 2: feature = (optional ? ADJ : VERB); break;
                case 3: feature = (optional ? ADJ : NOUN); break;
            }
            if (!optional) {
                ++part;
                if (part > 3) { part = 1; }
            }

          //Prefix the gloss
            gloss[w] = { "MIHEAD":"h:", "NOUN":"n:", "ONOUN":"n", "ADJ":"a", "VERB":"v:" }[feature] + gloss[w];

          //Prepare if was/is number
            if (was_number) { feature = NUMBER; }
            was_number = (gloss[w] == "n:number");
            if (was_number) { feature = NUMBER; }

            preview.push('<'+ feature +'>'+ word +'</'+ feature +'>');
        }

        gloss = gloss.join(" ");
        gE("tool#sentence-maker preview").innerHTML = preview.join("");
        gE("tool#sentence-maker #glossout").innerHTML = gloss2html(gloss);
    }
    gE("tool#sentence-maker #headerout").innerHTML = _tense[tense] +" tense, "+ _evi[evidentiality] +", "+ (imperative ? "is order" : "not order") +", "+ (question ? "is ask" : "not ask");

  //Generate output
    //English
    let english_in = gE("tool#sentence-maker #englishin").value;
    if (english_in != "") {
        gE("tool#sentence-maker #englishout_tr").style.display = "table-row";
        gE("tool#sentence-maker #englishout").innerHTML = "<p class='english focus'>"+ english_in +"</p>";
    } else {
        gE("tool#sentence-maker #englishout_tr").style.display = "none";
    }
    //Other
    let multi_out = gloss2multi(gloss);
    gE("tool#sentence-maker #binout").innerHTML = multi_out.bin_html;// +"<br>"+ multi_out.bin;
    gE("tool#sentence-maker #hexout").innerHTML = multi_out.hex_html +" "+ multi_out.bytes +"B";// +"<br>"+ multi_out.hex;
    gE("tool#sentence-maker #asciiout").innerHTML = "<input value='"+ multi_out.ascii +"' readonly>";
    gE("tool#sentence-maker #latinout").innerHTML = multi_out.latin_html +" "+ multi_out.chars +" chars"+
        "<span class='focus'>"+ multi_out.latin_styled +"</span>"+
        "/"+ multi_out.ipa +'/ <speaker onclick="spk(\''+ multi_out.latin_styled.split("?").join("") +'\')"></speaker><br>';
    gE("tool#sentence-maker #scriptout").innerHTML = multi_out.latin_styled;
  //Popup & permalink
    gE("tool#sentence-maker #popup_link").href = "sentence-maker-output.html?"+ btoa(encodeURIComponent(gE("tool#sentence-maker #output").outerHTML));
    gE("tool#sentence-maker #perma_link").href = "?"+ gloss.replace(/ /g, "+");
  //tool-translate
    gE("tool#translate #input").value = multi_out.latin_styled;
}


function toolSentenceMakerLoad (e)
{
    let example = _examples[e];
    gE("tool#sentence-maker #preglossed").checked = true;
    gE("tool#sentence-maker #englishin").value = example[0];
    gE("tool#sentence-maker #glossin").value = example[1];
    toolSentenceMaker();
    gE("tool#sentence-maker #output").scrollIntoView();
    return false;
}
function toolParagrapherLoad (e)
{
    let example = _examples[e];
    gE("tool#paragrapher #englishin").value = example[0];
    gE("tool#paragrapher #input").value = example[1];
    toolParagrapher();
    gE("tool#paragrapher #output").scrollIntoView();
    return false;
}



function toolParagrapher ()
{
    gE("tool#paragrapher #englishout").innerHTML = "<english>"+ gE("tool#paragrapher #englishin").value +"</english>";
    let gloss = gE("tool#paragrapher #input").value;
    gE("tool#paragrapher #glossout").innerHTML = "<gloss>"+ gloss2html(gloss) +"</gloss>";
    var multi_out = gloss2multi(gloss);
    gE("tool#paragrapher #asciiout").innerHTML = "<input value='"+ multi_out.ascii +"' readonly>";
    gE("tool#paragrapher #latinout").innerHTML = multi_out.latin_html +" "+ multi_out.chars +" chars"+
        "<span class='focus'>"+ multi_out.latin_styled +"</span>"+
        "/"+ multi_out.ipa +'/ <speaker onclick="spk(\''+ multi_out.latin_styled.split("?").join("") +'\')"></speaker><br>';
    gE("tool#paragrapher #scriptout").innerHTML = multi_out.latin_styled;
}



function toolTranslate ()
{
    let mi_in = gE("tool#translate #input").value;
    mi_in = mi_in.replace(/ /g, "").split("");

  //Convert the mi into an array of bytes
    let bytes = [];
    let is_con = true;
    let high, low;
    for (c in mi_in) {
        let ch = mi_in[c];
        let index = -1;
        if (is_con) {
            index = chrFind(ch, _con);
        } else {
            index = chrFind(ch, _vow);
        }
        if (index != -1) {
            if (is_con) {
                high = index;
            } else {
                low = index;
                bytes.push( (high << 4) | low );
            }
        } else {
            //Not found
        }
        is_con = !is_con;
    }

  //Loop through the bytes and find word based off index supplied, and current word order
    let english_out = "";
    let part = 0;
    for (let b = 0, b_max = bytes.length; b < b_max; ++b) {
        let byte = bytes[b];
        //Determine word order
        let optional = byte & 0x80;
        let index = byte & 0x7F;
        let feature;
        switch (part) {
            case 0: feature = HEAD; break;
            case 1: feature = (optional ? ONOUN : NOUN); break;
            case 2: feature = (optional ? ADJ : VERB); break;
            case 3: feature = (optional ? ADJ : NOUN); break;
        }
        if (!optional || feature == HEAD) {
            ++part;
            if (part > 3) { part = 1; }
        }

        if (feature == HEAD) { //Extract head data
            let tense = (byte & 0xC0) >> 6;
            let evidentiality = (byte & 0xC) >> 2;
            let imperative = (byte & 0x2) >> 1;
            let question = byte & 0x1;
            tense = Object.keys(_tense)[tense];
            evidentiality = Object.keys(_evi)[evidentiality];
            let head = _tense[tense] +" tense, "+ _evi[evidentiality] + (imperative ? ", imperative" : "") + (question ? ", question" : "");
            english_out += " <mihead>("+ head +")</mihead>";
        } else {
            if (byte == 0x7F || byte == 0xFF) { //It's a p:old/p:new
                part = 1 - ((byte & 0x80) >> 7);
                english_out += " <period>"+ (byte == 0xFF ? "new" : "old") +"</period>";
                continue;
            }
            let words = _lex[index][ { NOUN: "noun", ONOUN: "noun", VERB: "verb", ADJ: "adj" }[feature] ];
            if (words == "number") {
                let nums = []; //Array of 7-bits, to be shifted by 7 onwards
              //Scan the sentence and build the number
                while (++b < bytes.length) {
                    let to_continue = bytes[b] & 0x80;
                    nums.unshift(bytes[b] & 0x7F);
                    if (!to_continue) { break; }
                }
              //Build the number from the 7-bit nums
                let num = 0;
                for (let n = 0, n_max = nums.length; n < n_max; ++n) {
                    num += nums[n] << n*7;
                }
                english_out += " <number>"+ num +"</number>";
              //Continue the sentence
                part = 2;
                continue;
            }
            english_out += " <"+ feature +">"+ words +"</"+ feature +">";
        }
    }

    gE("tool#translate #output").innerHTML = english_out;
}


function toolSpeakerSpeak ()
{
    spk(gE("#tool-speaker-input").value);
}
