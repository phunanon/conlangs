let _lex = [

//Language features: pronouns, clause dividers, conditionals, etc
    { noun: "me/I/my", type: "pronoun", verb: "I_am", adj: "", comment: "" },
    { noun: "you/your", type: "pronoun", verb: "you_are", adj: "", comment: "" },
    { noun: "actor", type: "pronoun", verb: "has", adj: "by", comment: "Refers to the actor of actions taken in the sentence" },
    { noun: "it/that/this/its", type: "pronoun", verb: "it_is/is/become", adj: "", comment: "" },
    { noun: "they/them/their", type: "pronoun", verb: "they_are", adj: "", comment: "" },
    { noun: "us_inclusive/we_inclusive/our_inclusive", type: "pronoun", verb: "in_are", adj: "", comment: "" },
    { noun: "us_exclusive/we_exclusive/our_exclusive", type: "pronoun", verb: "ex_are", adj: "", comment: "" },
    { noun: "all/always", type: "quantity, time", verb: "", adj: "many", comment: "" },
    { noun: "nothing/never", type: "quantity, time", verb: "", adj: "none", comment: "" },
    { noun: "partial/sometimes", type: "quantity, time", verb: "", adj: "partial/some", comment: "" },
    { noun: "only/just", type: "quantity, time", verb: "", adj: "only", comment: "" },
    { noun: "any", type: "quantity", verb: "", adj: "", comment: "" },
    { noun: "every", type: "quantity", verb: "", adj: "all", comment: "" },
    { noun: "here", type: "spatial", verb: "move_close/go_to", adj: "close/near", comment: "" },
    { noun: "there", type: "spatial", verb: "move_away/go_from", adj: "far_away/distant", comment: "" },
    { noun: "also", type: "conjunction", verb: "", adj: "opposite", comment: "Used to seperate clauses" },
    { noun: "and/&", type: "conjunction", verb: "", adj: "same", comment: "Used to list" },
    { noun: "soft_and", type: "conjunction", verb: "", adj: "similar/similarly", comment: "Used to list, retaining and extending adjectives, possession, subject, etc." },
    { noun: "if_then", type: "conjunction", verb: "control", adj: "should", comment: "Used to denote an if-then relationship between the leading and following clauses" },
    { noun: "compare_to", type: "", verb: "", adj: "must", comment: "Used to denote a comparison between the leading and following clause" },
    { noun: "therefore", type: "", verb: "therefore", adj: "therefore", comment: "" },
    { noun: "soft_also", type: "", verb: "", adj: "for", comment: "Used to start a new clause, retaining the subject" },
    { noun: "however", type: "", verb: "than", adj: "would", comment: "" },
    { noun: "question/?", type: "question", verb: "ask/question", adj: "why", comment: "" },
    { noun: "within/in/at", type: "spacial, preposition", verb: "within/at/occupy", adj: "within", comment: "" },
    { noun: "with", type: "", verb: "", adj: "", comment: "" },
    { noun: "from", type: "", verb: "come/come_from/go_away/leave", adj: "from/outward/outwards", comment: "" },
    { noun: "to", type: "", verb: "go_toward/arrive", adj: "to/toward/towards/inwards", comment: "" },

//Communication, mathematics, direction
    { noun: "number", type: "", verb: "quantify", adj: "how_much", comment: "Used to indicate a number follows" },
    { noun: "word/name", type: "", verb: "learn", adj: "", comment: "" },
    { noun: "school/education", type: "", verb: "teach", adj: "", comment: "" },
    { noun: "up", type: "", verb: "rise/jump", adj: "above/next", comment: "" },
    { noun: "down", type: "", verb: "fall", adj: "below/under/previous", comment: "" },
    { noun: "north", type: "", verb: "", adj: "scarce/poor", comment: "" },
    { noun: "east", type: "", verb: "", adj: "rich/right", comment: "" },
    { noun: "south", type: "", verb: "", adj: "", comment: "" },
    { noun: "west", type: "", verb: "", adj: "left", comment: "" },
    { noun: "ease/ability", type: "", verb: "", adj: "easy/probable", comment: "" },
    { noun: "difficulty/inability", type: "", verb: "", adj: "difficult", comment: "" },
    { noun: "method/work/use", type: "", verb: "work/use", adj: "how/can", comment: "" },
    { noun: "conflict/fight", type: "", verb: "fight", adj: "cannot/unable", comment: "" },
    { noun: "time/idea/thought/brain", type: "", verb: "think", adj: "soon", comment: "" },
    { noun: "travel", type: "", verb: "travel/insert", adj: "", comment: "" },
    { noun: "begin/start", type: "", verb: "begin/start", adj: "slow", comment: "" },
    { noun: "end/stop/speed", type: "", verb: "end/stop", adj: "fast", comment: "" },
    { noun: "positive", type: "", verb: "", adj: "possible", comment: "" },
    { noun: "negative/not", type: "", verb: "", adj: "negative/not", comment: "Used to negate a situation" },
    { noun: "language/talk/speech", type: "", verb: "say/talk/tell", adj: "", comment: "" },

//Life, nature, time
    { noun: "normality/calm/peace", type: "", verb: "die", adj: "normal/quiet", comment: "" },
    { noun: "change/chaos", type: "", verb: "change", adj: "abnormal/strange/odd", comment: "" },
    { noun: "nest/bed", type: "", verb: "rest/relax", adj: "low", comment: "" },
    { noun: "sky/history", type: "", verb: "remember", adj: "high", comment: "" },
    { noun: "machine/process", type: "", verb: "create/make", adj: "often", comment: "" },
    { noun: "life/nature", type: "", verb: "live", adj: "natural/wild/simple", comment: "" },
    { noun: "person/body", type: "", verb: "", adj: "who/complex", comment: "" },
    { noun: "animal", type: "", verb: "hunt", adj: "exist", comment: "" },
    { noun: "plant/death", type: "", verb: "grow/raise", adj: "what", comment: "" },
    { noun: "food/possession", type: "", verb: "eat/drink/consume", adj: "eaten/drank/consumed", comment: "" },
    { noun: "earth/mountain", type: "", verb: "", adj: "large/big/much", comment: "" },
    { noun: "water/rain/river/Spring", type: "", verb: "wet/pour/wash/rain", adj: "happy", comment: "" },
    { noun: "fire/light/Summer ", type: "", verb: "burn", adj: "bright", comment: "" },
    { noun: "air/wind/Autumn", type: "", verb: "blow", adj: "windy", comment: "" },
    { noun: "snow/Winter", type: "", verb: "snow", adj: "sad", comment: "" },
    { noun: "noise", type: "", verb: "echo/shout", adj: "loud", comment: "" },
    { noun: "sun/day", type: "", verb: "shine", adj: "hot", comment: "" },
    { noun: "earlier/before", type: "", verb: "", adj: "early", comment: "" },
    { noun: "now", type: "", verb: "", adj: "little/small/temporary", comment: "" },
    { noun: "later/after", type: "", verb: "wait/postpone", adj: "late", comment: "" },
    { noun: "moon/night", type: "", verb: "obscure/cover/sleep", adj: "cold", comment: "" },
    { noun: "yesterday", type: "", verb: "", adj: "most", comment: "" },
    { noun: "today", type: "", verb: "", adj: "never/impossible", comment: "" },
    { noun: "tomorrow", type: "", verb: "", adj: "least", comment: "" },
    { noun: "age", type: "", verb: "tax/age", adj: "when", comment: "" },
    { noun: "old/previous", type: "", verb: "", adj: "old", comment: "" },
    { noun: "new/youngling/next", type: "", verb: "", adj: "new/again/young", comment: "" },
    { noun: "bad", type: "", verb: "", adj: "bad", comment: "" },
    { noun: "good", type: "", verb: "", adj: "good", comment: "" },
//Humanity and its stuff
    { noun: "desire/want/pleasure", type: "", verb: "desire/want/like", adj: "", comment: "" },
    { noun: "need/requirement", type: "", verb: "need/require", adj: "", comment: "" },
    { noun: "unison/relationship", type: "", verb: "", adj: "in_unison", comment: "" },
    { noun: "music", type: "", verb: "play", adj: "musical", comment: "" },
    { noun: "friend/family", type: "", verb: "know_person", adj: "friendly/familiar", comment: "" },
    { noun: "neighbour", type: "", verb: "know_thing", adj: "", comment: "" },
    { noun: "adult", type: "", verb: "", adj: "more", comment: "" },
    { noun: "child", type: "", verb: "", adj: "less", comment: "" },
    { noun: "female/girl/wife/she", type: "", verb: "", adj: "", comment: "" },
    { noun: "male/boy/husband/he", type: "", verb: "", adj: "", comment: "" },
//Buildings, furniture, structures, protocols, objects, locations
    { noun: "rock/stone/table", type: "", verb: "", adj: "", comment: "" },
    { noun: "tree/wood", type: "", verb: "", adj: "", comment: "" },
    { noun: "building/room", type: "", verb: "", adj: "", comment: "" },
    { noun: "door/entry", type: "", verb: "enter", adj: "possible", comment: "" },
    { noun: "table/platform", type: "", verb: "", adj: "", comment: "" },
    { noun: "instrument/toy", type: "", verb: "play", adj: "", comment: "" },
    { noun: "meeting/visit", type: "", verb: "meet", adj: "", comment: "" },
    { noun: "item/tool", type: "", verb: "give", adj: "few", comment: "" },
    { noun: "collection", type: "", verb: "collect", adj: "many", comment: "" },
    { noun: "glass/cup/bottle/bowl/container", type: "", verb: "", adj: "", comment: "" },
    { noun: "area/ownership", type: "", verb: "own/have/take", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
    { noun: "location/position", type: "", verb: "place", adj: "where", comment: "" },
    { noun: "opposite/other_side", type: "spacial", verb: "", adj: "beside", comment: "" },
    { noun: "unknown_location/unknown_position", type: "spacial", verb: "lose", adj: "lost", comment: "" },
    { noun: "house/home", type: "", verb: "", adj: "", comment: "" },
    { noun: "village", type: "", verb: "", adj: "", comment: "" },
    { noun: "town", type: "", verb: "", adj: "", comment: "" },
    { noun: "country", type: "", verb: "", adj: "", comment: "" },
    { noun: "wall/fence", type: "", verb: "", adj: "bad", comment: "" },
    { noun: "face", type: "", verb: "see", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
    { noun: "", type: "", verb: "", adj: "", comment: "" },
//Compound nouns
    { noun: "measure-", type: "", verb: "", adj: "", comment: "" },
    { noun: "protocol-", type: "", verb: "", adj: "", comment: "" },
    { noun: "life-", type: "", verb: "", adj: "", comment: "" },
//More meta
    { noun: "null", type: "null", verb: "exist", adj: "absent", comment: "Used in place of a noun upon repeating grammar pattern" },
    { noun: "period", type: "period", verb: "", adj: "", comment: "Used to denote a new sentence, optionally by a head" }
];

let _noun_multi = {
    life: ["canine", "feline"],
    protocol: ["socialism"],
    measure: ["year"]
};

/*
let _noun_multi = [
    { noun: "coffee", nouns: "water plant" },
    { noun: "drum", nouns: "instrument noise" },
    { noun: "socialism", nouns: "collection person" },
    { noun: "wedding", nouns: "meeting desire" },
    { noun: "science", nouns: "collection idea"},
    { noun: "ship", nouns: "house water" },
    { noun: "teacher", nouns: "person school" }
];
let _adj_multi = [
    { adj: "absent", adjs: "near none" }
];
*/
