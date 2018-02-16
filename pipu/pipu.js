var pipu_lex = {

//Language features: pronouns, clause dividers, conditionals
    pip: { root: "me/I", type: "", verb: "", adj: "", pnoun: "", comment: "", num:    0, colour: "#000" },
    pit: { root: "you", type: "", verb: "", adj: "", pnoun: "", comment: "", num:    1, colour: "#003" },
    pik: { root: "actor", type: "", verb: "", adj: "", pnoun: "", comment: "Refers to the actor of actions taken in the sentence", num:    2, colour: "#006" },
    pif: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:    3, colour: "#009" },
    piw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:    4, colour: "#00c" },
    pis: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:    5, colour: "#00f" },
    pic: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:    6, colour:  null  },
    pix: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    pep: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:    7, colour: "#030" },
    pet: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:    8, colour: "#033" },
    pek: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:    9, colour: "#036" },
    pef: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   10, colour: "#039" },
    pew: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   11, colour: "#03c" },
    pes: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   12, colour: "#03f" },
    pec: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   13, colour:  null  },
    pex: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    pap: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   14, colour: "#060" },
    pat: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   15, colour: "#063" },
    pak: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   16, colour: "#066" },
    paf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   17, colour: "#069" },
    paw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   18, colour: "#06c" },
    pas: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   19, colour: "#06f" },
    pac: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   20, colour:  null  },
    pax: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    pop: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   21, colour: "#090" },
    pot: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   22, colour: "#093" },
    pok: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   23, colour: "#096" },
    pof: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   24, colour: "#099" },
    pow: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   25, colour: "#09c" },
    pos: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   26, colour: "#09f" },
    poc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   27, colour:  null  },
    pox: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    pqp: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   28, colour: "#0c0" },
    pqt: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   29, colour: "#0c3" },
    pqk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   30, colour: "#0c6" },
    pqf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   31, colour: "#0c9" },
    pqw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   32, colour: "#0cc" },
    pqs: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   33, colour: "#0cf" },
    pqc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   34, colour:  null  },
    pqx: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    pup: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   35, colour: "#0f0" },
    put: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   36, colour: "#0f3" },
    puk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   37, colour: "#0f6" },
    puf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   38, colour: "#0f9" },
    puw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   39, colour: "#0fc" },
    pus: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   40, colour: "#0ff" },
    puc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   41, colour:  null  },
    pux: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    php: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   42, colour:  null  },
    pht: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   43, colour:  null  },
    phk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   44, colour:  null  },
    phf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   45, colour:  null  },
    phw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   46, colour:  null  },
    phs: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   47, colour:  null  },
    phc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   48, colour:  null  },
    phx: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },

//
    tip: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   49, colour: "#300" },
    tit: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   50, colour: "#303" },
    tik: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   51, colour: "#306" },
    tif: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   52, colour: "#309" },
    tiw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   53, colour: "#30c" },
    tis: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   54, colour: "#30f" },
    tic: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   55, colour:  null  },
    tix: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    tep: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   56, colour: "#330" },
    tet: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   57, colour: "#333" },
    tek: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   58, colour: "#336" },
    tef: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   59, colour: "#339" },
    tew: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   60, colour: "#33c" },
    tes: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   61, colour: "#33f" },
    tec: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   62, colour:  null  },
    tex: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    tap: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   63, colour: "#360" },
    tat: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   64, colour: "#363" },
    tak: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   65, colour: "#366" },
    taf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   66, colour: "#369" },
    taw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   67, colour: "#36c" },
    tas: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   68, colour: "#36f" },
    tac: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   69, colour:  null  },
    tax: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    top: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   70, colour: "#390" },
    tot: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   71, colour: "#393" },
    tok: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   72, colour: "#396" },
    tof: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   73, colour: "#399" },
    tow: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   74, colour: "#39c" },
    tos: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   75, colour: "#39f" },
    toc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   76, colour:  null  },
    tox: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    tqp: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   77, colour: "#3c0" },
    tqt: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   78, colour: "#3c3" },
    tqk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   79, colour: "#3c6" },
    tqf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   80, colour: "#3c9" },
    tqw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   81, colour: "#3cc" },
    tqs: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   82, colour: "#3cf" },
    tqc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   83, colour:  null  },
    tqx: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    tup: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   84, colour: "#3f0" },
    tut: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   85, colour: "#3f3" },
    tuk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   86, colour: "#3f6" },
    tuf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   87, colour: "#3f9" },
    tuw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   88, colour: "#3fc" },
    tus: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   89, colour: "#3ff" },
    tuc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   90, colour:  null  },
    tux: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    thp: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   91, colour:  null  },
    tht: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   92, colour:  null  },
    thk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   93, colour:  null  },
    thf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   94, colour:  null  },
    thw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   95, colour:  null  },
    ths: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   96, colour:  null  },
    thc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   97, colour:  null  },
    thx: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },

