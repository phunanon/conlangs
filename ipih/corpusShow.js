var text = `
1. The sun shines. The sun is shining.
sun sun-verb

2. The sun shone.
sun sun-past

3. The sun will shine.
sun sun-will

4. The sun has been shining.
sun sun-past

5. The sun is shining again.
sun sun-verb new

6. The sun will shine tomorrow.
sun sun-will tomorrow

7. The sun shines brightly.
sun sun-verb fire-adj

8. The bright sun shines.
fire-adj sun sun-verb

9. The sun is rising now.
sun up-verb now

10. All the people shouted.
person all noise-past

11. Some of the people shouted.
person partial-adj noise-past

12. Many of the people shouted twice.
person all-adj noise-past 002

13. Happy people often shout.
person positive-adj noise-verb sometimes

14. The kitten jumped up.
animal up-past

15. The kitten jumped down.
animal down-past

16. The kitten jumped onto the table.
animal up-past

17. My little kitten walked away.
me water-adj animal there-verb

18. It's raining.
rain-verb

19. The rain came down.
rain down-past

20. The kitten is playing in the rain.
animal happiness-verb within rain

21. The rain has stopped.
rain stop-verb

22. Soon the rain will stop.
rain stop-verb time-adj

23. I hope the rain stops soon.
I desire-verb rain stop-verb time-adj

24. Once wild animals lived here.
animal life-adj life-past here

25. Slowly she looked around.
she eye-verb here-adj

26. Go away!
you there-verb

27. Let's go!
we_inclusive there-verb

28. You should go.
you there-verb if_then-adj

29. I will be happy to go.
I happiness-be there-verb

30. He will arrive soon.
he here-will time-adj

31. The baby's ball has rolled away.
child circle-of there-past

32. The two boys are working together.
child 002 work-verb unison-adj

33. This mist will probably clear away.
this rain light-adj there-verb ease-adj

34. Lovely flowers are growing everywhere.
plant happiness-adj plant-verb everywhere

35. We should eat more slowly.
we_inclusive mouth-verb start-adj if_then-adj

36. You have come too soon.
you here-verb time-adj tall-adj

37. You must write more neatly.
you hand-verb good-adj adult-adj if_then-adj

38. Directly opposite stands a wonderful palace.
there opposite building-be happiness-adj

39. Henry's dog is lost.
ehe-prop animal unknown_location-adj

40. My cat is black.
me animal 000

41. The little girl's doll is broken.
child female toy-of destroy-adj

42. I usually sleep soundly.
me night normality normality-adj

43. The children ran after Jack.
child leg-past speed-adj awa-prop unison-adj

44. I can play after school.
I toy-will positive-adj afterwards education

45. We went to the village for a visit.
we_exclusive here-past village for visit

46. We arrived at the river.
we_exclusive here-past river

47. I have been waiting for you.
I later-past for you

48. The campers sat around the fire.
person nature calm-verb here-adj fire

49. A little girl with a kitten sat near me.
child female and animal calm-verb here-adj me

50. The child waited at the door for her father.
child door later-past for adult actor

51. Yesterday the oldest girl in the village lost her kitten.
child female village old-adj level-adj unknown_location-past animal actor yesterday

52. Were you born in this village?
you birth-past question within this village

53. Can your brother dance well?
you family male happiness-verb good-adj question

54. Did the man leave?
male there-past question

55. Is your sister coming for you?
you family female here-will for you

56. Can you come tomorrow?
you here-will positive-adj tomorrow

57. Have the neighbors gone away for the winter?
neighbour there-past question for winter

58. Does the robin sing in the rain?
animal music-verb question within rain

59. Are you going with us to the concert?
you question with we_exclusive there-verb music

60. Have you ever travelled in the jungle?
you travel-past within nature before question

61. We sailed down the river for several miles.
we_exclusive travel-past river south metre earth-adj nothing-adj

62. Everybody knows about hunting.
person all neighbour-verb animal-verb

63. On a Sunny morning after the solstice we started for the mountains.
special-adj sun summer earlier-adj afterwards we_exclusive travel-past earth tall-adj

64. Tom laughed at the monkey's tricks.
oto-prop child-past animal chaos

65. An old man with a walking stick stood beside the fence.
male old with wood leg calm-past opposite-adj fence

66. The squirrel's nest was hidden by drooping boughs.
animal nest-of night-past by nest-adj tree

67. The little seeds waited patiently under the snow for the warm spring sun.
water-adj plant new later-past down-adj positive-adj snow for spring sun sun-adj

68. Many little girls with wreaths of flowers on their heads danced around the bonfire.
water-adj child female all-adj with up-adj collection plant head music-past here-adj fire

206. She has more friends than enemies.
she adult-adj friend compare_to enemy

207. He was very poor, and with his wife and five children lived in a little low cabin of logs and stones.
he state-past north-adj earth-adj also actor soft_and female soft_and child 005 life-past building water-adj tree rock
`;

var en = text.match(new RegExp(/\n\d.+/, 'g'));
var tr = text.replace( /(\d)?.+/g,
  function ($0, $1) { return ($1 ? '' : $0) }
).replace(new RegExp('\n\n', 'g'), '').split('\n');

for (t in tr) {
    if (!tr[t].length) { tr.splice(t, 1); }
}

var processed = '';

for (e in en) {
    if (tr[e] == undefined) { break; }
    var x = tr[e];
    var i = tranToIpih(x);
    var ipa = ipihToIPA(i);
    processed += '*'+ en[e].trim() +'*  \n'+
        tr[e].trim() +'  \n***'+
        i +'***  \n/'+
        ipa +'/  \n/'+
        toCompactIPA(ipa) +'/\n\n';
}

document.body.innerHTML = '<pre>'+ processed +'</pre>';
