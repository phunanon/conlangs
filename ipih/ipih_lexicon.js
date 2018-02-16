var ipih_lexicon = {

//Language features: pronouns, clause dividers, conditionals
    ipi: { root: 'I/me', type: 'pronoun', verb: '', adjective: '', pnoun: '', comment: '', numeric: 0, colour: '#000' },
    ipe: { root: 'actor', type: 'pronoun', verb: '', adjective: '', pnoun: '', comment: 'Refers to the actor of actions taken in the sentence', numeric: 1, colour: '#003' },
    ipa: { root: 'you', type: 'pronoun', verb: '', adjective: '', pnoun: '', comment: '', numeric: 2, colour: '#006' },
    ipo: { root: 'they/them', type: 'pronoun', verb: '', adjective: '', pnoun: '', comment: '', numeric: 3, colour: '#009' },
    ipq: { root: 'us_inclusive/we_inclusive', type: 'pronoun', verb: '', adjective: '', pnoun: '', comment: '', numeric: 4, colour: '#00c' },
    ipu: { root: 'us_exclusive/we_exclusive', type: 'pronoun', verb: '', adjective: '', pnoun: '', comment: '', numeric: 5, colour: '#00f' },
    iti: { root: 'this', type: '', verb: 'pronoun', adjective: '', pnoun: '', comment: '', numeric: 6, colour: '#030' },
    ite: { root: 'that', type: '', verb: 'pronoun', adjective: '', pnoun: '', comment: '', numeric: 7, colour: '#033' },
    ita: { root: 'here', type: 'spatial', verb: 'move_close/go_to', adjective: 'close/near', pnoun: '', comment: '', numeric: 8, colour: '#036' },
    ito: { root: 'there', type: 'spatial', verb: 'move_away/go_from', adjective: 'far_away/distant', pnoun: '', comment: '', numeric: 9, colour: '#039' },
    itq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 10, colour: '#03c' },
    itu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 11, colour: '#03f' },
    iki: { root: 'all/everything/always/any', type: '', verb: '', adjective: 'many', pnoun: '', comment: '', numeric: 12, colour: '#060' },
    ike: { root: 'nothing/never', type: '', verb: '', adjective: 'few', pnoun: '', comment: '', numeric: 13, colour: '#063' },
    ika: { root: 'partial/sometimes', type: '', verb: '', adjective: 'some', pnoun: '', comment: '', numeric: 14, colour: '#066' },
    iko: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 15, colour: '#069' },
    ikq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 16, colour: '#06c' },
    iku: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 17, colour: '#06f' },
    ifi: { root: 'use', type: '', verb: 'use', adjective: 'useful', pnoun: '', comment: '', numeric: 18, colour: '#090' },
    ife: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 19, colour: '#093' },
    ifa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 20, colour: '#096' },
    ifo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 21, colour: '#099' },
    ifq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 22, colour: '#09c' },
    ifu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 23, colour: '#09f' },
    iwi: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 24, colour: '#0c0' },
    iwe: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 25, colour: '#0c3' },
    iwa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 26, colour: '#0c6' },
    iwo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 27, colour: '#0c9' },
    iwq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 28, colour: '#0cc' },
    iwu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 29, colour: '#0cf' },
    isi: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 30, colour: '#0f0' },
    ise: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 31, colour: '#0f3' },
    isa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 32, colour: '#0f6' },
    iso: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 33, colour: '#0f9' },
    isq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 34, colour: '#0fc' },
    isu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 35, colour: '#0ff' },
    ici: { root: 'also', type: '', verb: '', adjective: 'opposite', pnoun: '', comment: 'Used to seperate clauses', numeric: 36, colour: undefined },
    ice: { root: 'and/&', type: '', verb: '', adjective: 'same', pnoun: '', comment: 'Used to list', numeric: 37, colour: undefined },
    ica: { root: 'soft_and', type: '', verb: '', adjective: '', pnoun: '', comment: 'Used to list, retaining and extending adjectives, possession, and etc. See c206.', numeric: 38, colour: undefined },
    ico: { root: 'if_then', type: '', verb: '', adjective: 'should', pnoun: '', comment: 'Used to denote an if_then relationship between the leading and following clauses', numeric: 39, colour: undefined },
    icq: { root: 'compare_to', type: '', verb: '', adjective: 'could', pnoun: '', comment: 'Used to denote a comparison between the leading and following clauses', numeric: 40, colour: undefined },
    icu: { root: 'soft_also', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 41, colour: undefined },
    ixi: { root: 'however', type: '', verb: '', adjective: 'would', pnoun: '', comment: '', numeric: 42, colour: undefined },
    ixe: { root: 'only/just', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 43, colour: undefined },
    ixa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 44, colour: undefined },
    ixo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 45, colour: undefined },
    ixq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 46, colour: undefined },
    ixu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 47, colour: undefined },
    ihi: { root: 'for/to_do', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 48, colour: undefined },
    ihe: { root: 'question', type: '', verb: '', adjective: '', pnoun: '', comment: 'Used to question the listener about the immediately previous statement of the sentence.', numeric: 49, colour: undefined },
    iha: { root: 'because', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 50, colour: undefined },
    iho: { root: 'by', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 51, colour: undefined },
    ihq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 52, colour: undefined },
    ihu: { root: 'state/condition', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 53, colour: undefined },