//
    kip: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   98, colour: "#600" },
    kit: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:   99, colour: "#603" },
    kik: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  100, colour: "#606" },
    kif: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  101, colour: "#609" },
    kiw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  102, colour: "#60c" },
    kis: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  103, colour: "#60f" },
    kic: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  104, colour:  null  },
    kix: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    kep: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  105, colour: "#630" },
    ket: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  106, colour: "#633" },
    kek: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  107, colour: "#636" },
    kef: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  108, colour: "#639" },
    kew: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  109, colour: "#63c" },
    kes: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  110, colour: "#63f" },
    kec: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  111, colour:  null  },
    kex: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    kap: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  112, colour: "#660" },
    kat: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  113, colour: "#663" },
    kak: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  114, colour: "#666" },
    kaf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  115, colour: "#669" },
    kaw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  116, colour: "#66c" },
    kas: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  117, colour: "#66f" },
    kac: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  118, colour:  null  },
    kax: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    kop: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  119, colour: "#690" },
    kot: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  120, colour: "#693" },
    kok: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  121, colour: "#696" },
    kof: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  122, colour: "#699" },
    kow: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  123, colour: "#69c" },
    kos: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  124, colour: "#69f" },
    koc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  125, colour:  null  },
    kox: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    kqp: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  126, colour: "#6c0" },
    kqt: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  127, colour: "#6c3" },
    kqk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  128, colour: "#6c6" },
    kqf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  129, colour: "#6c9" },
    kqw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  130, colour: "#6cc" },
    kqs: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  131, colour: "#6cf" },
    kqc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  132, colour:  null  },
    kqx: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    kup: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  133, colour: "#6f0" },
    kut: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  134, colour: "#6f3" },
    kuk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  135, colour: "#6f6" },
    kuf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  136, colour: "#6f9" },
    kuw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  137, colour: "#6fc" },
    kus: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  138, colour: "#6ff" },
    kuc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  139, colour:  null  },
    kux: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    khp: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  140, colour:  null  },
    kht: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  141, colour:  null  },
    khk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  142, colour:  null  },
    khf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  143, colour:  null  },
    khw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  144, colour:  null  },
    khs: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  145, colour:  null  },
    khc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  146, colour:  null  },
    khx: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },

