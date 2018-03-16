
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
        examples_html += "<example><table><tbody><tr>"+
            "<td><native2>"+ latin2restHTML(multi_out.latin_styled, 8) +"</native2></td>"+
            "<td><english>"+ _examples[e][0] +"</english>"+
            "<gloss>"+ _examples[e][1] +"</gloss>"+
            "<ipa><speaker onclick='spk(\""+ multi_out.latin_styled +"\")''></speaker> /"+ multi_out.ipa +"/</ipa>"+
            (_examples[e][1].indexOf("p:") == -1 ? "<button class='load' onclick='toolSentencerLoad("+ e +")'>load</button>" : "<button class='load' onclick='toolParagrapherLoad("+ e +")'>load</button>")+
            "</td></tr></tbody></table></example>";
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
            '<td><span class="mi">'+ _chr[c] +'</span> <span class="native1">'+ _chr[c] +'</span> <span class="native2">'+ _chr[c] +'</span> <span class="native4">'+ _chr[c] +'</span></td>'+
            '<td><speaker onclick="spk(\''+ _chr[c] +'a\', 100)"></speaker> /'+ _ipa[c] +'/</td></tr>';
    }
    gE("#s1 #t1").innerHTML += vow_html;
    //Consonants
    let con_html = "";
    for (let c = _vow.length, clen = _chr.length - 1; c < clen; ++c) {
        let num = c;
        con_html += '<tr><td>'+ pad(num.toString(2), '0000') +'xxxx</td>'+
            '<td>0x'+ pad((num<<4).toString(16).toUpperCase(), '00') +'</td>'+
            '<td><span class="mi">'+ _chr[c] +'</span> <span class="native1">'+ _chr[c] +'</span> <span class="native2">'+ _chr[c] +'</span> <span class="native4">'+ _chr[c] +'</span></td>'+
            '<td><speaker onclick="spk(\''+ _chr[c] +'a\', 100)"></speaker> /'+ _ipa[c] +'/</td></tr>';
    }
    gE("#s1 #t2").innerHTML += con_html;
  //Speakers
    meSpeak.loadConfig("mespeak/mespeak_config.json");
    meSpeak.loadVoice("mespeak/en-rp.json");
  //Tools
    setTimeout(toolSentencer, 100);
    setTimeout(toolParagrapher, 200);
  //GET param
    let GET = window.location.search.substr(1);
    if (GET != "") {
        gE("tool#sentencer #englishin").value = "";
        gE("tool#sentencer #preglossed").checked = true;
        gE("tool#sentencer #glossin").value = GET.replace(/\+/g, " ");
        gE("tool#sentencer #output").scrollIntoView();
    }
}



//http://www.masswerk.at/mespeak/
let spk_words = [];
let spk_syllables = [];
let spk_w = 0, spk_s = 0;
let SPK_SPEED;
let WORD_GAP = 140;
let SYLL_WAIT = 110;
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
    let pitch = 45;
    if (part.slice(-1) == "\u030B") {
        word = part.substr(0, part.length - 1);
        pitch = 70;
    }
    if (part.slice(-1) == "\u030F") {
        word = part.substr(0, part.length - 1);
        pitch = 10;
    }
  //Actually speak, with callback for next syllable
    meSpeak.speak("[["+ part +"]]", {speed: SPK_SPEED, pitch: pitch, wordgap: 0, nostop: true});
}
function spk (text, speed = 220) //Speaks faux-tonal Latin-script mi
{
    SPK_SPEED = speed;
  //Convert to espeak format
    text = latin2spk(text);
  //Split into words
    spk_words = text.split(" ");
  //Begin speech process
    spk_w = 0;
    spk_s = 0;
    speakNext();
}



function latin2restHTML (latin_styled, MAX_LINE)
{
    latin_styled = latin_styled.replace(/ /g, "");
  //Attempt to make squared
    if (latin_styled.length < MAX_LINE * 4) {
        MAX_LINE = Math.ceil(latin_styled.length / 4);
    }
  //Sort consonants and vowels
    let cons = [], vows = [];
    for (let c = 0, c_max = latin_styled.length; c < c_max; ++c) {
        if (c % 2) {
            vows.push(latin_styled[c]);
        } else {
            cons.push(latin_styled[c]);
        }
    }
  //Output rows
    let ret_html = "", cons_html = vows_html = "<tr>";
    for (let i = 0, i_max = cons.length; i < i_max; ++i) {
        cons_html += "<td>"+ cons[i] +"</td>";
        vows_html += "<td>"+ vows[i] +"</td>";
        if (!((i + 1) % MAX_LINE)) {
           cons_html += "</tr>";
           vows_html += "</tr>";
           ret_html += cons_html + vows_html;
           cons_html = vows_html = "<tr>";
        }
    }
    ret_html += cons_html + vows_html;
    return "<table><tbody>"+ ret_html +"</tbody></table>";
}


