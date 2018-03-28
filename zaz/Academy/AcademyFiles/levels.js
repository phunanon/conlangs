//Parts
var pPrevious = '<button class="move" onclick="previousLevel();">Go back</button>';
var pContinue = '<button class="move" onclick="nextLevel();">Continue</button>';
var pSkip = '<button class="move" onclick="nextLevel();">Skip</button><br><span class="s">Only ever skip if you have read the whole level before</span>';
var pIndex = '<button class="move" onclick="openIndex();">Index</button>';
var pBriefPause = aB(["oà"], 'oà - ' + toIPA("oà"),"white") + aB(["óa"], 'óa - ' + toIPA("óa"),"white");
var pSoundBoard;

function loadSoundBoard()
{
    pSoundBoard = '(Consonants are followed by the /a/ sound)<br>';
    var s = 0;
    var bla = (is640Mobile() ? 3 : 6); //Break Line At
//Create the clickable buttons for the sounds of zaz
    for (var c = 0, len = zoCs.length; c < len; c++)
    {
        pSoundBoard += aB([zoCs[c]], '' + zoCs[c] + ' - ' + toIPA(zoCs[c]),"white");
        s++;
        if (s % bla == 0) { pSoundBoard += '<br>'; }
    }
    for (var v = 0, len = zVs.length; v < len; v++)
    {
        pSoundBoard += aB([zVs[v]], '' + zVs[v] + ' - ' + toIPA(zVs[v]), "rgb(" + pI(255 - ((s%2) * 50)) + ",255," + pI(255 - (((s+1)%2) * 50)) + ")");
        s++;
        if (s % bla == 0) { pSoundBoard += '<br>'; }
    }
}


//lB += '<p></p>';

function zB(zaz, gloss, translation) //Make a zaz box
{
    return '<div class="zB"><span class="z">' + zaz + '</span><br><span class="g">' + gloss + '</span><br><span class="t">' + translation + '</span></div>';
}

var iBis = 0;
function iB(source, caption) // Make an image box
{
    iBis++;
    setTimeout('gE("' + iBis +'").src = "AcademyFiles/' + source + '";', 100);
    return '<div class="i"><p class="loadLabel">Loading!</p><img id="' + iBis + '" onload="this.parentElement.removeChild(this.parentElement.getElementsByClassName(\'loadLabel\')[0]);"></img><p>' + caption + '</p></div>';
}

function aB(sources, caption, colour) //Create an audio box
{
    var toReturn = '';
    for (var s = 0, len = sources.length; s < len; s++)
    {
        toReturn += '<audio oncanplaythrough="this.parentElement.getElementsByTagName(\'BUTTON\')[0].disabled = \'\'; this.parentElement.removeChild(this.parentElement.getElementsByTagName(\'P\')[0]);" style="display: none;" id="a_' + sources[s] + '" src="AcademyFiles/sounds/' + sources[s] + '.mp3" preload="audio">!</audio>';
        toReturn += '<button onclick="gE(\'a_' + sources[s] + '\').play();" disabled="disabled">' + (sources.length < 2 ? caption : caption + " " + (s + 1)) + '</button>';
        toReturn += '<p>audio not loaded</p>'
        toReturn += (s != sources.length - 1 ? '<br>' : '');
    }
    return '<div class="a" style="background-color: ' + colour + '">' + toReturn + '</div>';
}







var ranks = [
                ["Absolute beginner", "Okay, only a few thousand words and rules to learn and you're done.", 2],
                ["Infant", "You know nothing, but you're ahead of every other person on this planet (minus those with higher ranks than you).", 8],
                ["Beginner","You now know a very very tiny amount of zaz, and now you're going to work towards earning the Student rank.", 6],
                ["Student","You're a serious zaz learner, now. I'm proud! Now, it's time to get your teeth stuck into even more of what zaz has to offer!",1]
            ];

