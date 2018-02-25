var _lex = [

//Language features: pronouns, clause dividers, conditionals, etc
    { noun: "me/I/my", type: "pronoun", verb: "I_am", adj: "", comment: "" },
    { noun: "you/your", type: "pronoun", verb: "you_are", adj: "", comment: "" },
    { noun: "actor", type: "pronoun", verb: "has", adj: "by", comment: "Refers to the actor of actions taken in the sentence" },
    { noun: "it/that/this/its", type: "pronoun", verb: "it_is", adj: "", comment: "" },
    { noun: "they/them/their", type: "pronoun", verb: "they_are", adj: "", comment: "" },
    { noun: "us_inclusive/we_inclusive/our_inclusive", type: "pronoun", verb: "we_in_are", adj: "", comment: "" },
    { noun: "us_exclusive/we_exclusive/our_exclusive", type: "pronoun", verb: "we_ex_are", adj: "", comment: "" },
    { noun: "all/always", type: "quantity, time", verb: "", adj: "many", comment: "" },
    { noun: "nothing/never", type: "quantity, time", verb: "", adj: "few", comment: "" },
    { noun: "partial/sometimes", type: "quantity, time", verb: "", adj: "some", comment: "" },
    { noun: "only/just", type: "quantity, time", verb: "", adj: "only", comment: "" },
    { noun: "any", type: "quantity", verb: "", adj: "", comment: "" },
    { noun: "every", type: "quantity", verb: "", adj: "", comment: "" },
    { noun: "here", type: "spatial", verb: "move_close/go_to", adj: "close/near", comment: "" },
    { noun: "there", type: "spatial", verb: "move_away/go_from", adj: "far_away/distant", comment: "" },
    { noun: "also", type: "conjunction", verb: "", adj: "opposite", comment: "Used to seperate clauses" },
    { noun: "and/&", type: "conjunction", verb: "", adj: "same", comment: "Used to list" },
    { noun: "soft_and", type: "conjunction", verb: "", adj: "", comment: "Used to list, retaining and extending adjectives, possession, and etc. See -206." },
    { noun: "if_then", type: "conjunction", verb: "", adj: "should", comment: "Used to denote an if-then relationship between the leading and following clauses" },
    { noun: "compare_to", type: "", verb: "", adj: "must", comment: "Used to denote a comparison between the leading and following clause" },
    { noun: "soft_also", type: "", verb: "", adj: "for", comment: "Used to start a new clause, retaining the subject" },
    { noun: "however", type: "", verb: "than", adj: "would", comment: "" },
    { noun: "question/?", type: "question", verb: "question", adj: "", comment: "" },
    { noun: "within/in", type: "spacial, preposition", verb: "within", adj: "within", comment: "" },
    { noun: "with", type: "", verb: "", adj: "", comment: "" },

//Communication, mathematics, direction
    { noun: "number", type: "", verb: "quantify", adj: "how_much", comment: "Used to indicate a number follows" },
    { noun: "word/name", type: "", verb: "learn", adj: "", comment: "" },
    { noun: "schol/education", type: "", verb: "teach", adj: "", comment: "" },
    { noun: "up", type: "", verb: "rise/jump", adj: "above", comment: "" },
    { noun: "down", type: "", verb: "fall", adj: "below/under", comment: "" },
    { noun: "north", type: "", verb: "", adj: "scarce/poor", comment: "" },
    { noun: "east", type: "", verb: "", adj: "rich/right", comment: "" },
    { noun: "south", type: "", verb: "", adj: "", comment: "" },
    { noun: "west", type: "", verb: "", adj: "left", comment: "" },
    { noun: "ease/ability", type: "", verb: "", adj: "easy/probable", comment: "" },
    { noun: "difficulty/inability", type: "", verb: "", adj: "difficult", comment: "" },
    { noun: "method/work/use", type: "", verb: "work/use", adj: "how", comment: "" },
    { noun: "conflict/fight", type: "", verb: "", adj: "", comment: "" },
    { noun: "time", type: "", verb: "", adj: "soon", comment: "" },
    { noun: "travel", type: "", verb: "travel", adj: "", comment: "" },
    { noun: "begin/start", type: "", verb: "begin/start", adj: "slow", comment: "" },
    { noun: "end/stop/speed", type: "", verb: "end/stop", adj: "fast", comment: "" },
    { noun: "positive", type: "", verb: "", adj: "possible/happy/can", comment: "" },
    { noun: "negative/not", type: "", verb: "", adj: "impossible/unable/cannot/sad", comment: "Used to negate a situation" },

//Life, nature, time
    { noun: "normality/calm/peace", type: "", verb: "rest", adj: "normal/quiet", comment: "" },
    { noun: "change/chaos", type: "", verb: "", adj: "", comment: "" },
    { noun: "nest/bed", type: "", verb: "", adj: "low", comment: "" },
    { noun: "sky", type: "", verb: "", adj: "high", comment: "" },
    { noun: "machine/process", type: "", verb: "", adj: "", comment: "" },
    { noun: "life/nature", type: "", verb: "live", adj: "natural/wild", comment: "" },
    { noun: "person", type: "", verb: "say/talk", adj: "who", comment: "" },
    { noun: "animal", type: "", verb: "hunt", adj: "", comment: "" },
    { noun: "plant", type: "", verb: "grow", adj: "what", comment: "" },
    { noun: "food/possession", type: "", verb: "eat/drink/consume", adj: "eaten/drank/consumed", comment: "" },
    { noun: "earth/mountain", type: "", verb: "", adj: "large/big/much", comment: "" },
    { noun: "water/rain/river/Spring", type: "", verb: "wet/pour", adj: "", comment: "" },
    { noun: "fire/light/Summer ", type: "", verb: "burn", adj: "bright", comment: "" },
    { noun: "air/wind/Autumn", type: "", verb: "blow", adj: "windy", comment: "" },
    { noun: "snow/Winter", type: "", verb: "snow", adj: "", comment: "" },
    { noun: "noise", type: "", verb: "", adj: "loud", comment: "" },
    { noun: "sun/day", type: "", verb: "shine", adj: "hot", comment: "" },
    { noun: "earlier/before", type: "", verb: "", adj: "early", comment: "" },
    { noun: "now", type: "", verb: "", adj: "little/small", comment: "" },
    { noun: "later/aftewards", type: "", verb: "wait/postpone", adj: "", comment: "" },
    { noun: "moon/night", type: "", verb: "obscure/cover/sleep", adj: "cold", comment: "" },
    { noun: "yesterday", type: "", verb: "", adj: "most", comment: "" },
    { noun: "today", type: "", verb: "", adj: "", comment: "" },
    { noun: "tomorrow", type: "", verb: "", adj: "least", comment: "" },
    { noun: "age/idea", type: "", verb: "", adj: "when", comment: "" },
    { noun: "old", type: "", verb: "", adj: "old", comment: "" },
    { noun: "new", type: "", verb: "", adj: "new", comment: "" },
//Humanity and its stuff
    { noun: "desire/want/pleasure", type: "", verb: "desire/want/like", adj: "why", comment: "" },
    { noun: "friend/unison", type: "", verb: "", adj: "friendly/in unison", comment: "" },
    { noun: "enemy", type: "", verb: "", adj: "hostile", comment: "" },
    { noun: "family", type: "", verb: "know_person", adj: "familiar", comment: "" },
    { noun: "neighbour", type: "", verb: "know_thing", adj: "", comment: "" },
    { noun: "adult", type: "", verb: "", adj: "more", comment: "" },
    { noun: "child", type: "", verb: "", adj: "less", comment: "" },
    { noun: "female/girl/wife/she", type: "", verb: "", adj: "", comment: "" },
    { noun: "male/boy/husband/he", type: "", verb: "", adj: "", comment: "" },
//Buildings, furniture, structures, protocols, objects, locations
    { noun: "rock/stone", type: "", verb: "", adj: "", comment: "" },
    { noun: "tree/wood", type: "", verb: "", adj: "", comment: "" },
    { noun: "building/room", type: "", verb: "", adj: "", comment: "" },
    { noun: "door/entry", type: "", verb: "enter", adj: "", comment: "" },
    { noun: "table/platform", type: "", verb: "", adj: "", comment: "" },
    { noun: "toy", type: "", verb: "play", adj: "", comment: "" },
    { noun: "meeting/visit", type: "", verb: "meet", adj: "", comment: "" },
    { noun: "collection", type: "", verb: "", adj: "", comment: "" },
    { noun: "glass/cup/bottle/bowl/container", type: "", verb: "", adj: "", comment: "" },
    { noun: "square", type: "", verb: "", adj: "", comment: "" },
    { noun: "circle", type: "", verb: "", adj: "", comment: "" },
    { noun: "place", type: "", verb: "", adj: "where", comment: "" },
    { noun: "opposite/other_side", type: "location", verb: "", adj: "beside", comment: "" },
    { noun: "unknown_location", type: "", verb: "lose", adj: "lost", comment: "" },
    { noun: "house/home", type: "", verb: "", adj: "", comment: "" },
    { noun: "village", type: "", verb: "", adj: "", comment: "" },
    { noun: "town", type: "", verb: "", adj: "", comment: "" },
    { noun: "city", type: "", verb: "", adj: "", comment: "" },
    { noun: "country", type: "", verb: "", adj: "", comment: "" },
    { noun: "wall/fence", type: "", verb: "", adj: "", comment: "" },
    { noun: "null", type: "null", verb:"ignore", adj: "ignored", comment: "Used in place of a noun upon repeating grammar pattern" }
];

/*
var _lex_multi = [
    { noun: "coffee", nouns: "water plant"}
];
*/