//Life, nature, time
    epi: { root: 'life/nature', type: '', verb: 'live', adjective: 'natural/wild', pnoun: '', comment: '', numeric: 54, colour: '#300' },
    epe: { root: 'person', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 55, colour: '#303' },
    epa: { root: 'animal', type: '', verb: 'hunt', adjective: '', pnoun: '', comment: '', numeric: 56, colour: '#306' },
    epo: { root: 'plant', type: '', verb: 'grow', adjective: '', pnoun: '', comment: '', numeric: 57, colour: '#309' },
    epq: { root: 'food', type: '', verb: 'cook', adjective: '', pnoun: '', comment: '', numeric: 58, colour: '#30c' },
    epu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 59, colour: '#30f' },
    eti: { root: 'earth/mountains', type: '', verb: '', adjective: 'large/big/much', pnoun: '', comment: '', numeric: 60, colour: '#330' },
    ete: { root: 'water/rain/spring/river', type: '', verb: 'rain/drink', adjective: 'small/little', pnoun: '', comment: '', numeric: 61, colour: '#333' },
    eta: { root: 'fire/light/summer', type: '', verb: 'burn', adjective: 'bright', pnoun: '', comment: '', numeric: 62, colour: '#336' },
    eto: { root: 'air/noise/autumn', type: '', verb: 'shout', adjective: 'loud', pnoun: '', comment: '', numeric: 63, colour: '#339' },
    etq: { root: 'snow/winter', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 64, colour: '#33c' },
    etu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 65, colour: '#33f' },
    eki: { root: 'normality/calm/peace', type: '', verb: 'rest', adjective: 'normal/quiet', pnoun: '', comment: '', numeric: 66, colour: '#360' },
    eke: { root: 'change/chaos', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 67, colour: '#363' },
    eka: { root: 'nest/bed', type: '', verb: '', adjective: 'low', pnoun: '', comment: '', numeric: 68, colour: '#366' },
    eko: { root: 'sky', type: '', verb: '', adjective: 'high', pnoun: '', comment: '', numeric: 69, colour: '#369' },
    ekq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 70, colour: '#36c' },
    eku: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 71, colour: '#36f' },
    efi: { root: 'machine/process', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 72, colour: '#390' },
    efe: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 73, colour: '#393' },
    efa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 74, colour: '#396' },
    efo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 75, colour: '#399' },
    efq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 76, colour: '#39c' },
    efu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 77, colour: '#39f' },
    ewi: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 78, colour: '#3c0' },
    ewe: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 79, colour: '#3c3' },
    ewa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 80, colour: '#3c6' },
    ewo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 81, colour: '#3c9' },
    ewq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 82, colour: '#3cc' },
    ewu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 83, colour: '#3cf' },
    esi: { root: 'sun/day', type: '', verb: 'shine', adjective: 'hot', pnoun: '', comment: '', numeric: 84, colour: '#3f0' },
    ese: { root: 'moon/night', type: '', verb: 'obscure/sleep', adjective: 'cold', pnoun: '', comment: '', numeric: 85, colour: '#3f3' },
    esa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 86, colour: '#3f6' },
    eso: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 87, colour: '#3f9' },
    esq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 88, colour: '#3fc' },
    esu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 89, colour: '#3ff' },
    eci: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 90, colour: undefined },
    ece: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 91, colour: undefined },
    eca: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 92, colour: undefined },
    eco: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 93, colour: undefined },
    ecq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 94, colour: undefined },
    ecu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 95, colour: undefined },
    exi: { root: 'earlier/before', type: '', verb: '', adjective: 'early', pnoun: '', comment: '', numeric: 96, colour: undefined },
    exe: { root: 'now', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 97, colour: undefined },
    exa: { root: 'later/afterwards', type: '', verb: 'wait/postpone', adjective: '', pnoun: '', comment: '', numeric: 98, colour: undefined },
    exo: { root: 'yesterday', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 99, colour: undefined },
    exq: { root: 'today', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 100, colour: undefined },
    exu: { root: 'tomorrow', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 101, colour: undefined },
    ehi: { root: 'special', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 102, colour: undefined },
    ehe: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 103, colour: undefined },
    eha: { root: 'create/birth', type: '', verb: 'born/created', adjective: 'fixed/born', pnoun: '', comment: '', numeric: 104, colour: undefined },
    eho: { root: 'destroy', type: '', verb: '', adjective: 'broken', pnoun: '', comment: '', numeric: 105, colour: undefined },
    ehq: { root: 'new', type: '', verb: '', adjective: 'new', pnoun: '', comment: '', numeric: 106, colour: undefined },
    ehu: { root: 'old', type: '', verb: '', adjective: 'old', pnoun: '', comment: '', numeric: 107, colour: undefined },