function r0l1(n) //Introduction
{
    if (n) { return "Introduction"; }
    lB += '<h2 class="title">Introduction</h2>';
    lB += '<h3>What is this?</h3>';
    lB += '<p>This is an interactive programme, powered by in-browser Javascript, which aids in the learning of zaz. It goes through the basics, and lets you score points and ranks along the way.</p>';
    lB += '<h3>What is zaz?</h3>';
    lB += '<p>zaz is a constructed language started in Nov, 2014, by I, <a href="https://reddit.com/u/phunanon">Patrick Bowen</a>. It is being developed to be small and logical, and at the moment, is not entirely done. However, it is learnable to a point where you can have normal conversation about <i>stuff.</i> Be sure to check out its subreddit (link riiight at the bottom of the page).</p>';
    lB += '<h3>Why would I want to learn it?</h3>';
    lB += '<p>I have little clue, seriously. I mean, if you want to have some weird fun, learn a secret language for between your friends (though there are plenty of simpler conlangs out there), and its only advantages as a language are it\'s tiny (therefore quick) and very logical (though not perfect, because that\'s boring).</p>';
    return lB;
}

function r0l2(n) //Introduction 2
{
    if (n) { return "Introduction continued"; }
    lB += '<h2 class="title">Introduction continued</h2>';
    lB += '<p><b>First things first! A small introduction to your environment...</b></p>';
    lB += '<p>As you can see above, you have your infobar. The infobar shows you your current level, your progress to earning your next rank, and your overall progress to completing this programme. It also allows you to view your progress actions, such as save your progress offline, load it from offline, or restart the academy.</p>';
    lB += '<p>Throughout the programme, there are "translation areas" which compare a zaz translation, a glossary (a breakdown of the zaz sentence), and the English translation. They look like this:</p>';
    lB += zB("ulam", "(the)-world", "the world");
    lB += '<p>You can hover over text <span class="examplespan" title="example">which looks like like this</span> to see valuable extra information (you can click it to have a more permanent text, useful on mobile)</p>';
    lB += '<p>Now, you can go ahead and click Continue to earn your first rank in the zaz academy!</p>';
    return lB;
}

function r1l1(n) //Root words
{
    if (n) { return "Root words"; }
    lB += '<h2 class="title">Root words</h2>';
    lB += '<p>Okay, enough faffing about; let\'s get down to business.</p>';
    lB += '<p>You first need to learn how zaz works. It\'s both complicated and simple at the same time (compared to natural languages), so buckle up.</p>';
    lB += '<p>zaz has what are called "root words," which you\'ll find in every other language <i>ever</i> too. Roots are only 3 sounds long, like so:</p>';
    lB += zB("lam", "world", "world");
    lB += '<p>Roots are all a small concept, and are all nouns (objects). These could be concepts such as "sleep," "tree," "wood," "arm," etc. Now, there can be only 1,944 Roots in zaz, because that\'s how many combinations of 3 sounds can make up a word (18 consonants and 6 vowels), so they have been selected pragmatically.</p>';
    return lB;
}

function r1l2(n) //Alphabet
{
    if (n) { return "Alphabet"; }
    lB += '<h2 class="title">Alphabet</h2>';
    lB += '<p>zaz\'s alphabet is actually an important part of it, meaning, at some point, you will have to learn the order of it entirely, but not right now. Here it is:</p>';
    lB += '<span class="z">' + zazAlphabet.join(", ") + '</span>';
    lB += '<p>It\'s much easier to break it down into its consonants and vowels:</p>';
    lB += '<span class="z">';
    for (var c = 0, len = zoCs.length; c < len; c++)
    {
        lB += zoCs[c] + ", ";
    }
    lB = lB.substr(0, lB.length - 2);
    lB += '</span><br><span class="z">';
    for (var v = 0, len = zVs.length; v < len; v++)
    {
        lB += zVs[v] + ", ";
    }
    lB = lB.substr(0, lB.length - 2);
    lB += '</span>';
    lB += '<p>Now, you might be freaking out right now as you realise that "q" is not <i>usually</i> representative of a vowel. However, in my conlangs (constructed languages), it always is. Also note that in the entire language, there are more than just 6 vowels. You\'ll learn about this soon.</p>';
    lB += '<p>Also note that all letters wrote in zaz are lower case, and uppercase does not even exist. So, how do all these letters sound?</p>'
    return lB;
}