//Communication, mathematics, direction
    fip: { root: "word/name", type: "", verb: "learn", adj: "", pnoun: "", comment: "", num:  147, colour: "#900" },
    fit: { root: "schol/education", type: "", verb: "teach", adj: "", pnoun: "", comment: "", num:  148, colour: "#903" },
    fik: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  149, colour: "#906" },
    fif: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  150, colour: "#909" },
    fiw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  151, colour: "#90c" },
    fis: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  152, colour: "#90f" },
    fic: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  153, colour:  null  },
    fix: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    fep: { root: "up", type: "", verb: "rise/jump", adj: "above", pnoun: "", comment: "", num:  154, colour: "#930" },
    fet: { root: "down", type: "", verb: "fall", adj: "below/under", pnoun: "", comment: "", num:  155, colour: "#933" },
    fek: { root: "north", type: "", verb: "", adj: "scarce/poor", pnoun: "", comment: "", num:  156, colour: "#936" },
    fef: { root: "east", type: "", verb: "", adj: "rich/right", pnoun: "", comment: "", num:  157, colour: "#939" },
    few: { root: "south", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  158, colour: "#93c" },
    fes: { root: "west", type: "", verb: "", adj: "left", pnoun: "", comment: "", num:  159, colour: "#93f" },
    fec: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  160, colour:  null  },
    fex: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    fap: { root: "ease/ability", type: "", verb: "", adj: "easy/probable", pnoun: "", comment: "", num:  161, colour: "#960" },
    fat: { root: "difficulty/inability", type: "", verb: "", adj: "difficult", pnoun: "", comment: "", num:  162, colour: "#963" },
    fak: { root: "method/work", type: "", verb: "work", adj: "", pnoun: "", comment: "", num:  163, colour: "#966" },
    faf: { root: "conflict/fight", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  164, colour: "#969" },
    faw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  165, colour: "#96c" },
    fas: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  166, colour: "#96f" },
    fac: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  167, colour:  null  },
    fax: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    fop: { root: "time", type: "", verb: "", adj: "soon", pnoun: "", comment: "", num:  168, colour: "#990" },
    fot: { root: "travel", type: "", verb: "travel", adj: "", pnoun: "", comment: "", num:  169, colour: "#993" },
    fok: { root: "begin/start", type: "", verb: "begin/start", adj: "slow", pnoun: "", comment: "", num:  170, colour: "#996" },
    fof: { root: "end/stop/speed", type: "", verb: "end/stop", adj: "fast", pnoun: "", comment: "", num:  171, colour: "#999" },
    fow: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  172, colour: "#99c" },
    fos: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  173, colour: "#99f" },
    foc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  174, colour:  null  },
    fox: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    fqp: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  175, colour: "#9c0" },
    fqt: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  176, colour: "#9c3" },
    fqk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  177, colour: "#9c6" },
    fqf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  178, colour: "#9c9" },
    fqw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  179, colour: "#9cc" },
    fqs: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  180, colour: "#9cf" },
    fqc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  181, colour:  null  },
    fqx: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    fup: { root: "positive", type: "", verb: "", adj: "possible/happy/can", pnoun: "", comment: "", num:  182, colour: "#9f0" },
    fut: { root: "negative/not", type: "", verb: "", adj: "impossible/unable/cannot/sad", pnoun: "", comment: "Used to negate a situation", num:  183, colour: "#9f3" },
    fuk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  184, colour: "#9f6" },
    fuf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  185, colour: "#9f9" },
    fuw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  186, colour: "#9fc" },
    fus: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  187, colour: "#9ff" },
    fuc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  188, colour:  null  },
    fux: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    fhp: { root: "within/in", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  189, colour:  null  },
    fht: { root: "with", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  190, colour:  null  },
    fhk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  191, colour:  null  },
    fhf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  192, colour:  null  },
    fhw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  193, colour:  null  },
    fhs: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  194, colour:  null  },
    fhc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  195, colour:  null  },
    fhx: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },

