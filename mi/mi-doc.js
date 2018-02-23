
function loadPage ()
{
  //1. Phonology & Orthography
    for (var c = 0, clen = _chr.length - 1; c < clen; ++c) {
        var is_vow = (c > _con.length);
        var is_con = !is_vow;
        var num = (c << is_con*4 & (is_vow ? 0x0F : 0xF0));
        gE("#s1 #t1").innerHTML += '<tr><td>'+ (is_con ? 'C' : 'V') +'</td>'+
            '<td>'+ pad(num.toString(2), '00000000') +'</td>'+
            '<td>0x'+ pad(num.toString(16).toUpperCase(), '00') +'</td>'+
            '<td>'+ _chr[c] +'</td>'+
            '<td><speaker onclick="spk(\''+ _chr[c] + (is_con ? 'a' : '') +'\', 10)"></speaker>'+
            ' /'+ _ipa[c] +'/'+
            '</td>'+
            '</tr>';
    }
  //4. Lexicon
    var mi_index = 0;
    for (var lex in _lex) {
        var mi      = index2latin(mi_index);
        var noun    = _lex[lex].noun;
        var type    = _lex[lex].type;
        var verb    = _lex[lex].verb;
        var adj     = _lex[lex].adj;
        var comment = _lex[lex].comment;

        var fg_colour = "#000";
        bg_colour = "#"+ (((mi_index & 0x30) >> 4) * 5).toString(16) + (((mi_index & 0xC) >> 2) * 5).toString(16) + ((mi_index & 0x3) * 5).toString(16);
        var r = parseInt(bg_colour.substr(1, 1), 16)/16, g = parseInt(bg_colour.substr(2, 1), 16)/16, b = parseInt(bg_colour.substr(3, 1), 16)/16;
        fg_colour = (determineLumApprox(r, g, b) < .4 ? "#fff" : fg_colour);

        gE("#s4 #t1").innerHTML += '<tr>'+
            '<td class="binary">'+ pad(parseInt(mi_index).toString(2), "0000000") +'</td>'+
            '<td class="mi"><speaker onclick="spk(\''+ mi +'\')"></speaker> '+ mi +'</td>'+
            '<td class="english">'+ noun +'</td>'+
            '<td class="type">'+ type +'</td>'+
            '<td class="english verb" title="'+ verb +'">'+ verb +'</td>'+
            '<td class="english adj" title="'+ adj +'">'+ adj +'</td>'+
            '<td class="comment" title="'+ comment +'">'+ comment +'</td>'+
            '<td class="mono" style="color: '+ fg_colour +'; background-color: '+ bg_colour +'">'+ bg_colour +'</td>'+
            '</tr>';
        ++mi_index;
    }
    var lex_count = Object.keys(_lex).length;
    gE("#s4 #lex-total").innerHTML = lex_count;
  //6. Examples
    var examples_html = "";
    for (e in _examples) {
        var multiout = gloss2multi(_examples[e][1]);
        examples_html += "<example><english>"+ _examples[e][0] +"</english>"+
            "<gloss>"+ _examples[e][1] +"</gloss>"+
            "<mi>"+ multiout.latin_styled +"</mi>"+
            "<ipa><speaker onclick='spk(\""+ multiout.latin_styled +"\")''></speaker> /"+ multiout.ipa +"/</ipa></example>";
    }
    gE("#s6 examples").innerHTML = examples_html;
  //Speakers
    meSpeak.loadConfig("mespeak/mespeak_config.json");
    meSpeak.loadVoice("mespeak/en-rp.json");
  //Tools
    setTimeout(updateSentence, 1)
}