function r1l3(n) //Pronunciation
{
    if (n) { return "Pronunciation"; }
    lB += '<h2 class="title">Pronunciation</h2>';
    lB += '<p>In zaz, everything is wrote phonetically, which means when you see the word <span class="z">lam</span>, it really is just the <b>l</b> sound, then the <b>a</b> sound, then the <b>m</b> sound. No funny stuff. There is a little bit of funny stuff, however, but I\'m going to introduce you to something very important first...';
    lB += '<h3>The International Phonetic Alphabet</h3>';
    lB += '<p>Also known as "IPA," this alphabet is standardised, and contains all the sounds in every natural language to date (you can just scroll past it):</p>';
    lB += iB("ipachart.png", "This is the IPA specification as of 2005");
    lB += '<p><b>Don\'t freak out,</b> but rather, be intrigued. This is how most linguists write down discovered languages, or people write down names phonetically so they remember how to say them. IPA transcriptions are wrote between forward slashes, like my name in IPA is /patɹɪk/. A very good resource is the website <a href="http://www.ipachart.com">www.ipachart.com</a>, as it lets you listen to the sounds. Also, try "<a href="http://google.com/?q=define%20word">define word</a>" in Google, and you\'ll see it will give you the pronunciation in IPA. However, you can hear the ones in zaz below, by clicking on them (they can also be found in the Sound Board in the infobar, for later use):</p>';
    lB += pSoundBoard;
    lB += '<p>For vowels which have diacritics, you <i>might</i> have noticed that they are actually two sounds. When there\'s a diacritic, an /i/ is placed before or after the sound. However, it is very important that you ensure there is a verbal separation between vowels like this. For example, the two vowels <span class="z">oà</span> sounds like "oreea," but which vowel does the /i/ belong to? It could be wrote <span class="z">óa</span>, otherwise. What you need to do is have a very brief pause (using the glottal stop, /ʔ/), like the hyphen in "uh-oh," like in the audio below:</p>';
    lB += pBriefPause;
    lB += '<p>Another example of this brief pause:</p>';
    lB += aB(["ée"],'ée - ' + toIPA("ée"),"white");
    return lB;
}

function r1l4(n) //Appending Articles
{
    if (n) { return "Appending Articles"; }
    lB += '<h2 class="title">Appending Articles</h2>';
    lB += '<p>Just like English, zaz also has prefixes. In English, these are appended onto the start of words to change their meaning in some way, like "load" becoming "reload," "wash" becoming "pre-wash," etc.</p>';
    lB += '<p>All prefixes in zaz are known as "Articles." They are simply a single vowel added onto the front. They are stacked at the start of the Root word in alphabetical order, and work like so:</p>';
    lB += zB("ulam.", "(the)-world", "The world.");
    lB += '<p>Nearly all basic articles in English and other languages, such as the singular "a" or "an:"</p>';
    lB += zB("alam","(si.)-world","a world");
    lB += '<p>Articles in zaz also change the amount of the word, such as here:</p>';
    lB += zB("qlam","(pl.)-world","worlds");
    lB += '<p>There are other amounts which can be done as well, using the Articles in zaz, such as "all," or "some:"</p>';
    lB += zB("únuf","(all)-adult","all adults");
    lB += zB("ónuf","(pll.)-adult","some adults");
    lB += '<p>Here, the "definite article" ("the") is mixed with the plural Article in zaz, to do as such:</p>';
    lB += zB("uqlam","(the)-(pl.)-worlds","the worlds");
    lB += '<p>Note in the translation area the glosses, where they mark the Articles as (the) for "the," (si.) for "a/an" (meaning "singular"), (pl.) for "plural," (all) for "all," (pll.) for "paucal" (which means "some"). You can hover your mouse over the parts in the glosses to see what they mean, in the future.</p>';
    lB += '<p>However, try to remember as many of these Articles as possible, because now we\'re going to do a quiz on it! Here\'s your chance to earn more points.</p>';
    return lB;
}

function r1l5(n) //Articles quiz
{
    if (n) { return "Articles quiz"; }
    lB += '<h2 class="title">Articles quiz</h2>';
    lB += loadQuiz(qInfantArticles);
    return lB;
}

