function vgloss2ki_multi (vg)
{
    let lat_ki = "";
    let htm_ki = "";
    vg = vg.split(" ");
    for (let g = 0, g_len = vg.length; g < g_len; ++g) {
        let gl = vg[g];
        let p = gl[0];
        let is_opt = (gl[1] == "'");
        gl = gl.substring(is_opt ? 2 : 1);
        if (p == 2) { gl = gl.replace(/,/g, ""); }
        let num = gloss2num(p, gl);
        let ki = "";
        if (num >= 0) {
            if (is_opt) {
                num = makeNumOpt(num, true);
            }
            if (p == 2 && num > 0xFF) { num = makeNumOpt(num); } //If this is a multipart verb , ensure its first half is optional
            if (!g && p == 0 && num > 0xFF) { num = makeNumOpt(num, true) - 0x80; } //If this is a multipart noun at the start of a sentence, ensure its first half is optional
            //if (is_opt && p == 0 && num > 0xFF) { num = num | 0x80; } //If this is a multipart noun marked as optional, ensure its final morpheme is optional
            ki = num2ki(num);
        } else {
            ki = "?";
        }
        lat_ki += ki+ (p == 2 ? "," : "");
        htm_ki += "<"+ parts[p] +"_>"+ ki + (p == 2 ? "," : "") +"</"+ parts[p] +"_> ";
        lat_ki += " ";
        htm_ki += " ";
    }
    return { lat_ki: lat_ki, htm_ki: htm_ki };
}

function makeNumOpt (n, all = false)
{
    if (all) {
        if (n > 0xFFFF) { return n | 0x808080; }
        if (n > 0xFF) { return n | 0x8080; }
    } else {
        if (n > 0xFFFF) { return n | 0xFF0000; }
        if (n > 0xFF) { return n | 0x8000; }
    }
    return n | 0x80;
}


function gloss2num (part, gl)
{
    let num;
    let arr;
    switch (parts[part]) {
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
    if (num > 0xFFFF) { morph = Cs[(num & 0xF00000) >> 20] + Vs[(num & 0x0F0000) >> 16] + morph; }
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

function kiNumberer (num, base)
{
    let ki = "";
    
  //Extract pos/neg & int/dec!
    let is_neg = false;
    let is_dec = false;
    if (num < 0) { is_neg = true; num *= -1; }
    if (f(num) != num) { is_dec = num; num = f(num); }

    switch (base) {
        case "10": {
          //Calculate log!
            let log = f(l(num));
            if (num == 0) { log = 0; }
            if (log > 7) { return "Number too big."; }
            if (is_neg) { log |= 0x8; }
          //Do CV's!
            num = num.toString().split("");
            let C = false;
            for (let n = 0, n_len = num.length; n < n_len; ++n) {
                if (C) { ki += Cs[i(num[n])]; } else { ki += Vs[i(num[n])]; }
                C = !C;
            }
          //Finish up!
            if (!(ki.length % 2)) { ki += "i"; }
            ki = "wu"+ Cs[log] + ki;
            break;
        }    
        case "16": {
          //Calculate log!
            let log = f(l(num, 16));
            if (num == 0) { log = 0; }
            if (log > 7) { return "Number too big."; }
            if (is_neg) { log |= 0x8; }
          //Do CV's!
            num = i(num).toString(16).split("");
            let C = false;
            for (let n = 0, n_len = num.length; n < n_len; ++n) {
                if (C) { ki += Cs[i(num[n], 16)]; } else { ki += Vs[i(num[n], 16)]; }
                C = !C;
            }
          //Finish up!
            if (!(ki.length % 2)) { ki += "i"; }
            ki = "wh"+ Cs[log] + ki;
            break;
        }
    }
    
    if (is_dec) { ki += " "+ kiNumberer((is_dec+"").split(".")[1].substr(0, 7).replace(/0+$/, ""), base); }
    
    return ki;
}


function ki2Morse (ki)
{
    
}