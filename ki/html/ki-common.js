function vgloss2ki_multi (vg)
{
    let lat_ki = "";
    let htm_ki = "";
    vg = vg.split(" ");
    for (let g = 0, g_len = vg.length; g < g_len; ++g) {
        let gl = vg[g];
        let part = gl[0];
        let is_opt = (gl[1] == "'");
        gl = gl.substring(is_opt ? 2 : 1);
        let num = gloss2num(part, gl);
        let ki = "";
        if (num >= 0) {
            if (is_opt) {
                if (num > 0xFF) { num += 0x8080; }
                else if (num > 0xFFFF) { num += 0x808080; }
                else { num += 0x80; }
            }
            if (part == "V" && num > 0xFF) { num += 0x8000; } //If this is a multipart verb, ensure its first half is optional
            ki = num2ki(num);
        } else {
            ki = "?";
        }
        lat_ki += ki+ (part == "V" ? "," : "");
        htm_ki += "<"+ part +"_>"+ ki + (part == "V" ? "," : "") +"</"+ part +"_> ";
        lat_ki += " ";
        htm_ki += " ";
    }
    return { lat_ki: lat_ki, htm_ki: htm_ki };
}


function gloss2num (part, gl)
{
    let num;
    let arr;
    switch (part) {
        case "N": arr = n_index; break;
        case "V": arr = v_index; break;
        case "A": arr = a_index; break;
    }
    if (arr.hasOwnProperty(gl)) {
        num = arr[gl];
    } else { num = -1; }
    return num;
}


function num2ki (num)
{
    let morph = Cs[(num & 0x00F0) >> 4] + Vs[num & 0x000F];
    if (num > 0xFF) { morph = Cs[(num & 0xF000) >> 12] + Vs[(num & 0x0F00) >> 8] + morph; }
    if (num > 0xFFFF) { morph = Cs[(num & 0xF00000) >> 24] + Vs[(num & 0x0F0000) >> 16] + morph; }
    return morph;
}

function ki2ipa (ki)
{
    let ipa_out = "";
    for (let k = 0, k_len = ki.length; k < k_len; ++k) {
        ipa_out += ipa[lat.indexOf(ki[k])];
    }
    return ipa_out.trim();
}



const Cs  = ["p", "t", "k", "f", "r", "s", "c", "w", "b", "d", "g", "v", "x", "z", "j", "l"];
const Vs  = ["i", "y", "e", "a", "q", "o", "u", "h", "í", "ì", "é", "á", "ò", "ó", "ú", "ù"];
const lat = Vs.concat(Cs).concat([" ", "?", ","]);
const ipa = ["i", "e", "ɛ", "a", "ɒ", "ɔ", "u", "ə", "í", "é", "ɛ́", "á", "ɒ́", "ɔ́", "ú", "ə́",
             "p", "t", "k", "f", "θ", "s", "ʃ", "w", "b", "d", "g", "v", "ð", "z", "ʒ", "l", " ", "??", "ː"];