//Humanity and its stuff
    api: { root: 'mouth', type: '', verb: 'kiss', adjective: '', pnoun: '', comment: '', numeric: 108, colour: '#600' },
    ape: { root: 'eye', type: '', verb: 'watch/look/see', adjective: '', pnoun: '', comment: '', numeric: 109, colour: '#603' },
    apa: { root: 'ear', type: '', verb: 'listen out', adjective: '', pnoun: '', comment: '', numeric: 110, colour: '#606' },
    apo: { root: 'leg', type: '', verb: 'walk', adjective: '', pnoun: '', comment: '', numeric: 111, colour: '#609' },
    apq: { root: 'hand', type: '', verb: 'write', adjective: '', pnoun: '', comment: '', numeric: 112, colour: '#60c' },
    apu: { root: 'head', type: '', verb: 'think', adjective: '', pnoun: '', comment: '', numeric: 113, colour: '#60f' },
    ati: { root: 'want/desire/pleasure', type: '', verb: 'want/desire/like', adjective: 'wanted', pnoun: '', comment: '', numeric: 114, colour: '#630' },
    ate: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 115, colour: '#633' },
    ata: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 116, colour: '#636' },
    ato: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 117, colour: '#639' },
    atq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 118, colour: '#63c' },
    atu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 119, colour: '#63f' },
    aki: { root: 'music', type: '', verb: 'sing', adjective: '', pnoun: '', comment: '', numeric: 120, colour: '#660' },
    ake: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 121, colour: '#663' },
    aka: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 122, colour: '#666' },
    ako: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 123, colour: '#669' },
    akq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 124, colour: '#66c' },
    aku: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 125, colour: '#66f' },
    afi: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 126, colour: '#690' },
    afe: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 127, colour: '#693' },
    afa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 128, colour: '#696' },
    afo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 129, colour: '#699' },
    afq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 130, colour: '#69c' },
    afu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 131, colour: '#69f' },
    awi: { root: 'happiness/party', type: '', verb: 'dance', adjective: 'nice', pnoun: '', comment: '', numeric: 132, colour: '#6c0' },
    awe: { root: 'sadness', type: '', verb: '', adjective: 'unpleasant', pnoun: '', comment: '', numeric: 133, colour: '#6c3' },
    awa: { root: 'anger', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 134, colour: '#6c6' },
    awo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 135, colour: '#6c9' },
    awq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 136, colour: '#6cc' },
    awu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 137, colour: '#6cf' },
    asi: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 138, colour: '#6f0' },
    ase: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 139, colour: '#6f3' },
    asa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 140, colour: '#6f6' },
    aso: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 141, colour: '#6f9' },
    asq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 142, colour: '#6fc' },
    asu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 143, colour: '#6ff' },
    aci: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 144, colour: undefined },
    ace: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 145, colour: undefined },
    aca: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 146, colour: undefined },
    aco: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 147, colour: undefined },
    acq: { root: 'friend/unison', type: '', verb: '', adjective: 'friendly, in unison', pnoun: '', comment: '', numeric: 148, colour: undefined },
    acu: { root: 'enemy', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 149, colour: undefined },
    axi: { root: 'family', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 150, colour: undefined },
    axe: { root: 'neighbour', type: '', verb: 'know', adjective: '', pnoun: '', comment: '', numeric: 151, colour: undefined },
    axa: { root: 'adult', type: '', verb: '', adjective: 'more', pnoun: '', comment: '', numeric: 152, colour: undefined },
    axo: { root: 'child', type: '', verb: 'laugh', adjective: 'less', pnoun: '', comment: '', numeric: 153, colour: undefined },
    axq: { root: 'female/girl/wife/she', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 154, colour: undefined },
    axu: { root: 'male/boy/husband/he', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 155, colour: undefined },
    ahi: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 156, colour: undefined },
    ahe: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 157, colour: undefined },
    aha: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 158, colour: undefined },
    aho: { root: 'purpose', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 159, colour: undefined },
    ahq: { root: 'good', type: '', verb: '', adjective: 'good', pnoun: '', comment: '', numeric: 160, colour: undefined },
    ahu: { root: 'bad', type: '', verb: 'ruin', adjective: 'bad', pnoun: '', comment: '', numeric: 161, colour: undefined },

