
let _examples = [
    ["I ate the same food he ate.", "h:pd n:me v:eat n:food n:he a!same"],
    ["How did you get here?", "h:pdq n:you v:travel a!how n:here"],
    ["He poured coffee into his mug.", "h:pdq n:he v:pour n:water n:plant v:within n:cup"],
    ["I hear the drums echoing tonight.", "h:is n!instrument n:noise v:echo n:night"],
    ["I smell, I should wash.", "h:is n:body a!bad a!therefore v:wash a!should"],
    ["I met a little cottage girl; she was eight years old, she said.", "h:pd n:I v:meet n:village n:girl a!little v:they_are n:number n:8 v:say a!by n:actor"],
    ["It is a simple language.", "h:d n!it n:language v:it_is a!simple"],
    ["Have all the leaves fallen from the tree?", "h:pdq n:item a!all v:fall a!from n:tree"],
    ["But tell me now, and make this clear to me: what gathering, what feast is this? Why here?", "h:im n!however n:you v:tell n:me n:soft_and v:create n:ease n:my p:new h:q n:this v:it_is n:meeting n!and n!food n!and n:here a!why"],
    ["Memory is a strange thing. It doesn't work like I thought it did. There are days that define your story beyond your life. Like the day they arrived.", "h:h n!idea n:time a!strange p:old n:it v:work a!similar a!not n:my n:thought a!for p:old n:day a!exist v:create a!more n:history n:life p:new h:p n:they v:come a!similar"],
    ["A wedding? Revel? At the expense of all? Not that, I think.", "h:q n!meeting n!desire n!and n:music v:age n:person a!all p:new h:r n:negative"],
    ["From each according to their ability, to each according to their need.", "h:nh n:person v:work a!how_much n:ability n!actor n:soft_and v:eat a!how_much n:need n:actor"],
    ["From each according to their ability, to each according to their need.", "h:h n!ability n:person v:work p:old n!need n:person v:eat"],
    ["Cowards die many times before their death.", "h:h n:person a!abnormal v:die a!many n:death n:before"],
    ["We will meet in only 70 days.", "h:fd n:us_exclusive v:meet n:day n:number n:70 a!to a!only"],
    ["I hope to meet with the prime minister next year after he retires from office.", "h:id n:I v:want n:meeting n:person a!high v:within n:measure-year n!next n:position a!absent"],
    ["Three professors might be laid off this year.", "h:fh n!person n!school n:number n:3 v:leave a!by n:school n:measure-year"],

    ["The sun shines. The sun is shining.", "h:nh n:sun v:shine p:new h:id n:sun v:shine"],
    ["The sun shone. The sun has been shining.", "h:pd n:sun v:shine"],
    ["The sun will shine.", "h:fd n:sun v:shine"],
    ["The sun is shining again.", "h:id n:sun v:shine a!again"],
    ["The sun will shine tomorrow.", "h:fr n:day a!next v:shine"],
    ["The sun shines brightly.", "h:id n:sun v:shine a!much"],
    ["The bright sun shines.", "h:id n:sun a!bright v:shine"],
    ["The sun is rising now.", "h:id n:sun v:rise"],
    ["All the people shouted.", "h:ph n:person a!all v:shout"],
    ["Some of the people shouted.", "h:ph n:person a!some v:shout"],
    ["Many of the people shouted twice.", "h:pd n:person a!many v:shout n:number n:2"],
    ["Happy people often shout.", "h:nh n:person v:shout a!often"],
    ["The kitten jumped up.", "h:pd n:life-feline v:jump"],
    ["The kitten jumped onto the table.", "h:pd n:animal v:jump n:table a!to"],
    ["My little kitten walked away.", "h:pd n!life-feline n:my a!little v:go_away"],
    ["It's raining.", "h:id n:sky v:rain"],
    ["The rain came down.", "h:pd n:rain v:fall"],
    ["The kitten is playing in the rain.", "h:id n:life-feline v:play a!within n:rain"],
    ["The rain has stopped.", "h:pd n:rain v:stop"],
    ["Soon the rain will stop.", "h:fd n:rain v:stop a!soon"],
    ["I hope the rain stops soon.", "h:fd n:I v:desire n:stop n:rain"],
    ["Once wild animals lived here.", "h:pd n:animal a!wild v:live n:here"],
    ["Slowly she looked around.", ""],
    ["Go away!", ""],
    ["Let's go!", ""],
    ["You should go.", ""],
    ["I will be happy to go.", ""],
    ["He will arrive soon.", ""],
    ["The baby's ball has rolled away.", ""],
    ["The two boys are working together.", ""],
    ["This mist will probably clear away.", ""],
    ["Lovely flowers are growing everywhere.", ""],
    ["We should eat more slowly.", ""],
    ["You have come too soon.", ""],
    ["You must write more neatly.", ""],
    ["Directly opposite stands a wonderful palace.", ""],
    ["Henry's dog is lost.", ""],
    ["My cat is black.", ""],
    ["The little girl's doll is broken.", ""],
    ["I usually sleep soundly.", ""],
    ["The children ran after Jack.", ""],
    ["I can play after school.", ""],
    ["We went to the village for a visit.", ""],
    ["We arrived at the river.", ""],
    ["I have been waiting for you.", ""],
    ["The campers sat around the fire.", ""],
    ["A little girl with a kitten sat near me.", ""],
    ["The child waited at the door for her father.", ""],
    ["Yesterday the oldest girl in the village lost her kitten.", ""],
    ["Were you born in this village?", ""],
    ["Can your brother dance well?", ""],
    ["Did the man leave?", ""],
    ["Is your sister coming for you?", ""],
    ["Can you come tomorrow?", ""],
    ["Have the neighbors gone away for the winter?", ""],
    ["Does the robin sing in the rain?", ""],
    ["Are you going with us to the concert?", ""],
    ["Have you ever travelled in the jungle?", ""],
    ["We sailed down the river for several miles.", ""],
    ["Everybody knows about hunting.", ""],
    ["On a Sunny morning after the solstice we started for the mountains.", ""],
    ["Tom laughed at the monkey's tricks.", ""],
    ["An old man with a walking stick stood beside the fence.", ""],
    ["The squirrel's nest was hidden by drooping boughs.", ""],
    ["The little seeds waited patiently under the snow for the warm spring sun.", ""],
    ["Many little girls with wreaths of flowers on their heads danced around the bonfire.", ""],
    ["The cover of the basket fell to the floor.", ""],
    ["The first boy in the line stopped at the entrance.", ""],
    ["On the top of the hill in a little hut lived a wise old woman.", ""],
    ["During our residence in the country we often walked in the pastures.", ""],
    ["When will your guests from the city arrive?", ""],
    ["Near the mouth of the river, its course turns sharply towards the East.", ""],
    ["Between the two lofty mountains lay a fertile valley.", ""],
    ["Among the wheat grew tall red poppies.", ""],
    ["The strong roots of the oak trees were torn from the ground.", ""],
    ["The sun looked down through the branches upon the children at play.", ""],
    ["The west wind blew across my face like a friendly caress.", ""],
    ["The spool of thread rolled across the floor.", ""],
    ["A box of growing plants stood in the Window.", ""],
    ["I am very happy.", ""],
    ["These oranges are juicy.", ""],
    ["Sea water is salty.", ""],
    ["The streets are full of people.", ""],
    ["Sugar tastes sweet.", ""],
    ["The fire feels hot.", ""],
    ["The little girl seemed lonely.", ""],
    ["The little boy's father had once been a sailor.", ""],
    ["I have lost my blanket.", ""],
    ["A robin has built his nest in the apple tree.", ""],
    ["At noon we ate our lunch by the roadside.", ""],
    ["Mr. Jones made a knife for his little boy.", ""],
    ["Their voices sound very happy.", ""],
    ["Is today Monday?", ""],
    ["Have all the leaves fallen from the tree?", ""],
    ["Will you be ready on time?", ""],
    ["Will you send this message for me?", ""],
    ["Are you waiting for me?", ""],
    ["Is this the first kitten of the litter?", ""],
    ["Are these shoes too big for you?", ""],
    ["How wide is the River?", ""],
    ["Listen.", ""],
    ["Sit here by me.", ""],
    ["Keep this secret until tomorrow.", ""],
    ["Come with us.", ""],
    ["Bring your friends with you.", ""],
    ["Be careful.", ""],
    ["Have some tea.", ""],
    ["Pip and his dog were great friends.", ""],
    ["John and Elizabeth are brother and sister.", ""],
    ["You and I will go together.", ""],
    ["They opened all the doors and windows.", ""],
    ["He is small, but strong.", ""],
    ["Is this tree an oak or a maple?", ""],
    ["Does the sky look blue or gray?", ""],
    ["Come with your father or mother.", ""],
    ["I am tired, but very happy.", ""],
    ["He played a tune on his wonderful flute.", ""],
    ["Toward the end of August the days grow much shorter.", ""],
    ["A company of soldiers marched over the hill and across the meadow.", ""],
    ["The first part of the story is very interesting.", ""],
    ["The crow dropped some pebbles into the pitcher and raised the water to the brim.", ""],
    ["The baby clapped her hands and laughed in glee.", ""],
    ["Stop your game and be quiet.", ""],
    ["The sound of the drums grew louder and louder.", ""],
    ["Do you like summer or winter better?", ""],
    ["That boy will have a wonderful trip.", ""],
    ["They popped corn, and then sat around the fire and ate it.", ""],
    ["They won the first two games, but lost the last one.", ""],
    ["Take this note, carry it to your mother; and wait for an answer.", ""],
    ["I awoke early, dressed hastily, and went down to breakfast.", ""],
    ["Aha! I have caught you!", ""],
    ["This string is too short!", ""],
    ["Oh, dear! the wind has blown my hat away!", ""],
    ["Alas! that news is sad indeed!", ""],
    ["Whew! that cold wind freezes my nose!", ""],
    ["Are you warm enough now?", ""],
    ["They heard the warning too late.", ""],
    ["We are a brave people, and love our country.", ""],
    ["All the children came except Mary.", ""],
    ["Jack seized a handful of pebbles and threw them into the lake.", ""],
    ["This cottage stood on a low hill, at some distance from the village.", ""],
    ["On a fine summer evening, the two old people were sitting outside the door of their cottage.", ""],
    ["Our bird's name is Jacko.", ""],
    ["The river knows the way to the sea.", ""],
    ["The boat sails away, like a bird on the wing.", ""],
    ["They looked cautiously about, but saw nothing.", ""],
    ["The little house had three rooms, a sitting room, a bedroom, and a tiny kitchen.", ""],
    ["We visited my uncle's village, the largest village in the world.", ""],
    ["We learn something new each day.", ""],
    ["The market begins five minutes earlier this week.", ""],
    ["Did you find the distance too great?", ""],
    ["Hurry, children.", ""],
    ["Madam, I will obey your command.", ""],
    ["Here under this tree they gave their guests a splendid feast.", ""],
    ["In winter I get up at night, and dress by yellow candlelight.", ""],
    ["Tell the last part of that story again.", ""],
    ["Be quick or you will be too late.", ""],
    ["Will you go with us or wait here?", ""],
    ["She was always, shabby, often ragged, and on cold days very uncomfortable.", ""],
    ["Think first and then act.", ""],
    ["I stood, a little mite of a girl, upon a chair by the window, and watched the falling snowflakes.", ""],
    ["Show the guests these shells, my son, and tell them their strange history.", ""],
    ["Be satisfied with nothing but your best.", ""],
    ["We consider them our faithful friends.", ""],
    ["We will make this place our home.", ""],
    ["The squirrels make their nests warm and snug with soft moss and leaves.", ""],
    ["The little girl made the doll's dress herself.", ""],
    ["I hurt myself.", ""],
    ["She was talking to herself.", ""],
    ["He proved himself trustworthy.", ""],
    ["We could see ourselves in the water.", ""],
    ["Do it yourself.", ""],
    ["I feel ashamed of myself.", ""],
    ["Sit here by yourself.", ""],
    ["The dress of the little princess was embroidered with roses, the national flower of the Country.", ""],
    ["They wore red caps, the symbol of liberty.", ""],
    ["With him as our protector, we fear no danger.", ""],
    ["All her finery, lace, ribbons, and feathers, was packed away in a trunk.", ""],
    ["Light he thought her, like a feather.", ""],
    ["Every spring and fall our cousins pay us a long visit.", ""],
    ["In our climate the grass remains green all winter.", ""],
    ["The boy who brought the book has gone.", ""],
    ["These are the flowers that you ordered.", ""],
    ["I have lost the book that you gave me.", ""],
    ["The fisherman who owned the boat now demanded payment.", ""],
    ["Come when you are called.", ""],
    ["I shall stay at home if it rains.", ""],
    ["When he saw me, he stopped.", ""],
    ["Do not laugh at me because I seem so absent minded.", ""],
    ["I shall lend you the books that you need.", ""],
    ["Come early next Monday if you can.", ""],
    ["If you come early, wait in the hall.", ""],
    ["I had a younger brother whose name was Antonio.", ""],
    ["Gnomes are little men who live under the ground.", ""],
    ["He is loved by everybody, because he has a gentle disposition.", ""],
    ["Hold the horse while I run and get my cap.", ""],
    ["I have found the ring I lost.", ""],
    ["Play and I will sing.", ""],
    ["That is the funniest story I ever heard.", ""],
    ["She is taller than her brother.", ""],
    ["They are no wiser than we.", ""],
    ["Light travels faster than sound.", ""],
    ["We have more time than they.", ""],
    ["She has more friends than enemies.", ""],
    ["He was very poor, and with his wife and five children lived in a little low cabin of logs and stones.", ""],
    ["When the wind blew, the traveler wrapped his mantle more closely around him.", ""],
    ["I am sure that we can go.", ""],
    ["We went back to the place where we saw the roses.", ""],
    ["\"This tree is fifty feet high,\" said the gardener.", ""],
    ["I think that this train leaves five minutes earlier today.", ""],
    ["My opinion is that the governor will grant him a pardon.", ""],
    ["Why he has left the city is a mystery.", ""],
    ["The house stands where three roads meet.", ""],
    ["He has far more money than brains.", "h:h n:he v:has n:possession n:possession a!more v:than n:brain"],
    ["Evidently that gate is never opened, for the long grass and the great hemlocks grow close against it.", ""],
    ["I met a little cottage girl; she was eight years old, she said.", ""]
];