let lex = [
    { k: 0x00, n: "me/I/my", v: "am/is", a: "thanks" },
    { k: 0x01, n: "you/your/hello", v: "are/is_plu", a: "please" },
    { k: 0x02, n: "they/them/their/her/him/his", v: "", a: "evi_direct" },
    { k: 0x03, n: "me_you_them", v: "", a: "evi_non_vis" },
    { k: 0x04, n: "", v: "", a: "evi_inferred" },
    { k: 0x05, n: "", v: "", a: "" },
    { k: 0x06, n: "self", v: "", a: "evi_speculated" },
    { k: 0x07, n: "each_other", v: "", a: "evi_hearsay" },
    { k: 0x08, n: "obj_near_me/this", v: "", a: "a/an" },
    { k: 0x09, n: "obj_near_you", v: "", a: "the" },
    { k: 0x0A, n: "obj_near_us/this/it", v: "make/create/make_exist", a: "this/it" },
    { k: 0x0B, n: "obj_far_us/that", v: "", a: "that" },
    { k: 0x0C, n: "plu_near_me/these", v: "", a: "plural" },
    { k: 0x0D, n: "plu_near_you", v: "", a: "plu_the" },
    { k: 0x0E, n: "plu_near_us/these", v: "make_happen", a: "these" },
    { k: 0x0F, n: "plu_far_us/those", v: "", a: "those" },
    { k: 0x10, n: "what/who", v: "", a: "what/who" },
    { k: 0x11, n: "which", v: "", a: "which" },
    { k: 0x12, n: "where", v: "", a: "where" },
    { k: 0x13, n: "when", v: "", a: "when" },
    { k: 0x14, n: "how", v: "", a: "how" },
    { k: 0x15, n: "why/question", v: "ask", a: "why" },
    { k: 0x16, n: "much/many", v: "", a: "much/many" },
    { k: 0x17, n: "really", v: "", a: "really/very" },
    { k: 0x18, n: "and/also", v: "and/also", a: "and/also" },
    { k: 0x19, n: "xor", v: "xor", a: "xor" },
    { k: 0x1A, n: "or", v: "or", a: "or" },
    { k: 0x1B, n: "nand", v: "nand", a: "nand" },
    { k: 0x1C, n: "nor", v: "nor", a: "nor" },
    { k: 0x1D, n: "past", v: "became", a: "past" },
    { k: 0x1E, n: "present", v: "become", a: "present" },
    { k: 0x1F, n: "future", v: "will_become", a: "future" },
    { k: 0x20, n: "ki/said", v: "say/speak/tell", a: "said" },
    { k: 0x21, n: "yes/true", v: "make_true/fix", a: "true" },
    { k: 0x22, n: "no/false", v: "make_false/break", a: "false/not/negative" },
    { k: 0x23, n: "", v: "", a: "" },
    { k: 0x24, n: "existence", v: "exist", a: "exists" },
    { k: 0x25, n: "", v: "", a: "" },
    { k: 0x26, n: "want", v: "want", a: "wanted" },
    { k: 0x27, n: "need", v: "need", a: "needed" },
    { k: 0x28, n: "ability", v: "", a: "able" },
    { k: 0x29, n: "success", v: "succeed", a: "successful" },
    { k: 0x2A, n: "challenge", v: "challenge", a: "challenging" },
    { k: 0x2B, n: "ease", v: "determine/figure_out", a: "easy" },
    { k: 0x2C, n: "", v: "", a: "" },
    { k: 0x2D, n: "", v: "", a: "" },
    { k: 0x2E, n: "", v: "", a: "" },
    { k: 0x2F, n: "", v: "", a: "" },
    { k: 0x30, n: "person", v: "know_person", a: "public" },
    { k: 0x31, n: "female", v: "", a: "" },
    { k: 0x32, n: "male", v: "", a: "" },
    { k: 0x33, n: "child", v: "", a: "young" },
    { k: 0x34, n: "adult", v: "", a: "old" },
    { k: 0x35, n: "body", v: "feel", a: "" },
    { k: 0x36, n: "", v: "", a: "" },
    { k: 0x37, n: "food", v: "eat", a: "hungry" },
    { k: 0x38, n: "mind", v: "know", a: "known" },
    { k: 0x39, n: "house", v: "", a: "" },
    { k: 0x3A, n: "display/show/vista", v: "display/show", a: "viewable" },
    { k: 0x3B, n: "clock", v: "watch", a: "watched" },
    { k: 0x3C, n: "possession", v: "have/possess", a: "possessed" },
    { k: 0x3D, n: "", v: "", a: "" },
    { k: 0x3E, n: "love", v: "love", a: "loved" },
    { k: 0x3F, n: "building", v: "", a: "" },
    { k: 0x40, n: "time", v: "", a: "little" },
    { k: 0x41, n: "space", v: "", a: "same" },
    { k: 0x42, n: "thought/belief", v: "believe/think", a: "thought/believed" },
    { k: 0x43, n: "history/story", v: "", a: "" },
    { k: 0x44, n: "class", v: "class", a: "classed" },
    { k: 0x45, n: "", v: "", a: "" },
    { k: 0x46, n: "random", v: "", a: "other" },
    { k: 0x47, n: "fact", v: "know_fact", a: "known" },
    { k: 0x48, n: "work", v: "work", a: "result" },
    { k: 0x49, n: "meeting", v: "meet", a: "met" },
    { k: 0x4A, n: "education", v: "teach", a: "learned" },
    { k: 0x4B, n: "", v: "", a: "" },
    { k: 0x4C, n: "", v: "", a: "" },
    { k: 0x4D, n: "", v: "", a: "" },
    { k: 0x4E, n: "", v: "", a: "" },
    { k: 0x4F, n: "tool", v: "", a: "" },
    { k: 0x50, n: "water", v: "drink", a: "wet" },
    { k: 0x51, n: "life/animal", v: "live", a: "alive" },
    { k: 0x52, n: "plant", v: "grow", a: "" },
    { k: 0x53, n: "heat", v: "take/recieve", a: "hot" },
    { k: 0x54, n: "cold", v: "give", a: "cold" },
    { k: 0x55, n: "land", v: "", a: "" },
    { k: 0x56, n: "sky", v: "fly", a: "big" },
    { k: 0x57, n: "", v: "", a: "" },
    { k: 0x58, n: "", v: "", a: "" },
    { k: 0x59, n: "mountain", v: "", a: "" },
    { k: 0x5A, n: "", v: "", a: "" },
    { k: 0x5B, n: "movement", v: "move/go", a: "moved" },
    { k: 0x5C, n: "", v: "", a: "" },
    { k: 0x5D, n: "planet", v: "see", a: "good" },
    { k: 0x5E, n: "air/wind", v: "blow", a: "windy" },
    { k: 0x5F, n: "", v: "", a: "" },
    { k: 0x60, n: "", v: "", a: "" },
    { k: 0x61, n: "", v: "", a: "" },
    { k: 0x62, n: "", v: "", a: "" },
    { k: 0x63, n: "", v: "", a: "" },
    { k: 0x64, n: "", v: "", a: "" },
    { k: 0x65, n: "", v: "", a: "" },
    { k: 0x66, n: "", v: "", a: "" },
    { k: 0x67, n: "", v: "", a: "" },
    { k: 0x68, n: "book", v: "read", a: "" },
    { k: 0x69, n: "word", v: "write", a: "written" },
    { k: 0x6A, n: "", v: "", a: "" },
    { k: 0x6B, n: "", v: "", a: "" },
    { k: 0x6C, n: "", v: "", a: "" },
    { k: 0x6D, n: "", v: "", a: "" },
    { k: 0x6E, n: "", v: "", a: "" },
    { k: 0x6F, n: "game", v: "play", a: "" },
    { k: 0x70, n: "m_grammar", v: "m_grammar", a: "m_grammar" },
    { k: 0x71, n: "", v: "", a: "" },
    { k: 0x72, n: "m_travel", v: "m_travel", a: "m_travel" },
    { k: 0x73, n: "m_emotion", v: "m_emotion", a: "m_emotion" },
    { k: 0x74, n: "m_abstract", v: "m_abstract", a: "m_abstract" },
    { k: 0x75, n: "s_num10", v: "", a: "" },
    { k: 0x76, n: "s_num20", v: "", a: "" },
    { k: 0x77, n: "s_num21", v: "", a: "" },
    { k: 0x78, n: "o_colour", v: "", a: "" },
    { k: 0x79, n: "o_precise", v: "", a: "" },
    { k: 0x7A, n: "o_datetime", v: "", a: "" },
    { k: 0x7B, n: "o_kinship", v: "", a: "" },
    { k: 0x7C, n: "o_taxonomy", v: "", a: "" },
    { k: 0x7D, n: "s_element", v: "", a: "" },
    { k: 0x7E, n: "null", v: "null", a: "null" },
    { k: 0x7F, n: "period", v: "period", a: "period" },
    { k: 0x725C, n: "thus_far", v: "", a: "thus_far" },
    { k: 0x7200, n: "now", v: "", a: "now" },
    { k: 0x7201, n: "then", v: "", a: "then" },
    { k: 0x7202, n: "again", v: "", a: "again" },
    { k: 0x7203, n: "soon", v: "", a: "soon" },
    { k: 0x7204, n: "ever", v: "", a: "ever" },
    { k: 0x7205, n: "instantly", v: "", a: "instantly" },
    { k: 0x7206, n: "suddenly", v: "", a: "suddenly" },
    { k: 0x7208, n: "while/during", v: "", a: "" },
    { k: 0x7209, n: "earlier/ago", v: "", a: "" },
    { k: 0x720A, n: "since", v: "", a: "" },
    { k: 0x720B, n: "finally", v: "", a: "" },
    { k: 0x720C, n: "forever", v: "", a: "" },
    { k: 0x720D, n: "meanwhile", v: "", a: "" },
    { k: 0x720E, n: "later", v: "", a: "" },
    { k: 0x7210, n: "start/firstly", v: "", a: "" },
    { k: 0x7211, n: "whenever", v: "", a: "" },
    { k: 0x7212, n: "N st/nd/rd", v: "", a: "" },
    { k: 0x7213, n: "N times", v: "", a: "" },
    { k: 0x7214, n: "eventually", v: "", a: "" },
    { k: 0x7215, n: "consequently", v: "", a: "" },
    { k: 0x7216, n: "finish/lastly", v: "", a: "" },
    { k: 0x7218, n: "here", v: "", a: "" },
    { k: 0x7219, n: "there", v: "", a: "" },
    { k: 0x721A, n: "anywhere", v: "", a: "" },
    { k: 0x721B, n: "nowhere", v: "", a: "" },
    { k: 0x721C, n: "source", v: "", a: "" },
    { k: 0x721D, n: "destination", v: "", a: "" },
    { k: 0x721E, n: "among", v: "", a: "" },
    { k: 0x7220, n: "inclusion/with", v: "include", a: "with/included" },
    { k: 0x7221, n: "in", v: "", a: "" },
    { k: 0x7222, n: "out", v: "", a: "" },
    { k: 0x7223, n: "on/over", v: "", a: "" },
    { k: 0x7224, n: "off", v: "", a: "" },
    { k: 0x7225, n: "beside", v: "", a: "" },
    { k: 0x7226, n: "opposite", v: "", a: "" },
    { k: 0x7228, n: "high", v: "", a: "high" },
    { k: 0x7229, n: "low", v: "", a: "low" },
    { k: 0x722A, n: "above", v: "", a: "above" },
    { k: 0x722B, n: "below", v: "", a: "below" },
    { k: 0x7230, n: "start/go", v: "", a: "" },
    { k: 0x7231, n: "stop", v: "", a: "" },
    { k: 0x7232, n: "continue", v: "", a: "" },
    { k: 0x7233, n: "up", v: "", a: "" },
    { k: 0x7234, n: "down", v: "", a: "" },
    { k: 0x7235, n: "up to/until", v: "", a: "" },
    { k: 0x7236, n: "thus_far", v: "", a: "thus_far" },
    { k: 0x7238, n: "before/previously", v: "", a: "" },
    { k: 0x7239, n: "after/next", v: "", a: "" },
    { k: 0x723A, n: "in front", v: "", a: "" },
    { k: 0x723B, n: "behind", v: "", a: "" },
    { k: 0x723C, n: "middle/between", v: "", a: "" },
    { k: 0x723D, n: "left", v: "", a: "" },
    { k: 0x723E, n: "right", v: "", a: "" },
    { k: 0x7240, n: "to/toward", v: "", a: "" },
    { k: 0x7241, n: "from/away", v: "", a: "" },
    { k: 0x7242, n: "at/upon", v: "", a: "" },
    { k: 0x7243, n: "beyond", v: "", a: "" },
    { k: 0x7244, n: "against", v: "", a: "" },
    { k: 0x7245, n: "along", v: "", a: "" },
    { k: 0x7246, n: "across/around", v: "", a: "" },
    { k: 0x7247, n: "through", v: "", a: "" },
    { k: 0x7248, n: "far/far_away", v: "", a: "" },
    { k: 0x7249, n: "long", v: "", a: "" },
    { k: 0x724A, n: "close/near", v: "", a: "" },
    { k: 0x724B, n: "short", v: "", a: "" },
    { k: 0x724C, n: "succession", v: "", a: "" },
    { k: 0x7000, n: "progressive/imperfect", v: "do", a: "progressive/imperfect/happening" },
    { k: 0x7001, n: "perfective", v: "complete", a: "perfective/complete" },
    { k: 0x7002, n: "prospective", v: "", a: "prospective/will_happen" },
    { k: 0x7003, n: "inceptive/start", v: "start_act", a: "started_act" },
    { k: 0x7004, n: "inchoative", v: "start_be", a: "started_be" },
    { k: 0x7005, n: "cessative/end", v: "stop_act/stop_be", a: "stopped_act/stopped_be" },
    { k: 0x7006, n: "habitual/habit", v: "", a: "often" },
    { k: 0x7007, n: "pausative/pause", v: "pause", a: "paused" },
    { k: 0x7008, n: "resumptive/resumption", v: "resume", a: "resumed" },
    { k: 0x7009, n: "negative", v: "make_negative", a: "not" },
    { k: 0x700A, n: "equative/copula", v: "make_equal", a: "equal" },
    { k: 0x700B, n: "comparative/comparison", v: "compare", a: "more_than" },
    { k: 0x700C, n: "superlative", v: "make_most", a: "most" },
    { k: 0x700D, n: "sublative", v: "make_least", a: "least" },
    { k: 0x700E, n: "similarity", v: "make_similar", a: "like/as" },
    { k: 0x7010, n: "condition", v: "", a: "if_then/if/condition" },
    { k: 0x7012, n: "deduction", v: "", a: "should/ought/deduction" },
    { k: 0x7013, n: "ability", v: "", a: "can/ability" },
    { k: 0x7014, n: "determination", v: "", a: "will/shall/determination" },
    { k: 0x7015, n: "offer/invite", v: "invite/offer", a: "can/shall/will/offer/invite" },
    { k: 0x7016, n: "request", v: "request", a: "could/request" },
    { k: 0x7017, n: "possibility", v: "", a: "could/may/maybe/might/possibility" },
    { k: 0x7018, n: "slight_possibility", v: "", a: "could/may/maybe/might/slight_possibility" },
    { k: 0x7019, n: "permission", v: "permit/allow/let", a: "can/could/may/permission" },
    { k: 0x701A, n: "prohibition", v: "prohibit", a: "don't/avoid/prohibition" },
    { k: 0x701B, n: "obligation", v: "obligate", a: "must/obligation" },
    { k: 0x701C, n: "advice/suggestion", v: "advise/suggest", a: "should/ought/shall/suggestion" },
    { k: 0x701D, n: "intention", v: "intend", a: "intended/intention" },
    { k: 0x7020, n: "because", v: "", a: "" },
    { k: 0x7021, n: "of/about", v: "", a: "" },
    { k: 0x7022, n: "for", v: "", a: "" },
    { k: 0x7023, n: "by", v: "", a: "" },
    { k: 0x7024, n: "but/however", v: "", a: "" },
    { k: 0x7025, n: "plural", v: "", a: "see ‘plu_near_me’" },
    { k: 0x7026, n: "paucal/something", v: "", a: "some/paucal" },
    { k: 0x7027, n: "none/nothing", v: "", a: "none/nothing" },
    { k: 0x7028, n: "all/everything", v: "", a: "all/every" },
    { k: 0x7029, n: "any/anything", v: "", a: "any" },
    { k: 0x702A, n: "much", v: "", a: "much" },
    { k: 0x702B, n: "little", v: "", a: "see ‘time’" },
    { k: 0x702C, n: "many", v: "", a: "many" },
    { k: 0x702D, n: "few", v: "", a: "few" },
    { k: 0x702E, n: "big", v: "", a: "see ‘sky’" },
    { k: 0x702F, n: "small", v: "", a: "small" },
    { k: 0x7030, n: "open_bracket", v: "open_bracket", a: "open_bracket" },
    { k: 0x7031, n: "ordinal/power", v: "ordinal/power", a: "ordinal/power" },
    { k: 0x7032, n: "division", v: "division", a: "division" },
    { k: 0x7033, n: "multiplication", v: "multiplication", a: "multiplication" },
    { k: 0x7034, n: "addition", v: "addition", a: "addition" },
    { k: 0x7035, n: "subtraction", v: "subtraction", a: "subtraction" },
    { k: 0x7036, n: "modulo", v: "modulo", a: "modulo" },
    { k: 0x7037, n: "num_equal", v: "num_equal", a: "num_equal" },
    { k: 0x7038, n: "close_bracket", v: "close_bracket", a: "close_bracket" },
    { k: 0x7039, n: "greater_than", v: "greater_than", a: "greater_than" },
    { k: 0x703A, n: "less_than", v: "less_than", a: "less_than" },
    { k: 0x703B, n: "greater_equal", v: "greater_equal", a: "greater_equal" },
    { k: 0x703C, n: "less_equal", v: "less_equal", a: "less_equal" },
    { k: 0x703F, n: "num_inequal", v: "num_inequal", a: "num_inequal" }
];
let multi_lex = [
    { k: 0x00, m: "sky cold", n: "hell", a: "" },
    { k: 0x00, m: "person education", n: "teacher", a: "" },
    { k: 0x00, m: "building education", n: "school", a: "" },
    { k: 0x00, m: "word word", n: "sentence", a: "" },
    { k: 0x00, m: "word life", n: "language", a: "" },
    { k: 0x00, m: "word life word", n: "translation", a: "" },
    { k: 0x00, m: "time movement", n: "speed/pace", a: "fast/quick" },
    { k: 0x00, m: "work false", n: "cheat", a: "cheating/cheaty" },
    { k: 0x00, m: "class word", n: "article (lingustics)", a: "" },
    { k: 0x00, m: "word time", n: "speech", a: "" },
    { k: 0x00, m: "time word", n: "fluency", a: "fluent" },
    { k: 0x00, m: "word below”", n: "subtitle", a: "subtitled" },
    { k: 0x00, m: "life random", n: "fortune", a: "fortunate" },
    { k: 0x00, m: "person water", n: "hero", a: "heroic" },
    { k: 0x00, m: "person plant", n: "farmer", a: "farmable/arable" },
    { k: 0x00, m: "possession success", n: "prize", a: "" },
    { k: 0x00, m: "mind adult", n: "wisdom", a: "wise" },
    { k: 0x00, m: "mind village”", n: "fame", a: "famous" },
    { k: 0x00, m: "child plant", n: "seed", a: "" },
    { k: 0x00, m: "child air", n: "pollen", a: "" },
    { k: 0x00, m: "child sky", n: "star", a: "" },
    { k: 0x00, m: "heat animal sky", n: "feather", a: "feathered" },
    { k: 0x00, m: "mountain body", n: "chest", a: "" },
    { k: 0x00, m: "mountain body female", n: "breast", a: "" },
    { k: 0x00, m: "animal water", n: "fish", a: "" },
    { k: 0x00, m: "planet life", n: "world", a: "" }
];
let n_index = {};
let v_index = {};
let a_index = {};