//Communication, mathematics, direction
    opi: { root: 'word/name', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 162, colour: '#900' },
    ope: { root: 'school/education', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 163, colour: '#903' },
    opa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 164, colour: '#906' },
    opo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 165, colour: '#909' },
    opq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 166, colour: '#90c' },
    opu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 167, colour: '#90f' },
    oti: { root: 'up', type: '', verb: 'rise/jump', adjective: 'above', pnoun: '', comment: '', numeric: 168, colour: '#930' },
    ote: { root: 'down', type: '', verb: 'fall', adjective: 'below/under', pnoun: '', comment: '', numeric: 169, colour: '#933' },
    ota: { root: 'north', type: '', verb: '', adjective: 'scarce/poor', pnoun: '', comment: '', numeric: 170, colour: '#936' },
    oto: { root: 'east', type: '', verb: '', adjective: 'rich/right', pnoun: '', comment: '', numeric: 171, colour: '#939' },
    otq: { root: 'south', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 172, colour: '#93c' },
    otu: { root: 'west', type: '', verb: '', adjective: 'left', pnoun: '', comment: '', numeric: 173, colour: '#93f' },
    oki: { root: 'positive', type: '', verb: '', adjective: 'possible/happy/can', pnoun: '', comment: '', numeric: 174, colour: '#960' },
    oke: { root: 'negative/not', type: '', verb: '', adjective: 'impossible/unable/cannot/sad', pnoun: '', comment: 'Used to negate a situation', numeric: 175, colour: '#963' },
    oka: { root: 'ease/ability', type: '', verb: '', adjective: 'easy/probable', pnoun: '', comment: '', numeric: 176, colour: '#966' },
    oko: { root: 'difficulty/inability', type: '', verb: '', adjective: 'difficult', pnoun: '', comment: '', numeric: 177, colour: '#969' },
    okq: { root: 'method/work', type: '', verb: 'work', adjective: '', pnoun: '', comment: '', numeric: 178, colour: '#96c' },
    oku: { root: 'conflict/fight', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 179, colour: '#96f' },
    ofi: { root: 'time', type: '', verb: '', adjective: 'soon', pnoun: '', comment: '', numeric: 180, colour: '#990' },
    ofe: { root: 'travel', type: '', verb: 'travel', adjective: '', pnoun: '', comment: '', numeric: 181, colour: '#993' },
    ofa: { root: 'begin/start', type: '', verb: 'begin/start', adjective: 'slow', pnoun: '', comment: '', numeric: 182, colour: '#996' },
    ofo: { root: 'end/stop/speed', type: '', verb: 'end/stop', adjective: 'fast', pnoun: '', comment: '', numeric: 183, colour: '#999' },
    ofq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 184, colour: '#99c' },
    ofu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 185, colour: '#99f' },
    owi: { root: 'within/in', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 186, colour: '#9c0' },
    owe: { root: 'with', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 187, colour: '#9c3' },
    owa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 188, colour: '#9c6' },
    owo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 189, colour: '#9c9' },
    owq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 190, colour: '#9cc' },
    owu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 191, colour: '#9cf' },
    osi: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 192, colour: '#9f0' },
    ose: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 193, colour: '#9f3' },
    osa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 194, colour: '#9f6' },
    oso: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 195, colour: '#9f9' },
    osq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 196, colour: '#9fc' },
    osu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 197, colour: '#9ff' },
    oci: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 198, colour: undefined },
    oce: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 199, colour: undefined },
    oca: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 200, colour: undefined },
    oco: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 201, colour: undefined },
    ocq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 202, colour: undefined },
    ocu: { root: 'correct', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 203, colour: undefined },
    oxi: { root: 'level/degree', type: '', verb: '', adjective: 'more', pnoun: '', comment: '', numeric: 204, colour: undefined },
    oxe: { root: 'tall', type: '', verb: '', adjective: 'too_much', pnoun: '', comment: '', numeric: 205, colour: undefined },
    oxa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 206, colour: undefined },
    oxo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 207, colour: undefined },
    oxq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 208, colour: undefined },
    oxu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 209, colour: undefined },
    ohi: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 210, colour: undefined },
    ohe: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 211, colour: undefined },
    oha: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 212, colour: undefined },
    oho: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 213, colour: undefined },
    ohq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 214, colour: undefined },
    ohu: { root: 'greeting/valediction', type: '', verb: 'greet/valedict', adjective: '', pnoun: '', comment: '', numeric: 215, colour: undefined },