//Life, nature, time
/*
etq: { root: 'snow/winter', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 64, colour: '#33c' },
etu: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 65, colour: '#33f' },
eki: { root: 'normality/calm/peace', type: '', verb: 'rest', adjective: 'normal/quiet', pnoun: '', comment: '', numeric: 66, colour: '#360' },
eke: { root: 'change/chaos', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 67, colour: '#363' },
eka: { root: 'nest/bed', type: '', verb: '', adjective: 'low', pnoun: '', comment: '', numeric: 68, colour: '#366' },
eko: { root: 'sky', type: '', verb: '', adjective: 'high', pnoun: '', comment: '', numeric: 69, colour: '#369' },
ekq: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 70, colour: '#36c' },
eku: { root: '', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 71, colour: '#36f' },
efi: { root: 'machine/process', type: '', verb: '', adjective: '', pnoun: '', comment: '', numeric: 72, colour: '#390' },*/
    wip: { root: "life/nature", type: "", verb: "live", adj: "natural/wild", pnoun: "", comment: "", num:  196, colour: "#c00" },
    wit: { root: "person", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  197, colour: "#c03" },
    wik: { root: "animal", type: "", verb: "hunt", adj: "", pnoun: "", comment: "", num:  198, colour: "#c06" },
    wif: { root: "plant", type: "", verb: "grow", adj: "", pnoun: "", comment: "", num:  199, colour: "#c09" },
    wiw: { root: "food", type: "", verb: "cook", adj: "cooked", pnoun: "", comment: "", num:  200, colour: "#c0c" },
    wis: { root: "earth/mountains", type: "", verb: "", adj: "large/big/much", pnoun: "", comment: "", num:  201, colour: "#c0f" },
    wic: { root: "water/rain/spring/river", type: "", verb: "rain/drink", adj: "small/little", pnoun: "", comment: "", num:  202, colour:  null  },
    wix: { root: "fire/light/summer", type: "", verb: "burn", adj: "bright", pnoun: "", comment: "", num:  NaN, colour:  null  },
    wep: { root: "air/noise/autumn", type: "", verb: "shut", adj: "loud", pnoun: "", comment: "", num:  203, colour: "#c30" },
    wet: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  204, colour: "#c33" },
    wek: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  205, colour: "#c36" },
    wef: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  206, colour: "#c39" },
    wew: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  207, colour: "#c3c" },
    wes: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  208, colour: "#c3f" },
    wec: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  209, colour:  null  },
    wex: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    wap: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  210, colour: "#c60" },
    wat: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  211, colour: "#c63" },
    wak: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  212, colour: "#c66" },
    waf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  213, colour: "#c69" },
    waw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  214, colour: "#c6c" },
    was: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  215, colour: "#c6f" },
    wac: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  216, colour:  null  },
    wax: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    wop: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  217, colour: "#c90" },
    wot: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  218, colour: "#c93" },
    wok: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  219, colour: "#c96" },
    wof: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  220, colour: "#c99" },
    wow: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  221, colour: "#c9c" },
    wos: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  222, colour: "#c9f" },
    woc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  223, colour:  null  },
    wox: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    wqp: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  224, colour: "#cc0" },
    wqt: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  225, colour: "#cc3" },
    wqk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  226, colour: "#cc6" },
    wqf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  227, colour: "#cc9" },
    wqw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  228, colour: "#ccc" },
    wqs: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  229, colour: "#ccf" },
    wqc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  230, colour:  null  },
    wqx: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    wup: { root: "sun/day", type: "", verb: "shine", adj: "hot", pnoun: "", comment: "", num:  231, colour: "#cf0" },
    wut: { root: "earlier/before", type: "", verb: "", adj: "early", pnoun: "", comment: "", num:  232, colour: "#cf3" },
    wuk: { root: "now", type: "", verb: "", adj: "", pnoun: "", comment: "", num: 233, colour: "#cf6" },
    wuf: { root: "later/aftewards", type: "", verb: "wait/postpone", adj: "", pnoun: "", comment: "", num:  234, colour: "#cf9" },
    wuw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  235, colour: "#cfc" },
    wus: { root: "moon/night", type: "", verb: "obscure/sleep", adj: "cold", pnoun: "", comment: "", num:  236, colour: "#cff" },
    wuc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  237, colour:  null  },
    wux: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    whp: { root: "yesterday", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  238, colour:  null  },
    wht: { root: "today", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  239, colour:  null  },
    whk: { root: "tomorrow", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  240, colour:  null  },
    whf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  241, colour:  null  },
    whw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  242, colour:  null  },
    whs: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  243, colour:  null  },
    whc: { root: "old", type: "", verb: "", adj: "old", pnoun: "", comment: "", num:  244, colour:  null  },
    whx: { root: "new", type: "", verb: "", adj: "new", pnoun: "", comment: "", num:  NaN, colour:  null  },