function create_lex_indexes ()
{
    for (let l = 0, l_len = lex.length; l < l_len; ++l) {
        let nouns = lex[l].n.split("/");
        for (let n of nouns) { n_index[n] = lex[l].k; }
        if (lex[l].hasOwnProperty("v")) {
            let verbs = lex[l].v.split("/");
            for (let v of verbs) { v_index[v] = lex[l].k; }
        }
        let adjes = lex[l].a.split("/");
        for (let a of adjes) { a_index[a] = lex[l].k; }
    }
}

function create_multi_indexes ()
{
    for (let l = 0, l_len = multi_lex.length; l < l_len; ++l) {
        let multi = multi_lex[l].m.split(" ");
        for (let m in multi) {
            if ((multi[m] = gloss2num("N", multi[m])) == -1)
            { console.log("create_multi_indexes ERR: "+ multi_lex[l].m + ": "+ m +" not found"); };
        }
        let num = 0;
        switch (multi.length) {
            case 2: num = (multi[0] << 8) | multi[1]; break;
            case 3: num = (multi[0] << 16) | (multi[1] << 8) | multi[2]; break;
        }
        if (num == -1) { multi_lex.splice(l, 1); --l; --l_len; continue; }
        multi_lex[l].k = num;
      //Index
        let nouns = multi_lex[l].n.split("/");
        for (let n of nouns) { n_index[n] = multi_lex[l].k; }
        let adjes = multi_lex[l].a.split("/");
        for (let a of adjes) { a_index[a] = multi_lex[l].k; }
    }
}



//Need to make a doc-to-JS parser, with prefix option for things like grammar/travel/etc