//"Buildings, furniture, structures, protocols, objects, locations"
    qpi: { root: 'everywhere', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 216, colour: '#c00' },
    qpe: { root: 'opposite/other_side', type: '', verb: '', adjective: 'beside', pnoun: '', comment: '', numeric: 217, colour: '#c03' },
    qpa: { root: 'unknown_location', type: '', verb: 'lose', adjective: 'lost', pnoun: '', comment: '', numeric: 218, colour: '#c06' },
    qpo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 219, colour: '#c09' },
    qpq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 220, colour: '#c0c' },
    qpu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 221, colour: '#c0f' },
    qti: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 222, colour: '#c30' },
    qte: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 223, colour: '#c33' },
    qta: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 224, colour: '#c36' },
    qto: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 225, colour: '#c39' },
    qtq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 226, colour: '#c3c' },
    qtu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 227, colour: '#c3f' },
    qki: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 228, colour: '#c60' },
    qke: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 229, colour: '#c63' },
    qka: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 230, colour: '#c66' },
    qko: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 231, colour: '#c69' },
    qkq: { root: 'rock/stone', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 232, colour: '#c6c' },
    qku: { root: 'tree/wood', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 233, colour: '#c6f' },
    qfi: { root: 'building/room', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 234, colour: '#c90' },
    qfe: { root: 'door/entry', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 235, colour: '#c93' },
    qfa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 236, colour: '#c96' },
    qfo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 237, colour: '#c99' },
    qfq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 238, colour: '#c9c' },
    qfu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 239, colour: '#c9f' },
    qwi: { root: 'table/platform', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 240, colour: '#cc0' },
    qwe: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 241, colour: '#cc3' },
    qwa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 242, colour: '#cc6' },
    qwo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 243, colour: '#cc9' },
    qwq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 244, colour: '#ccc' },
    qwu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 245, colour: '#ccf' },
    qsi: { root: 'toy', type: '', verb: 'play', adjective: '', pnoun: '', comment: '', numeric: 246, colour: '#cf0' },
    qse: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 247, colour: '#cf3' },
    qsa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 248, colour: '#cf6' },
    qso: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 249, colour: '#cf9' },
    qsq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 250, colour: '#cfc' },
    qsu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 251, colour: '#cff' },
    qci: { root: 'house/home', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 252, colour: undefined },
    qce: { root: 'village', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 253, colour: undefined },
    qca: { root: 'town', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 254, colour: undefined },
    qco: { root: 'city', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 255, colour: undefined },
    qcq: { root: 'country', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 256, colour: undefined },
    qcu: { root: 'wall/fence', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 257, colour: undefined },
    qxi: { root: 'meeting/visit', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 258, colour: undefined },
    qxe: { root: 'collection', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 259, colour: undefined },
    qxa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 260, colour: undefined },
    qxo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 261, colour: undefined },
    qxq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 262, colour: undefined },
    qxu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 263, colour: undefined },
    qhi: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 264, colour: undefined },
    qhe: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 265, colour: undefined },
    qha: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 266, colour: undefined },
    qho: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 267, colour: undefined },
    qhq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 268, colour: undefined },
    qhu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 269, colour: undefined },
    upi: { root: 'metre', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 270, colour: '#f00' },
    upe: { root: 'square', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 271, colour: '#f03' },
    upa: { root: 'circle', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 272, colour: '#f06' },
    upo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 273, colour: '#f09' },
    upq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 274, colour: '#f0c' },
    upu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 275, colour: '#f0f' },
    uti: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 276, colour: '#f30' },
    ute: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 277, colour: '#f33' },
    uta: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 278, colour: '#f36' },
    uto: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 279, colour: '#f39' },
    utq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 280, colour: '#f3c' },
    utu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 281, colour: '#f3f' },
    uki: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 282, colour: '#f60' },
    uke: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 283, colour: '#f63' },
    uka: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 284, colour: '#f66' },
    uko: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 285, colour: '#f69' },
    ukq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 286, colour: '#f6c' },
    uku: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 287, colour: '#f6f' },
    ufi: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 288, colour: '#f90' },
    ufe: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 289, colour: '#f93' },
    ufa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 290, colour: '#f96' },
    ufo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 291, colour: '#f99' },
    ufq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 292, colour: '#f9c' },
    ufu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 293, colour: '#f9f' },
    uwi: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 294, colour: '#fc0' },
    uwe: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 295, colour: '#fc3' },
    uwa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 296, colour: '#fc6' },
    uwo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 297, colour: '#fc9' },
    uwq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 298, colour: '#fcc' },
    uwu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 299, colour: '#fcf' },
    usi: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 300, colour: '#ff0' },
    use: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 301, colour: '#ff3' },
    usa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 302, colour: '#ff6' },
    uso: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 303, colour: '#ff9' },
    usq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 304, colour: '#ffc' },
    usu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 305, colour: '#fff' },
    uci: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 306, colour: undefined },
    uce: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 307, colour: undefined },
    uca: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 308, colour: undefined },
    uco: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 309, colour: undefined },
    ucq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 310, colour: undefined },
    ucu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 311, colour: undefined },
    uxi: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 312, colour: undefined },
    uxe: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 313, colour: undefined },
    uxa: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 314, colour: undefined },
    uxo: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 315, colour: undefined },
    uxq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 316, colour: undefined },
    uxu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 317, colour: undefined },
    uhi: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 318, colour: undefined },
    uhe: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 319, colour: undefined },
    uha: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 320, colour: undefined },
    uho: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 321, colour: undefined },
    uhq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 322, colour: undefined },
    uhu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 323, colour: undefined }
};