let latin2cursiveSVG_count = 0;
function latin2cursiveSVG (latin, MAX_LINE)
{
    latin = latin.replace(/ /g, "");
    let WRD_W = 64, WRD_H = 128, PART_W = 23.192;

    let X_START = '<path d="m ';
    let X_STYLE = '" style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;transform:translate(';
    let LFT_WING = X_START +'16,58 -15,24'+ X_STYLE;
    let RGT_WING = X_START +'64,34 -16,24'+ X_STYLE;
    let TOP_STRK = X_START +'16,26 H 56'+ X_STYLE;
    let BOT_STRK = X_START +'8,90 H 48'+ X_STYLE;
    let LFT_01   = X_START +'12,47 C 0,70 10,70 16,58'+ X_STYLE;
    let LFT_10   = X_START +'4,94 c 4,-12 3,-19 12,-36'+ X_STYLE;
    let LFT_11   = X_START +'20,62 c -2,28 -31,35 -4,-4'+ X_STYLE;
    let RGT_01   = X_START +'52,70 c 10,-26 2,-23 -4,-12'+ X_STYLE;
    let RGT_10   = X_START +'60,22 c -4,12 -3,19 -12,36'+ X_STYLE;
    let RGT_11   = X_START +'44,54 c 2,-28 31,-35 4,4'+ X_STYLE;
    let TOP_LOOP = ',58 v -46 c 1,-18 34,-17 -8,46'+ X_STYLE;
    let TOP_LINE = ',58 v -56 c -3,31 -0,44 -8,56'+ X_STYLE;
    let BOT_LOOP = ',58 v 46 c -1,17 -33,16 8,-46'+ X_STYLE;
    let BOT_LINE = ',58 v 56 c 3,-31 0,-44 8,-56'+ X_STYLE;
    let C_ENDING = ')" />';

    let x = 0, y = 0, l = 1;
    let SVG_out = '<svg id="cursiveSVGout'+latin2cursiveSVG_count+'" version="1.1" style="width: 30rem;/*transform:scale(4)*/" viewBox="0 0 1024 128">';
    let is_con = true;
    function appendSVG (svg) { SVG_out += svg + x + 'px,'+ y +'px' + C_ENDING; }
    for (const c of latin) {
        if (c == "?") { continue; }
        if (is_con) {
            let c_bin = chrFind(c, _con);
            if ((c_bin & 0xC) == 0xC) { appendSVG(LFT_11); }
            else if (c_bin & 0x8) { appendSVG(LFT_10); }
            else if (c_bin & 0x4) { appendSVG(LFT_01); }
            if (((c_bin & 0x3) == 0x3)) { appendSVG(RGT_11); }
            else if (c_bin & 0x2) { appendSVG(RGT_10); do_right = false; }
            else if (c_bin & 0x1) { appendSVG(RGT_01); do_right = false; }
        } else {
            let c_bin = chrFind(c, _vow);
            if (c_bin & 0x8) { appendSVG(X_START+24+TOP_LOOP); } else { appendSVG(X_START+24+TOP_LINE); }
            if (c_bin & 0x2) { appendSVG(X_START+40+TOP_LOOP); } else { appendSVG(X_START+40+TOP_LINE); }
            if (c_bin & 0x4) { appendSVG(X_START+24+BOT_LOOP); } else { appendSVG(X_START+24+BOT_LINE); }
            if (c_bin & 0x1) { appendSVG(X_START+40+BOT_LOOP); } else { appendSVG(X_START+40+BOT_LINE); }
            x += WRD_W*0.90;
            if (x+WRD_W >= MAX_LINE*WRD_W) {
                x = 0;
                y += WRD_H;
                ++l;
            }
        }
        is_con = !is_con;
    }
    setTimeout('gE("#cursiveSVGout'+latin2cursiveSVG_count+'").style.height = "'+ (l*WRD_H/2) +'px"; gE("#cursiveSVGout'+latin2cursiveSVG_count+'").setAttribute("viewBox", "0 0 1024 '+(l*WRD_H)+'");', 100);
    SVG_out += '</svg>';
    ++latin2cursiveSVG_count;
    return SVG_out;
}


