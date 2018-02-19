
function loadPage ()
{
  //1. Phonology & Orthography
    for (var c = 0, clen = _chr.length; c < clen; ++c) {
        var is_space = (_chr[c] == " ");
        var is_vow = (c > _con.length);
        var is_con = !is_vow;
        gE("#s1 #t1").innerHTML += '<tr><td>'+ (is_con ? (is_space ? 'space' : 'C') : (is_space ? 'space' : 'V')) +'</td>'+
            '<td>'+ pad(c.toString(2), '0000') +'</td>'+
            '<td>0x'+ pad(c.toString(16).toUpperCase(), '0') +'</td>'+
            '<td>'+ _chr[c] +'</td>'+
            '<td>'+ _num[c] +'</td>'+
            '<td>'+ (!is_space ? '<speaker onclick="aud(\''+ _chr[c] + (is_con ? 'a' : '') +'\', 10)"></speaker>' : '')+
            ' /'+ _ipa[c] +'/'+
            '</td>'+
            '</tr>';
    }
  //4. Lexicon
    var number = 0;
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
            '<td class="mi"><speaker onclick="aud(\''+ mi +'\')"></speaker> '+ mi +'</td>'+
            '<td class="english">'+ noun +'</td>'+
            '<td class="type">'+ type +'</td>'+
            '<td class="english verb" title="'+ verb +'">'+ verb +'</td>'+
            '<td class="english adj" title="'+ adj +'">'+ adj +'</td>'+
            '<td class="comment" title="'+ comment +'">'+ comment +'</td>'+
            '<td class="mono">'+ number +'</td>'+
            '<td class="mono" style="color: '+ fg_colour +'; background-color: '+ bg_colour +'">'+ bg_colour +'</td>'+
            '</tr>';
        ++number;
        ++mi_index;
        if (!((mi_index + 1) % 16)) { ++mi_index; }
    }
    var lex_count = Object.keys(_lex).length;
    gE("#s4 #lex-total").innerHTML = lex_count;
  //Speakers
    meSpeak.loadConfig("mespeak/mespeak_config.json");
    meSpeak.loadVoice("mespeak/en-rp.json");
  //Tools
    setTimeout(updateSentence, 1)
}


//http://www.masswerk.at/mespeak/
function aud (text, speed = 220, spaces = true)
{
  //Seperate text into different pitches
  //Speak seperate parts
    function speakWords(txt) {
        if (!spaces) { txt = txt.replace(/(.˥)|(.˩)/g, " $1 "); } //e.g., "mifi˥du˥mɒzapɒ"" -> "mif i˥ d u˥ mɒzapɒ"
        //  ˥[^˩]+˥  e.g. "mif i˥ d u˥ mɒzapɒ" -> "mif i˥du˥ mɒzapɒ"
        var words = txt.split(" ");
//console.log(words);

        function speakNext () {
            if (words.length) {
                var word = words.shift();
              //Handle tone, by converting to pitch
                var pitch = 50;
                if (word.slice(-1) == "˥") {
                    pitch = 70;
                    word = word.substr(0, word.length - 1);
                }
                if (word.slice(-1) == "˩") {
                    pitch = 30;
                    word = word.substr(0, word.length - 1);
                }
              //Actually speak, with callback for next word
                meSpeak.speak("[["+ word +"]]", {speed: speed, pitch: pitch, wordgap: 0, nostop: true}, speakNext);
            }
        }
        speakNext();
    }

    speakWords(latin2spk(text));
}


var HEAD = "MIHEAD", NOUN = "NOUN", ONOUN = "ONOUN", ADJ = "ADJ", VERB = "VERB";
function updateSentence ()
{
    var preview = [];
    var gloss = gE("tool#sentence-maker textarea").value.trim();
  //Generate head
    var tense = gE("tool#sentence-maker #tense").value;
    var evidentiality = gE("tool#sentence-maker #evidentiality").value;
    var imperative = gE("tool#sentence-maker #imperative").value;
    var question = gE("tool#sentence-maker #question").value;
    gloss = tense + evidentiality + imperative + question +" "+ gloss;
  //Generate bytes
    var input = gloss.split(" ");
    gloss = input;
    var part = 0; //0 head, 1 (noun) noun, 2 (adj) verb, 3 (adj) noun/null ...
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

        preview.push('<'+ feature +'>'+ word +'</'+ feature +'>');
    }

    gloss = gloss.join(" ");
    gE("tool#sentence-maker preview").innerHTML = preview.join("");
    gE("tool#sentence-maker #glossout").innerHTML = gloss;
    var multiout = gloss2multi(gloss);
    gE("tool#sentence-maker #binout").innerHTML = multiout.bin_html +"<br>"+ multiout.bin;
    gE("tool#sentence-maker #hexout").innerHTML = multiout.hex_html +"<br>"+ multiout.hex;
    gE("tool#sentence-maker #latinout").innerHTML = multiout.latin_html +"<br>"+
        "<span style='font-size: 1.1rem;'>"+ multiout.latin +"</span><br>"+
        "/"+ multiout.IPA +'/ <speaker onclick="aud(\''+ multiout.latin.split("?").join("") +'\')"></speaker><br>';
        /*multiout.latin.split(" ").join("") +"<br>"+
        "/"+ multiout.IPA.split(" ").join("") +'/ <speaker onclick="aud(\''+ multiout.latin.split("?").join("").split(" ").join("") +'\', 220, false)"></speaker>'
        ;*/
}


function gEs (e) { return document.querySelectorAll(e); }
function gE  (e) { return document.querySelector(e); }
function pad (n, p) { return (p + n).slice(-p.length); }
function determineLumApprox (r, g, b) { return (0.33 * r) + (0.5 * g) + (0.16 * b); }
