function loadPage ()
{
  //1. Phonology & Orthography
    for (var c = 0, clen = pipu_chr.length; c < clen; ++c) {
        gE("#s1 #t1").innerHTML += '<tr><td>'+ (c <= pipu_con.length ? (c ? 'C' : 'space') : 'V') +'</td>'+
            '<td>'+ pad(c.toString(2), '0000') +'</td>'+
            '<td>0x'+ c.toString(16).toUpperCase() +'</td>'+
            '<td>'+ pipu_chr[c] +'</td>'+
            '<td>'+ pipu_num[c] +'</td>'+
            '<td>/'+ pipu_ipa[c] +'/ '+
            (c ? '<speaker onclick="aud(\''+ pipu_chr[c] +'\')"></speaker>' : '')+
            '</td>'+
            '</tr>';
    }
  //4. Lexicon
    var unused = 0;
    var l = 0;
    for (var lex in pipu_lex) {
        var pipu    = lex
        var root    = pipu_lex[lex].root;
        var type    = pipu_lex[lex].type;
        var verb    = pipu_lex[lex].verb;
        var adj     = pipu_lex[lex].adj;
        var pnoun   = pipu_lex[lex].pnoun;
        var comment = pipu_lex[lex].comment;
        var number  = pipu_lex[lex].num;

        var colour  = pipu_lex[lex].colour;
        var fg_color = "#000";
        var bg_color = "transparent";
        if (colour === null) {
            colour = "<span style='color: #aaa'>unused</span>";
        } else {
            bg_color = colour;
            var r = parseInt(colour.substr(1, 1), 16)/16, g = parseInt(colour.substr(2, 1), 16)/16, b = parseInt(colour.substr(3, 1), 16)/16;
            fg_color = (determineLumApprox(r, g, b) < .4 ? "#fff" : fg_color);
        }
        if (root == "") { root = "<span style='color: #aaa'>unused</span>"; ++unused; }

        if (root[0] != "<") {
            gE("#s4 #t1").innerHTML += '<tr><td class="pipu"><speaker onclick="aud(\''+ pipu +'\')"></speaker>'+ pipu +'</td>'+
                '<td class="english">'+ root +'</td>'+
                '<td class="type">'+ type +'</td>'+
                '<td class="english verb" title="'+ verb +'">'+ verb +'</td>'+
                '<td class="english adj" title="'+ adj +'">'+ adj +'</td>'+
                '<td class="english">'+ pnoun +'</td>'+
                '<td class="comment" title="'+ comment +'">'+ comment +'</td>'+
                '<td class="mono">'+ number +'</td>'+
                '<td class="mono" style="color: '+ fg_color +'; background-color: '+ bg_color +'">'+ colour +'</td>'+
                '</tr>';
            ++l;
        }
    }
    var lex_count = Object.keys(pipu_lex).length;
    gE("#s4 #lex-used").innerHTML = lex_count - unused;
    gE("#s4 #lex-unused").innerHTML = unused;
    gE("#s4 #lex-total").innerHTML = lex_count;
  //6. Examples
    var examples = gE("examples");
    for (var e = 0, emax = pipu_examples.length; e < emax; ++e) {
        if (pipu_examples[e][1] == "") { continue; }
        var gloss = pipu_examples[e][1];
        var pipu = gloss2pipu(gloss);
        examples.innerHTML += "\n<example id='eg"+ e +"'><english>"+ (e+1) +". "+ pipu_examples[e][0] +
            "</english><gloss>"+ gloss +
            "</gloss><pipu>"+ pipu +
            "</pipu><IPA><speaker onclick='aud(\""+ pipu +"\")'></speaker> /"+ pipu2IPA(pipu) +"/" +
            "</IPA></example>";
    }
  //Speakers
    meSpeak.loadConfig("mespeak/mespeak_config.json");
    meSpeak.loadVoice("mespeak/en-rp.json");

}


//http://www.masswerk.at/mespeak/
function aud (text)
{
    meSpeak.speak(pipu2spk(text), {speed: 30, wordgap: 0});
}



function tool_speaker_speak ()
{
    aud(gE("#tool-speaker-input").value);
}



function gEs (e) { return document.querySelectorAll(e); }
function gE  (e) { return document.querySelector(e); }
function pad (n, p) { return (p + n).slice(-p.length); }
function determineLumApprox (r, g, b) { return (0.33 * r) + (0.5 * g) + (0.16 * b); }