function r1l6(n) //Appending Modifiers
{
    if (n) { return "Appending Modifiers"; }
    lB += '<h2 class="title">Appending Modifiers</h2>';
    lB += '<p>Modifiers, in zaz, <i>modify</i> the words they are attached to. They are added as suffixes, which are stacked on the end of the word in alphabetical order, just like for the Articles. Modifiers will change the Root into one of many forms, change its tense, or make it another grammatical part. The most common ones have examples below:</i>';
    lB += zB('yel', 'food', 'food');
    lB += zB('yelo', 'food-(v.)', 'to prepare food');
    lB += '<p>The above example changed the Root for "food" into "to prepare food." The <span class="z">o</span> Modifier makes Roots into verbs in the present tense. In the next level, we\'ll learn how to make it in other tenses (it\'s really easy, I swear!). These next examples change a word from its normal Root form into its Adjective form (a describing word):</p>';
    lB += zB('vamo van', 'book-(v.) information', 'to read information');
    lB += zB('vam vana','book information-(adj.)','informative book');
    lB += zB('uvam lam','(the)-book world','The world book');
    lB += zB('uvam lama','(the)-book world-(adj.)','the global book');
    lB += '<p>In zaz, the Adjective follows the thing it is describing. Just like a slightly more advanced version of the sentence above:</p>';
    lB += zB('uvam vana', '(the)-book information-(adj.)', 'the informative book');
    lB += '<p>Once you feel you can progress, press Continue to start learning tense, and other extremely common and important Modifier</p>';
    return lB;
}

function r1l7(n) //Tense and being
{
    if (n) { return "Tense and being"; }
    lB += '<h2 class="title">Tense and being</h2>';
    lB += '<p>In nearly all natural languages (and all the ones I know about), there is something called a "copula." The copula makes one thing or many things equal one other thing or things. Basically, in English, the copula is used like this: "You are funny," "The tree is green," "I am hungry," "You were there," etc.</p>';
    lB += '<p>zaz, however, does things differently. It has a Modifier to make the word its attached to a "being." This means that anything before the "being" can be considered the "being." See the basic example below:</p>';
    lB += zB('uvam vane.', '(the)-book information-(b.)', 'The book is information.');
    lB += '<p>And, this can be stacked so that anything can have the Modifier added to become a <i>being</i>:</p>';
    lB += zB('uvam vanae.', '(the)-book information-(adj.)-(b.)', 'The book is informative.');
    lB += '<p>Tense is quite easy to apply in zaz, as all it requires is adding /i/ either before or after the vowel, being past and future tense respectively. This is shown below:</p>';
    lB += zB('uvak xafae. uvak xafaé. uvak xafaè.', '(the)-student life-(adj.)-(b.) . (the)-student life-(adj.)-(fb.) . (the)-student life-(adj.)-(pb.)', 'The student is alive. The student will be alive. The student was alive.');
    lB += '<p>This practise can be applied to verbs, too, like so:</p>';
    lB += zB('lono, lonó, lonò','water-(v.) , water-(fv.) , water-(pv.)','drink water, will drink water, drank water');
    return lB;
}

function r1l8(n) //Modifiers quiz
{
    if (n) { return "Modifiers quiz"; }
    lB += '<h2 class="title">Modifiers quiz</h2>';
    lB += loadQuiz(qInfantModifiers);
    return lB;
}



function r2l1(n) //Pronouns and names
{
    if (n) { return "Pronouns and names"; }
    lB += '<h2 class="title">Pronouns and names</h2>';
    lB += '<p>Most, if not certainly all, languages have <i>pronouns</i>, which are special nouns referring to a person/thing/people/things/etc. At least in English, common pronouns are "that," "you," "them," "us," "he," "those," "there," etc.</p>';
    lB += '<p>zaz has its own set of 12~ pronouns (subject to change, naturally), all very important to remember. They all start with the letter "v", and have only one vowel, like so:</p>';
    lB += zB('va xabo vu.','v:I love-(v.) v:you','I love you.');
    lB += '<p>(as you can see, the glosses mark a pronoun with the v: prefix, for clarity)</p>';
    lB += '<p>Pronouns are like any other noun, in that they can have Articles added onto the front (but not Modifiers). The most common is the selective Articles, such as "any," "all," but the most common <i>selective</i> Article for Pronouns is surprisingly the plural Article, <span class="z">q</span>. You have to remember that <b>all Articles are selective</b> in the way they work. When you say "worlds" in zaz, <span class="z">qlam</span>, you are using language to bring the the speaker the idea of two or more worlds. Anyway, here\'s the plural in action:</p>';
    lB += zB('qvá wawò kq vo.','(pl.)-v:they repair-(fv.) k:expe v:that','They(plural) should have fixed that/it.');
    lB += '<p>So, the main pronouns you\'re going to know for this rank are "I," "you," and "that/it/this." Revise these sentences for a quiz! (Focus only on the pronouns and their use)</p>';
    lB += zB('va pálo qvo.','v:I façade-(v.) (pl.)-v:that','I maintain a façade around those/these.');
    lB += zB('qvu xaxó ka!','(pl.)-v:you death-(fv.) k:obli','You(plural) will die!');
    lB += zB('va newo qlam.','v:I like-(v.) (pl.)-world','I like worlds.');
    lB += zB('vq íva vo.','v:her (d.)-v:I v:that','She gave me it/that/this.');
    return lB;
}