var ipih_con = [' ', 'p', 't', 'k', 'f', 'w', 's', 'c', 'x', 'h'];
var ipih_vow = ['i', 'e', 'a', 'o', 'q', 'u'];
var ipih_chr = ipih_con.concat(ipih_vow);
var ipih_ipa = [' ', 'p', 't', 'k', 'f', 'θ', 's', 'ʃ', 'x', 'ç', 'i', 'ɛ', 'a', 'ɔ', 'ɒ', 'u'];

var ipih_suffixes = {
    verb: 'p',
    past: 't',
    will: 'k',
    be: 'f',
    of: 'w',
    adj: 's',
    prop: 'x'
};


var phoneme_combinators = [
'ii', 'iː',
'ɛi', 'e',
'ai', 'ai',
'ɔi', 'ɘ',
'ɒi', 'ɞ',
'ui', 'ɯ',

'iɛ', 'ø',
'ɛɛ', 'ɛː',
'aɛ', 'æ',
'ɔɛ', 'ɞ',
'ɒɛ', 'ɒɛ',
'uɛ', 'ɵ',

'ia', 'ɪ',
'ɛa', 'ɛa',
'aa', 'aː',
'ɔa', 'ɐ',
'ɒa', 'ɜ',
'ua', 'ɤ',

'iɔ', 'ə',
'ɛɔ', 'ʌ',
'aɔ', 'ɶ',
'ɔɔ', 'ɔː',
'ɒɔ', 'ɒɔ',
'uɔ', 'o',

'iɒ', 'ʏ',
'ɛɒ', 'ɛɒ',
'aɒ', 'ɑ',
'ɔɒ', 'ɔɒ',
'ɒɒ', 'ɒː',
'uɒ', 'ʊ',

'iu', 'ɨ',
'ɛu', 'ʉ',
'au', 'au',
'ɔu', 'ɔu',
'ɒu', 'ɒu',
'uu', 'uː'
];