let _evi = { d: "direct knowledge", s: "non-visual sense", r: "inferential", h: "hearsay" };
let _tense = { n: "no", p: "past", i: "present", f:"future" }
function toolSentencer ()
{
    let preview = [];
    let gloss = gE("tool#sentencer #glossin").value.trim();
    if (gloss == "") { return; }
  //Generate head
    let tense = gE("tool#sentencer #tense").value;
    let evidentiality = gE("tool#sentencer #evidentiality").value;
    let imperative = gE("tool#sentencer #imperative").value;
    let question = gE("tool#sentencer #question").value;

    function tf (bool) { return (bool ? "true" : "false"); }
  //Generate processed gloss
    if (gE("tool#sentencer #preglossed").checked) {
        gE("tool#sentencer preview").innerHTML = "";
        gE("tool#sentencer #glossout").innerHTML = gloss2html(gloss);
      //Extract head data
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

          //Prepare if was/is number
            if (was_number) { feature = NUMBER; }
            was_number = (gloss[w] == "number");
            if (was_number) { feature = NUMBER; }

          //Prefix the gloss
            gloss[w] = { "MIHEAD":"h:", "NOUN":"n:", "ONOUN":"n", "ADJ":"a", "VERB":"v:", "NUMBER":"n:" }[feature] + gloss[w];

            if (gloss[w].indexOf("-") != -1) { feature = "CNOUN"; }
            preview.push('<'+ feature +'>'+ word +'</'+ feature +'>');
        }

        gloss = gloss.join(" ");
        gE("tool#sentencer preview").innerHTML = preview.join("");
        gE("tool#sentencer #glossout").innerHTML = gloss2html(gloss);
    }
    gE("tool#sentencer #headerout").innerHTML = _tense[tense] +" tense, "+ _evi[evidentiality] +", "+ (imperative ? "is order" : "not order") +", "+ (question ? "is ask" : "not ask");

  //Generate output
    //English
    let english_in = gE("tool#sentencer #englishin").value;
    if (english_in != "") {
        gE("tool#sentencer #englishout_tr").style.display = "table-row";
        gE("tool#sentencer #englishout").innerHTML = "<p class='english focus'>"+ english_in +"</p>";
    } else {
        gE("tool#sentencer #englishout_tr").style.display = "none";
    }
    //Other
    let multi_out = gloss2multi(gloss);
    gE("tool#sentencer #binout").innerHTML = multi_out.bin_html;// +"<br>"+ multi_out.bin;
    gE("tool#sentencer #hexout").innerHTML = multi_out.hex_html +" "+ multi_out.bytes +"B";// +"<br>"+ multi_out.hex;
    gE("tool#sentencer #asciiout").innerHTML = "<input value='"+ multi_out.ascii +"' readonly>";
    gE("tool#sentencer #latinout").innerHTML = '<p class="focus">'+ multi_out.latin_html +'</p>'+
        '<p>/'+ multi_out.ipa +'/ <speaker onclick="spk(\''+ multi_out.latin_styled.split("?").join("") +'\')"></speaker> <span>'+ multi_out.chars +' chars</span></p>';
    gE("tool#sentencer #script1out").innerHTML = multi_out.latin_styled;
    gE("tool#sentencer #script2out").innerHTML = latin2restHTML(multi_out.latin_styled, 16);
    gE("tool#sentencer #script3out").innerHTML = latin2cursiveSVG(multi_out.latin, 16);
    gE("tool#sentencer #script4out").innerHTML = multi_out.latin_styled;
  //Popup & permalink
    gE("tool#sentencer #popup_link").href = "sentencer-output.html?"+ btoa(encodeURIComponent(gE("tool#sentencer #output").outerHTML));
    gE("tool#sentencer #perma_link").href = "?"+ gloss.replace(/ /g, "+");
  //tool-translate
    gE("tool#translate #input").value = multi_out.latin_styled;
}


function toolSentencerLoad (e)
{
    let example = _examples[e];
    gE("tool#sentencer #preglossed").checked = true;
    gE("tool#sentencer #englishin").value = example[0];
    gE("tool#sentencer #glossin").value = example[1];
    toolSentencer();
    gE("tool#sentencer #output").scrollIntoView();
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
    let gloss = gE("tool#paragrapher #input").value.trim();
    if (gloss == "") { return; }
    gE("tool#paragrapher #glossout").innerHTML = "<gloss>"+ gloss2html(gloss) +"</gloss>";
    var multi_out = gloss2multi(gloss);
    gE("tool#paragrapher #latinout").innerHTML = '<p class="focus">'+ multi_out.latin_html +'</p>'+
        '<p>/'+ multi_out.ipa +'/ <speaker onclick="spk(\''+ multi_out.latin_styled.split("?").join("") +'\')"></speaker> <span>'+ multi_out.chars +' chars</span></p>';
    gE("tool#paragrapher #script1out").innerHTML = multi_out.latin_styled;
    gE("tool#paragrapher #script2out").innerHTML = latin2restHTML(multi_out.latin_styled, 16);
    gE("tool#paragrapher #script3out").innerHTML = latin2cursiveSVG(multi_out.latin, 16);
    gE("tool#paragrapher #script4out").innerHTML = multi_out.latin_styled;
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
        //Determine word order position
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

function toolTranslateTranscode () {
    var bin = gE("tool#translate #transcode_input").value.replace(/ /g, "").match(/.{4}/g);
    var mi = "";
    let c = true;
    for (let b of bin) {
        if (c) {
            mi += _con[parseInt(b, 2)];
        } else {
            mi += _vow[parseInt(b, 2)];
        }    
        c = !c;
    }
    gE("tool#translate #input").value = mi;
}


function toolSpeakerSpeak ()
{
    spk(gE("#tool-speaker-input").value);
}