function r2l2(n) //Pronouns quiz
{
    if (n) { return "Pronouns quiz"; }
    lB += '<h2 class="title">Pronouns quiz</h2>';
    lB += loadQuiz(qBeginnerPronouns);
    return lB;
}


function r2l3(n) //Possession
{
    if (n) { return "Possession"; }
    lB += '<h2 class="title">Possession</h2>';
    lB += '<p><i>Your</i> native English language usually shows possession by either adding <span class="t">\'s</span> or <span class="t">s\'</span> or changing the pronoun from <span class="t">you</span> to <span class="t">your</span>, <span class="t">me/I</span> to <span class="t">I</span>, etc.</p>';
    lB += '<p>However, in <i>my</i> conlang, the possession is all done as an Article of the word being possessed. It\'s called the <span class="g">(ofl.)</span> Article (click/hover/tap for info!). It is used in the following way:</p>';
    lB += zB('vi ipay','v:him (ofl.)-silence','his silence');
    lB += zB('va imq̀ yuvae','v:I (ofl.)-m:q̀ amicability-(adj.)-(b.)','My spouse is friendly.');
    lB += zB('vu ilamab','v:you (ofl.)-apple','your apple');
    lB += zB('va ixem ptake.','v:I (ofl.)-name Patrick-(b.)','My name is Patrick.');
    lB += '<p>That\'s really all there is to it! Now, time for a quiz to test whether you remember what got you this far...</p>';
    return lB;
}

function r2l4(n) //Multi quiz
{
    if (n) { return "Beginner's multiquiz"; }
    lB += '<h2 class="title">Beginner\'s multiquiz</h2>';
    lB += loadQuiz(qBeginnerMulti);
    return lB;
}

function r2l5(n) //Metas
{
    if (n) { return "Metas"; }
    lB += '<h2 class="title">Metas</h2>';
    lB += '<p>Not all words in zaz are 3 characters long. Some special "Meta" words are only two characters long, and the most important to look at first is <i>Metas</i>.</p>';
    lB += '<p>Metas are CV (where C is Consonant, and V is Vowel) structures which are words like "if," "but," "and," and sayings like "yes," "please," etc. We\'re going to look at the "because" Meta, first:</p>';
    lB += zB('vá notò ze yélaè.','v:they mouth-(pv.) z:because hunger-(adj.)-(pb.)','They ate because they were hungry.');
    lB += '<p>As you can see, a Meta is marked in the Glosses with a "z:". Here\'s an example of the "if" Meta, which is used differently to English:</p>';
    lB += zB('vu ió ulamab zì notó úvo.','v:you (ofl.)-(fv.) (the)-apple z:depends mouth-(fv.) (all)-v:that','You can have the apple if you eat all of it.');
    lB += '<p>In the Glosses, "if" is known as "z:depends" and is used between a statement and its condition. There are 18 metas in total, using up all the vowels in zaz.</p>';
    lB += '<p><i>There is a lot to remember</i>, but, don\'t worry! As with any language, using it frequently will slowly let it seep into your long term memory. And don\'t think that\'s just not possible with you, because you probably haven\'t had the chance to use a language extensively. So, in this next level, we\'re going to walk you through a conversation!</p>';
    return lB;
}

function r2l6(n) //zaz Conversation - màm
{
    if (n) { return "zaz conversation - màm"; }
    lB += '<h2 class="title">zaz conversation</h2>';
    lB += '<p>In this level, you\'re going to talk to <span class="z">màm</span>, a native zaz speaker.</p>';
    lB += loadConversation('màm', c_màm);
    return lB;
}