function ipihToIPA (ipih)
{
    var IPA = ipih.trim();
    for (c in ipih_chr) {
        IPA = IPA.split(ipih_chr[c]).join(ipih_ipa[c]);
    }
    return IPA;
}

function toCompactIPA (IPA)
{
    var compacted = IPA.split(' ').join('');
    for (var c = 0, clen = phoneme_combinators.length; c < clen; c+=2) {
        compacted = compacted.replace(new RegExp(phoneme_combinators[c], 'g'), phoneme_combinators[c+1]);
    }
    return compacted;
}


function tranToIpih (tran)
{
    if (tran == undefined) { return ''; }
    tran = tran.trim();
    if (!tran.length) { return ''; }
    tran = tran.toLowerCase().split(' ');
    var ipih = '';
    for (t in tran) {
        var w = tran[t];
        w = w.split(new RegExp(/[-\.]/, 'g'));
        if (w[0].match(/\d+/) != null) { //It's a number
            var num = parseInt(w[0]);
            for (l in ipih_lexicon) {
                if (ipih_lexicon[l].numeric == num) {
                    ipih += l +'x';
                    break;
                }
            }
        } else if (w.length>1 && w[1] == 'prop') { //It's a proper noun
            ipih += w[0];
        } else {
            for (l in ipih_lexicon) {
                var roots = ipih_lexicon[l].root.split('/');
                for (r in roots) {
                    if (roots[r] == w[0]) {
                        ipih += l;
                        break;
                    }
                }
            }
        }
        if (w.length>1) {
            ipih += ipih_suffixes[w[1]];
        }
        ipih += ' ';
    }
    return ipih.trim();
}