function isSpace (chr) { return chr == 32; }
function drawScript (text)
{

    var SCRIPT_LEN = 16;
    var RES_W = 16;
    var RES_H = 24;
    var CHR_W = 32;
    var CHR_H = 48;
    var CHR_PAD = 8;
    var MAX_W = 320;
    var MAX_CHR = MAX_W / CHR_W;
    var KERN = CHR_W*.4;
    var PAIRKERN = CHR_W*.7;
    var SPACE = CHR_W*.6;

    var can = gE("canvas#scriptout");
    var ctx = can.getContext('2d');
    var script = gE('#script_image');
    can.width = MAX_W;

    var x = CHR_PAD - KERN, y = CHR_PAD;
    var chr = 0;
    for (c in text) {
        c = parseInt(c);
        var index = chrFind(text[c], _chr);
        if (isSpace(index)) { x += SPACE; continue; }
        if (index > 15) { index -= 16; }
        x += (chr % 2 ? KERN : PAIRKERN);
        if (x + (chr % 2 ? CHR_W : CHR_W+PAIRKERN) >= MAX_W) {
            y += CHR_H;
            x = CHR_PAD;
        }
        ++chr;

        ctx.drawImage(script, index*RES_W, 0, RES_W, RES_H, x, y, CHR_W, CHR_H);
    }
    var data = can.toDataURL();
    can.width = MAX_W;
    can.height = y + CHR_H;
    var img=new Image();
        img.onload=function(){
            ctx.drawImage(img,0,0,img.width,img.height,0,0,img.width,img.height);
        }
    img.src=data;
    ctx.drawImage(script, 15*RES_W, 0, RES_W, RES_H, x+SPACE*1.5, y, CHR_W, CHR_H);       //
    ctx.drawImage(script, 15*RES_W, 0, RES_W, RES_H, KERN+(x+SPACE*1.5), y, CHR_W, CHR_H); //Ending lines
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
            spk_syllables = spk_words[spk_w].replace(/(.{2})(˥|˩)/g, " $1$2 ").replace(/\s+/g, " ").split(" "); // "dɛ˩kuda˥ʒɛ"  -> ["dɛ˩", "kuda˥", "ʒɛ"]
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
    if (part.slice(-1) == "˥") {
        pitch = 90;
        word = part.substr(0, part.length - 1);
    }
    if (part.slice(-1) == "˩") {
        pitch = 10;
        word = part.substr(0, part.length - 1);
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
var _evi = { d: "direct knowledge", s: "non-visual sensory", r: "inferential", h: "hearsay" };
var _tense = { n: "none", p: "past", i: "now", f:"future" }
function updateSentence ()
{
    var preview = [];
    var gloss = gE("tool#sentence-maker #input").value.trim();
  //Generate head
    var tense = gE("tool#sentence-maker #tense").value;
    var evidentiality = gE("tool#sentence-maker #evidentiality").value;
    var imperative = gE("tool#sentence-maker #imperative").value;
    var question = gE("tool#sentence-maker #question").value;

    function tf (bool) { return (bool ? "true" : "false"); }
    gE("tool#sentence-maker #headerout").innerHTML = "tense: "+ _tense[tense] +", evident: "+ _evi[evidentiality] +", order: "+ tf(imperative) +", ask: "+ tf(question);
  //Generate gloss
    if (gE("tool#sentence-maker #preglossed").checked) {
        gE("tool#sentence-maker preview").innerHTML = "";
        gE("tool#sentence-maker #glossout").innerHTML = gloss;
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
        gE("tool#sentence-maker #glossout").innerHTML = gloss;
    }

    var multiout = gloss2multi(gloss);
    gE("tool#sentence-maker #englishout").innerHTML = "<span class='focus'>"+ gE("tool#sentence-maker #englishin").value +"</span>";
    gE("tool#sentence-maker #binout").innerHTML = multiout.bin_html +"<br>"+ multiout.bin;
    gE("tool#sentence-maker #hexout").innerHTML = multiout.hex_html +"<br>"+ multiout.hex;
    gE("tool#sentence-maker #asciiout").innerHTML = "<input value='"+ multiout.ascii +"' readonly>";
    gE("tool#sentence-maker #latinout").innerHTML = multiout.latin_html +"<br>"+
        "<span class='focus'>"+ multiout.latin_styled +"</span><br>"+
        "/"+ multiout.ipa +'/ <speaker onclick="spk(\''+ multiout.latin_styled.split("?").join("") +'\')"></speaker><br>';
    drawScript(multiout.latin_styled);
}


function tool_speaker_speak ()
{
    spk(gE("#tool-speaker-input").value);
}
