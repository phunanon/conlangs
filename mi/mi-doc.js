
function loadPage ()
{
  //1. Phonology & Orthography
    //Vowels
    var vow_html = "";
    for (var c = 0, clen = _con.length; c < clen; ++c) {
        var num = c;
        vow_html += '<tr><td>xxxx'+ pad(num.toString(2), '0000') +'</td>'+
            '<td>0x'+ pad(num.toString(16).toUpperCase(), '00') +'</td>'+
            '<td><span class="mi">'+ _chr[c] +'</span> <span class="native">'+ _chr[c] +'</span></td>'+
            '<td><speaker onclick="spk(\''+ _chr[c] +'a\')"></speaker> /'+ _ipa[c] +'/</td></tr>';
    }
    gE("#s1 #t1").innerHTML += vow_html;
    //Consonants
    var con_html = "";
    for (var c = _vow.length, clen = _chr.length - 1; c < clen; ++c) {
        var num = c;
        con_html += '<tr><td>'+ pad(num.toString(2), '0000') +'xxxx</td>'+
            '<td>0x'+ pad(num.toString(16).toUpperCase(), '00') +'</td>'+
            '<td><span class="mi">'+ _chr[c] +'</span> <span class="native">'+ _chr[c] +'</span></td>'+
            '<td><speaker onclick="spk(\''+ _chr[c] +'a\')"></speaker> /'+ _ipa[c] +'/</td></tr>';
    }
    gE("#s1 #t2").innerHTML += con_html;
  //4. Lexicon
    var mi_index = 0;
    for (var lex in _lex) {
        var mi      = index2latin(mi_index) +"/"+ index2latin(mi_index+128);
        var noun    = _lex[lex].noun;
        var type    = _lex[lex].type;
        var verb    = _lex[lex].verb;
        var adj     = _lex[lex].adj;
        var comment = _lex[lex].comment;

        var r = (mi_index >> 5) * 36,  g = ((mi_index >> 2) & 0x07) * 36,  b = (mi_index & 0x03) * 85;
        var bg_colour = "#"+ Math.floor(r/16).toString(16) + Math.floor(g/16).toString(16) + Math.floor(b/16).toString(16);
        var fg_colour = (determineLumApprox(r/255, g/255, b/255) < .4 ? "#fff" : "#000");

        gE("#s4 #t1").innerHTML += '<tr>'+
            '<td class="hex">0x'+ pad(parseInt(mi_index).toString(16), "00") +'</td>'+
            '<td class="mi"><speaker onclick="spk(\''+ mi +'\')"></speaker> '+ mi +'</td>'+
            '<td class="english cutoff" title="'+ noun +'">'+ noun +'</td>'+
            '<td class="type cutoff" title="'+ type +'">'+ type +'</td>'+
            '<td class="english verb cutoff" title="'+ verb +'">'+ verb +'</td>'+
            '<td class="english adj cutoff" title="'+ adj +'">'+ adj +'</td>'+
            '<td class="comment cutoff" title="'+ comment +'">'+ comment +'</td>'+
            '<td class="mono" style="color: '+ fg_colour +'; background-color: '+ bg_colour +'">'+ bg_colour +'</td>'+
            '</tr>';
        ++mi_index;
    }
    var lex_count = Object.keys(_lex).length;
    gE("#s4 #lex-total").innerHTML = lex_count;
  //6. Examples
    var examples_html = "";
    for (e in _examples) {
        if (_examples[e][1] == "") { continue; }
        var multi_out = gloss2multi(_examples[e][1]);
        examples_html += "<example><english>"+ _examples[e][0] +"</english>"+
            "<gloss>"+ _examples[e][1] +"</gloss>"+
            "<mi class='native'>"+ multi_out.latin_styled +"</mi>"+
            "<ipa><speaker onclick='spk(\""+ multi_out.latin_styled +"\")''></speaker> /"+ multi_out.ipa +"/</ipa>"+
            "<button class='load' onclick='tool_sentence_maker_load("+ e +")'>load</button></example>";
    }
    gE("#s6 examples").innerHTML = examples_html;
  //Speakers
    meSpeak.loadConfig("mespeak/mespeak_config.json");
    meSpeak.loadVoice("mespeak/en-rp.json");
  //Tools
    setTimeout(updateSentence, 100);
  //GET param
    var GET = window.location.search.substr(1);
    if (GET != "") {
        gE("tool#sentence-maker #englishin").value = "";
        gE("tool#sentence-maker #preglossed").checked = true;
        gE("tool#sentence-maker #glossin").value = GET.replace(/\+/g, " ");
        gE("tool#sentence-maker #output").scrollIntoView();
    }
}