function r3l1(n) //Secondary words
{
    if (n) { return "Secondary words"; }
    lB += '<h2 class="title">Secondary words</h2>';
    lB += '<p>zaz has a magical dictionary. There are currently, as of writing, 300 root words. <i>However</i> every single root word also has an adjective form, a verb form, <i>and</i> a Secondary form. Let\'s take a quick peek at this:</p>';
    lB += zB('pad, pád','house , home','house, home');
    lB += '<p>You\'ve seen <span class="z">pád</span> in your chat with màm. Well, here\'s a random word from the dictionary, and all its different forms:</p>';
    lB += zB('vow, vowa, vowo, vów, vówa, vówo','shout , shout-(adj.) , shout-(v.) , whisper , whisper-(adj.) , whisper-(v.)','shout, shouty, to shout, whisper, whispered, to whisper');
    lB += '<p>All these words are arbitrary, so, you have to remember more than I said before... sorryyyy ^-^</p><p>Though, it shouldn\'t be too taxing on your mind to remember them, as they are related, in some way or another. Chill.</p>';
    lB += '';
    return lB;
}

function rl(n)
{
    if (n) { return "test"; }
    lB += "test";
    return lB;
}


function endLevel()
{
    lB += '<h2>You have finished the programme!</h2>';
    lB += '<p>Yaaaay! You finished with a score of <b>' + aC(u_score) + '</b>. You can now begin to practise zaz to become fluent!</p>';
    lB += '<p>Be sure to check out <a href="https://www.reddit.com/r/zazzy">zaz\'s subreddit</a> for the latest documentation and lexicon. And feel free to <a href="https://www.reddit.com/message/compose?to=phunanon">message me</a> if you\'re so interested that you want one-to-one lessons!</p>';
    lB += '<button onclick="wipeProgress();">Restart the programme</button>';
    return lB;
}




//Conversations
c_màm =             [ //[zaz speaker, gloss, translation], student, advice
                        [['vaó! vu ixxac?<span class="cemoti">:D</span>','v:I-(fv.) ! v:you (ofl.)-health?','Hello! How are you?'],'va xopae',
                            'They say hello! You can hover/click/tap the message to see the translation. The doubled first consonant of a word makes the speaker want to know about the word. To say hello in zaz, you take the pronoun <span class="g">v:I</span> and make it a future tense verb. You need to reply to them by saying that you\'re good: the word for "goodness" is "xop". Click okay to reply! (Then press Enter to send the message)'],
                        [['','',''],'vvu?','Now, to ask the question back, we\'ll use the pronoun <span class="g">v:you</span>, and double its first consonant to make it a question.'],
                        [['zo va xopae! vu ixxem?<span class="cemoti">;)</span>','z:and v:I goodness-(adj.)-(b.) ! v:you (ofl.)-name?','I\'m good too! What\'s your name?'],'va ixem ***e',
                            'Excellent!<br>They used the <span class="g">z:and</span> Meta to say "also", and then said they were good. Now, they have asked for your name! Names in zaz follow a certain pattern: CV̀C. This means you need to pick a name with one consonant, followed by a vowel with /i/ in front of it, and then a second consonant. You can see in their name, <i>màm</i>, it follows this; an English name like <i>Juliet</i> would become <i>jùt</i>. So, pick a name! (The asterisks will be where you should put your name).'],
                        [['*, kemo xópa<span class="cemoti">:)</span>','*** , sound-(v.) pleasure-(adj.)','***... sounds nice'],'',''],
                        [['vu vè zze?<span class="cemoti">;o</span>','v:you v:here z:because?','Why are you here?'],'ze va neko vano zaz',
                            'Ooo, they said your name sounds lovely! Now, they\'ve asked a question... <span class="z">vu</span> means "you," remember, and <span class="z">vè</span> is the pronoun for "here," and then they\'ve used a Meta you were introduced to in the previous level. màm is asking why you are here, and you shall tell them it\'s because you want to <span class="z">vano</span> zaz. <span class="z">van</span> means <span class="t">information</span>, so you can imagine what its verb form is :) (to learn). To say you want something, you use the verb form of "desire:" <span class="z">nek.</span> Go ahead and reply!'],
                        [['nnn, vu vanò xopa<span class="cemoti">:D</span>','o:nnn , v:you information-(pv.) goodness-(adj.)','Ahhh... you have learnt well'],'zà',
                            'That\'s nice - they\'ve said you have learnt well. Say thank you with the Meta <span class="z">zà</span> :)'],
                        [['vu nneko iìpád?<span class="cemoti">;O</span>','v:you desire?-(v.) (ofl.)-(d.)-home','You wanna come to my place?'],'zà zù',
                            'Oh... goodness, they\'re asking if you want to go back to their place. <span class="z">pád</span> means <span class="t">home</span>, and they\'ve used an Article you\'ve not been introduced to: the destination <span class="g">(d.)</span> Article. When placed on a word, all other words are understood to be moving towards it, which is the opposite of the source <span class="g">(s.)</span> Article, where other things come from it. In any case, we\'re going to have to decline, politely... <span class="z">zù</span> means <span class="t">no</span> (when the question is posed in the positive). So... reply...'],
                        [['<span class="cemoti">¬¬</span>','',''],'','']
];