//Humanity and its stuff
    sip: { root: "desire/want/pleasure", type: "", verb: "desire/want/like", adj: "", pnoun: "", comment: "", num:  245, colour: "#f00" },
    sit: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  246, colour: "#f03" },
    sik: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  247, colour: "#f06" },
    sif: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  248, colour: "#f09" },
    siw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  249, colour: "#f0c" },
    sis: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  250, colour: "#f0f" },
    sic: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  251, colour:  null  },
    six: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    sep: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  252, colour: "#f30" },
    set: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  253, colour: "#f33" },
    sek: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  254, colour: "#f36" },
    sef: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  255, colour: "#f39" },
    sew: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  256, colour: "#f3c" },
    ses: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  257, colour: "#f3f" },
    sec: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  258, colour:  null  },
    sex: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    sap: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  259, colour: "#f60" },
    sat: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  260, colour: "#f63" },
    sak: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  261, colour: "#f66" },
    saf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  262, colour: "#f69" },
    saw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  263, colour: "#f6c" },
    sas: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  264, colour: "#f6f" },
    sac: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  265, colour:  null  },
    sax: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    sop: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  266, colour: "#f90" },
    sot: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  267, colour: "#f93" },
    sok: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  268, colour: "#f96" },
    sof: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  269, colour: "#f99" },
    sow: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  270, colour: "#f9c" },
    sos: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  271, colour: "#f9f" },
    soc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  272, colour:  null  },
    sox: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    sqp: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  273, colour: "#fc0" },
    sqt: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  274, colour: "#fc3" },
    sqk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  275, colour: "#fc6" },
    sqf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  276, colour: "#fc9" },
    sqw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  277, colour: "#fcc" },
    sqs: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  278, colour: "#fcf" },
    sqc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  279, colour:  null  },
    sqx: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    sup: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  280, colour: "#ff0" },
    sut: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  281, colour: "#ff3" },
    suk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  282, colour: "#ff6" },
    suf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  283, colour: "#ff9" },
    suw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  284, colour: "#ffc" },
    sus: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  285, colour: "#fff" },
    suc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  286, colour:  null  },
    sux: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    shp: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  287, colour:  null  },
    sht: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  288, colour:  null  },
    shk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  289, colour:  null  },
    shf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  290, colour:  null  },
    shw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  291, colour:  null  },
    shs: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  292, colour:  null  },
    shc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  293, colour:  null  },
    shx: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },

//
    cip: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  294, colour:  null  },
    cit: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  295, colour:  null  },
    cik: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  296, colour:  null  },
    cif: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  297, colour:  null  },
    ciw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  298, colour:  null  },
    cis: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  299, colour:  null  },
    cic: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  300, colour:  null  },
    cix: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    cep: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  301, colour:  null  },
    cet: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  302, colour:  null  },
    cek: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  303, colour:  null  },
    cef: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  304, colour:  null  },
    cew: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  305, colour:  null  },
    ces: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  306, colour:  null  },
    cec: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  307, colour:  null  },
    cex: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    cap: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  308, colour:  null  },
    cat: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  309, colour:  null  },
    cak: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  310, colour:  null  },
    caf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  311, colour:  null  },
    caw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  312, colour:  null  },
    cas: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  313, colour:  null  },
    cac: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  314, colour:  null  },
    cax: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    cop: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  315, colour:  null  },
    cot: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  316, colour:  null  },
    cok: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  317, colour:  null  },
    cof: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  318, colour:  null  },
    cow: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  319, colour:  null  },
    cos: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  320, colour:  null  },
    coc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  321, colour:  null  },
    cox: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    cqp: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  322, colour:  null  },
    cqt: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  323, colour:  null  },
    cqk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  324, colour:  null  },
    cqf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  325, colour:  null  },
    cqw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  326, colour:  null  },
    cqs: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  327, colour:  null  },
    cqc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  328, colour:  null  },
    cqx: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    cup: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  329, colour:  null  },
    cut: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  330, colour:  null  },
    cuk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  331, colour:  null  },
    cuf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  332, colour:  null  },
    cuw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  333, colour:  null  },
    cus: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  334, colour:  null  },
    cuc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  335, colour:  null  },
    cux: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    chp: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  336, colour:  null  },
    cht: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  337, colour:  null  },
    chk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  338, colour:  null  },
    chf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  339, colour:  null  },
    chw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  340, colour:  null  },
    chs: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  341, colour:  null  },
    chc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  342, colour:  null  },
    chx: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },

//
    xip: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xit: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xik: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xif: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xiw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xis: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xic: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xix: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xep: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xet: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xek: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xef: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xew: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xes: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xec: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xex: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xap: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xat: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xak: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xaf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xaw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xas: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xac: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xax: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xop: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xot: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xok: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xof: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xow: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xos: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xoc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xox: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xqp: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xqt: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xqk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xqf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xqw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xqs: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xqc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xqx: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xup: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xut: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xuk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xuf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xuw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xus: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xuc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xux: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xhp: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xht: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xhk: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xhf: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xhw: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xhs: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xhc: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },
    xhx: { root: "", type: "", verb: "", adj: "", pnoun: "", comment: "", num:  NaN, colour:  null  },

};






var pipu_con = ['p', 't', 'k', 'f', 'w', 's', 'c', 'x'];
var pipu_vow = ['i', 'e', 'a', 'o', 'q', 'u', 'h'];
var pipu_chr = [' '].concat(pipu_con.concat(pipu_vow));
var pipu_ipa = [' ', 'p', 't', 'k', 'f', 'θ', 's', 'ʃ', 'x', 'i', 'ɛ', 'a', 'ɔ', 'ɒ', 'u', 'ə'];
var pipu_spk = [' ', 'p', 't', 'k', 'f', 'T', 's', 'S', 'x', 'i', 'E', 'a', 'O', '0', 'u', '@'];
var ipa_aud = ['']
var pipu_num = [NaN, 0, 1, 2, 3, 4, 5, 6, NaN, 0, 1, 2, 3, 4, 5, 6];

var gloss_pipu = {
    root: "",
    verb: "i",
    past: "e",
    will: "a",
    adj: "q",
    num: "h"
};


function pipuFind (chr, set)
{
    for (c in set) {
        if (set[c] == chr) { return c; }
    }
    return -1;
}


function pipu2IPA (pipu)
{
    var IPA = pipu.trim();
    for (c in pipu_chr) {
        IPA = IPA.split(pipu_chr[c]).join(pipu_ipa[c]);
    }
    return IPA;
}


//https://itinerarium.github.io/phoneme-synthesis/
function pipu2spk (pipu)
{
    var spk = "[[";
    pipu = pipu2IPA(pipu);
    for (c in pipu) {
        spk += pipu_spk[pipuFind(pipu[c], pipu_ipa)];
    }
    return spk + "]]";
}


function word2pipu (word)
{
    return word;
}
function word2pipu (word)
{
    word = word.toLowerCase();
    if (word.match(/\d+/) != null) { //It's a number
        var num = parseInt(word);
        for (lex in pipu_lex) {
            if (pipu_lex[lex].num == num) {
                return lex + gloss_pipu["num"];
            }
        }
    } else {
        for (lex in pipu_lex) {
            var roots = pipu_lex[lex].root.split('/');
            for (r in roots) {
                if (roots[r] == word) {
                    return lex;
                }
            }
        }
    }
    return '?';
}


function gloss2pipu (gloss)
{
    gloss = gloss.split(" ");
    var pipu = "";
    for (g in gloss) {
        var gl = gloss[g].split("-");
        var grammar = (gl.length > 1 ? gl[1] : 'root');
        if (grammar == "prop") { //Is a proper noun
            pipu += ' '+ gl[0];
        } else {
            pipu += ' '+ word2pipu(gl[0]) + gloss_pipu[grammar];
        }
    }
    return pipu.trim();
}



function gEs (e) { return document.querySelectorAll(e); }
function gE  (e) { return document.querySelector(e); }
function pad (n, p) { return (p + n).slice(-p.length); }