//http://www.masswerk.at/mespeak/
var spk_words = [];
var spk_syllables = [];
var spk_w = 0, spk_s = 0;
var spk_speed = 150;
var WORD_GAP = 200;
var SYLL_WAIT = 200;
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
    var pitch = 50;
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



var HEAD = "MIHEAD", NOUN = "NOUN", ONOUN = "ONOUN", ADJ = "ADJ", VERB = "VERB", NUMBER = "NUMBER";
var _evi = { d: "direct knowledge", s: "non-visual sense", r: "inferential", h: "hearsay" };
var _tense = { n: "no", p: "past", i: "present", f:"future" }
function updateSentence ()
{
    var preview = [];
    var gloss = gE("tool#sentence-maker #glossin").value.trim();
  //Generate head
    var tense = gE("tool#sentence-maker #tense").value;
    var evidentiality = gE("tool#sentence-maker #evidentiality").value;
    var imperative = gE("tool#sentence-maker #imperative").value;
    var question = gE("tool#sentence-maker #question").value;

    function tf (bool) { return (bool ? "true" : "false"); }
  //Generate gloss
    if (gE("tool#sentence-maker #preglossed").checked) {
        gE("tool#sentence-maker preview").innerHTML = "";
        gE("tool#sentence-maker #glossout").innerHTML = gloss2html(gloss);
        question = imperative = false;
        var head = gloss.split(" ")[0].split(":")[1];
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
        var input = gloss.split(" ");
        gloss = input;
        var part = 0; //0 head, 1 (noun) noun, 2 (adj) verb, 3 (adj) noun/null ...
        var was_number = false;
        for (w in input) {
            var word = input[w];
            var optional = (word[0] == "!");
            var feature; //either HEAD, NOUN, ONOUN, ADJ, or VERB
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
    var english_in = gE("tool#sentence-maker #englishin").value;
    if (english_in != "") {
        gE("tool#sentence-maker #englishout_tr").style.display = "table-row";
        gE("tool#sentence-maker #englishout").innerHTML = "<p class='english focus'>"+ english_in +"</p>";
    } else {
        gE("tool#sentence-maker #englishout_tr").style.display = "none";
    }
    //Other
    var multi_out = gloss2multi(gloss);
    gE("tool#sentence-maker #binout").innerHTML = multi_out.bin_html;// +"<br>"+ multi_out.bin;
    gE("tool#sentence-maker #hexout").innerHTML = multi_out.hex_html +" "+ multi_out.bytes +"B";// +"<br>"+ multi_out.hex;
    gE("tool#sentence-maker #asciiout").innerHTML = "<input value='"+ multi_out.ascii +"' readonly>";
    gE("tool#sentence-maker #latinout").innerHTML = multi_out.latin_html +" "+ multi_out.chars +" chars"+
        "<span class='focus'>"+ multi_out.latin_styled +"</span>"+
        "/"+ multi_out.ipa +'/ <speaker onclick="spk(\''+ multi_out.latin_styled.split("?").join("") +'\')"></speaker><br>';
    gE("tool#sentence-maker #scriptout").innerHTML = multi_out.latin_styled;
  //Popup
    gE("tool#sentence-maker #popup_link").href = "sentence-maker-output.html?"+ btoa(encodeURIComponent(gE("tool#sentence-maker #output").outerHTML));
}


function tool_sentence_maker_load (e)
{
    var example = _examples[e];
    gE("tool#sentence-maker #preglossed").checked = true;
    gE("tool#sentence-maker #englishin").value = example[0];
    gE("tool#sentence-maker #glossin").value = example[1];
    updateSentence();
    gE("tool#sentence-maker #output").scrollIntoView();
    return false;
}


function tool_speaker_speak ()
{
    spk(gE("#tool-speaker-input").value);
}