//Quizzes
qInfantArticles =   [ //question(/answers), correct answer
                        ['What is the vowel in zaz for the English article "the"?<span class="z">a</span>;<span class="z">o</span>;<span class="z">e</span>;<span class="z">u</span>;<span class="z">i</span>;<span class="z">q</span>',3],
                        ['Which one of these translates as "A world"?<span class="z">alam</span>;<span class="z">olam</span>;<span class="z">ulam</span>',0],
                        ['<span class="z">úlam</span> means?some adults;all worlds;some worlds',1],
                        ['<span class="z">únuf</span> means?all adults;worlds;some adults',0],
                        ['<span class="z">ó</span> is appended to the start of a word to mean "some" of the word?Yes;No',0],
                        ['How do you say "some worlds"?','z:ólam']
                    ];

qInfantModifiers =  [
                        ['The Modifier <span class="z">a</span> makes the word an Adjective?Yes;No, it makes it a verb',0],
                        ['Which Modifier makes a Root a <i>being</i>?-o;-e;-a;-u',1],
                        ['Which tense is the verb <span class="z">vató</span> in?past;present;future',2],
                        ['Is the Modifier <span class="z">-ò</span> a past tense verb or a present tense being?past tense verb;present tense being',0],
                        ['What is the adjective form of <span class="z">lam</span>, in English?',"e:global"],
                        ['As <span class="z">vam</span> is <span class="t">book</span>, and <span class="z">van</span> is <span class="t">information</span>, this sentence:<br><span class="z">avam vane</span><br>is what, in English?',"e:a book is information"],
                        ['Bonus question! If <span class="z">vat</span> means <span class="t">discussion</span>, what do you believe <span class="z">vato</span> may mean?<span class="t">to argue</span>;<span class="t">to teach</span>;<span class="t">to discuss</span>',2]
                    ];

qBeginnerPronouns = [
                        ['zaz\'s <span class="z">va</span> means <span class="t">you</span>?true;false',1],
                        ['In the sentence <span class="z">va newo qlam.</span> who likes worlds?you do;it does;I do',2],
                        ['What is "<span class="t">that/it/this</span>" in zaz?','z:vo'],
                        ['How does the Article <span class="z">q</span> change a pronoun?it makes it possessive;it makes it plural;it makes it a verb',1],
                        ['In the sentence <span class="z">vu xabo va.</span> who loves who?I love you;you love me;he loves her;she loves him',1]
                    ];

qBeginnerMulti =    [
                        ['If "mod" means "Modifier," "root" means "Rootword," and "art" means "Article," which structure is correct?art-root-mod;root-art-mod;mod-root-art;root-art',0],
                        ['What is <span class="z">avam uvane</span> in English?a book is information;the book is information;the book was the information;a book is the information',3],
                        ['What is <span class="z">avam alame</span> in English?','e:a book is a world'],
                        ['How do you make a word plural in zaz?Add the -q Modifier;Add the q- Article',1],
                        ['In the sentence <span class="z">vu ivam</span>, who owns the book?you;it;him;me;them',0],
                        ['<span class="z">notò</span> is a what...?a verb (to eat) in the past tense;adjective (eaten);being in the future tense;verb (to see) in the future tense',0],
                        ['What is "I ate my book" in zaz?','z:va notò ivam'],
                        ['What character represents ' + aB(["q̀"],"this sound","white") + '?','z:q̀']
                    ];

