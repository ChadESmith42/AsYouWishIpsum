//getPBQuotes() builds quoteList[] of quotes from The Princess Bride.
//The user submits a number of lines to generate as nbrLines from a number box.
//Using a for loop, pbOutput is concatenated with a new random quote during each iteration.
//A button even listener is used to call the function upon clicking btnSubmit.

function getPBQuotes() {
    //Create array of quotes
    var quoteList = [
        'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.',
        "We'll never survive. Nonsense. You're only saying that because no one ever has.",
        "You mock my pain. Life is pain, Highness. Anyone who says differently is selling something.",
        "Give us the gate key. I have no gate key. Fezzik, tear his arms off. Oh, you mean *this* gate key.",
        "Who are you? No one of consequence. I must know… Get used to disappointment. kay.",
        "HE DIDN'T FALL? INCONCEIVABLE. You keep using that word. I do not think it means what you think it means.",
        "First things first, to the death. No. To the pain. I don't think I'm quite familiar with that phrase. I'll explain and I'll use small words so that you'll be sure to understand, you warthog faced buffoon.",
        "That may be the first time in my life a man has dared insult me. It won't be the last. To the pain means the first thing you will lose will be your feet below the ankles. Then your hands at the wrists. Next your nose. And then my tongue I suppose, I killed you too quickly the last time. A mistake I don't mean to duplicate tonight.",
        "I wasn't finished. The next thing you will lose will be your left eye followed by your right. And then my ears, I understand let's get on with it. WRONG. Your ears you keep and I'll tell you why. So that every shriek of every child at seeing your hideousness will be yours to cherish. Every babe that weeps at your approach, every woman who cries out, 'Dear God! What is that thing,' will echo in your perfect ears. That is what 'to the pain means.' It means I leave you in anguish, wallowing in freakish misery forever.",
        "I think you're bluffing. It's possible, Pig, I might be bluffing. It's conceivable, you miserable, vomitous mass, that I'm only lying here because I lack the strength to stand. But, then again... perhaps I have the strength after all. DROP... YOUR... SWORD!",
        "All right. Where is the poison? The battle of wits has begun. It ends when you decide and we both drink, and find out who is right... and who is dead. ",
        "But it's so simple. All I have to do is divine from what I know of you: are you the sort of man who would put the poison into his own goblet or his enemy's? Now, a clever man would put the poison into his own goblet, because he would know that only a great fool would reach for what he was given. I am not a great fool, so I can clearly not choose the wine in front of you. But you must have known I was not a great fool, you would have counted on it, so I can clearly not choose the wine in front of me.",
        "You've made your decision then? Not remotely. Because iocane comes from Australia, as everyone knows, and Australia is entirely peopled with criminals, and criminals are used to having people not trust them, as you are not trusted by me, so I can clearly not choose the wine in front of you.",
        "Truly, you have a dizzying intellect. Wait till I get going! Now, where was I? Australia. Yes, Australia. And you must have suspected I would have known the powder's origin, so I can clearly not choose the wine in front of me.",
        "You're just stalling now. You'd like to think that, wouldn't you? You've beaten my giant, which means you're exceptionally strong, so you could've put the poison in your own goblet, trusting on your strength to save you, so I can clearly not choose the wine in front of you. But, you've also bested my Spaniard, which means you must have studied, and in studying you must have learned that man is mortal, so you would have put the poison as far from yourself as possible, so I can clearly not choose the wine in front of me.",
        "You're trying to trick me into giving away something. It won't work. IT HAS WORKED! YOU'VE GIVEN EVERYTHING AWAY! I KNOW WHERE THE POISON IS! Then make your choice.",
        "I will, and I choose... what in the world can that be? What? Where? I don't see anything. Well, I- I could have sworn I saw something. But no matter. What's so funny?",
        "I'll tell you in a minute. First, let's drink. Me from my glass, and you from yours. You guessed wrong.",
        "You only think I guessed wrong! That's what's so funny! I switched glasses when your back was turned! Ha ha! You fool! You fell victim to one of the classic blunders - the most famous of which is 'never get involved in a land war in Asia' - but only slightly less well-known is this: 'Never go in against a Sicilian when death is on the line'! Ha ha ha ha ha ha ha! Ha ha ha ha ha ha ha! Ha ha ha...",
        "And to think, all that time it was your cup that was poisoned. They were both poisoned. I spent the last few years building up an immunity to iocane powder.",
        "That Vizzini, he can *fuss*. Fuss, fuss... I think he like to scream at *us*.",
        "Probably he means no *harm*. He's really very short on *charm*.",
        "You have a great gift for rhyme. Yes, yes, some of the time.",
        "Enough of that. Fezzik, are there rocks ahead? If there are, we all be dead.",
        "No more rhymes now, I mean it. Anybody want a peanut? DYEEAAHHHHHH!",
        "Surrender. You mean you wish to surrender to me? Very well, I accept.",
        "But, I promise I will not kill you until you reach the top. That's VERY comforting, but I'm afraid you'll just have to wait. I hate waiting. I could give you my word as a Spaniard. No good. I've known too many Spaniards.",
        "Isn't there any way you trust me? Nothing comes to mind. I swear on the soul of my father, Domingo Montoya, you will reach the top alive. Throw me the rope.",
        "Is very strange. I have been in the revenge business so long, now that it's over, I don't know what to do with the rest of my life. Have you ever considered piracy? You'd make a wonderful Dread Pirate Roberts.",
        "Mawage. Mawage is wot bwings us togeder today. Mawage, that bwessed awangment, that dweam wifin a dweam…",
        "And wuv, tru wuv, will fowow you foweva…",
        "So tweasure your wuv. Skip to the end. Have you the wing?",
        "...and do you, Pwincess Buwwercup…  Man and wife. Say man and wife. Man an' wife.",
        "I can't compete with you physically, and you're no match for my brains. You're that smart? Let me put it this way. Have you ever heard of Plato, Aristotle, Socrates? Yes. Morons.",
        "You are wonderful. Thank you; I've worked hard to become so. I admit it, you are better than I am. Then why are you smiling? Because I know something you don't know. And what is that? I am not left-handed.",
        "You are amazing. I ought to be, after 20 years. Oh, there's something I ought to tell you. Tell me. I'm not left-handed either.",
        "Good night, Westley. Good work. Sleep well. I'll most likely kill you in the morning.",
        "Beat it or I'll call the Brute Squad. I'm on the Brute Squad. You ARE the Brute Squad!",
        "I donna suppose you could speed things up? If you're in such a hurry, you could lower a rope or a tree branch or find something useful to do. I could do that. I have some rope up here, but I do not think you would accept my help, since I am only waiting around to kill you. That does put a damper on our relationship.",
        "Have fun stormin' da castle. Think it'll work? It would take a miracle.",
        "Hear this now: I will always come for you. But how can you be sure? This is true love - you think this happens every day?",
        "I do not mean to pry, but you don't by any chance happen to have six fingers on your right hand? Do you always begin conversations this way?",
        "I've seen worse.",
        "We'll never succeed. We may as well die here. No, no. We have already succeeded. I mean, what are the three terrors of the Fire Swamp? One, the flame spurt - no problem. There's a popping sound preceding each; we can avoid that. Two, the lightning sand, which you were clever enough to discover what that looks like, so in the future we can avoid that too. Westley, what about the R.O.U.S.'s? Rodents Of Unusual Size? I don't think they exist.",
        "Hello, my name is Inigo Montoya. You killed my father. Prepare to die. Stop saying that! HELLO! MY NAME IS INIGO MONTOYA! YOU KILLED MY FATHER! PREPARE TO DIE! Offer me money. Yes! Power, too, promise me that. All that I have and more. Please… Offer me anything I ask for. Anything you want... I want my father back, you son of a bitch!",
        "You've done nothing but study swordplay? More pursue than study lately. You see, I cannot find him... it's been twenty years now and I'm starting to lose confidence. I just work for Vizzini to pay the bills. There's not a lot of money in revenge. Well I certainly hope you find him someday. You are ready then? Whether I am or not, you've been more than fair.",
        "You seem a decent fellow... I hate to kill you. You seem a decent fellow... I hate to die. Begin.",
        "Grandpa, maybe you could come over and read it again to me tomorrow. As you wish.",
        "He probably owes you money huh? I'll ask him. He's dead. He can't talk. Whoo-hoo-hoo, look who knows so much. It just so happens that your friend here is only MOSTLY dead. There's a big difference between mostly dead and all dead. Mostly dead is slightly alive. ",
        "With all dead, well, with all dead there's usually only one thing you can do. What's that? Go through his clothes and look for loose change.",
        "It's not that bad. Well, I'm not saying I'd like to build a summer home here, but the trees are actually quite lovely.",
        "You got any money? Sixty-five. I've never worked for so little. Except once, and that was a very noble cause.",
        "This is noble, sir. His wife is... crippled. His children are on the brink of starvation. Are you a rotten liar! I need him to help avenge my father, murdered these twenty years. Your first story was better.",
        "I told you I would always come for you. Why didn't you wait for me? Well... you were dead. Death cannot stop true love. All it can do is delay it for a while. I will never doubt again. There will never be a need.",
        "You rush a miracle man, you get rotten miracles.",
        "You are using Bonetti's Defense against me, ah? I thought it fitting considering the rocky terrain. Naturally, you must expect me to attack with Capo Ferro? Naturally, but I find that Thibault cancels out Capo Ferro. Don't you? Unless the enemy has studied his Agrippa... which I have!",
        "You're the Dread Pirate Roberts, admit it! With pride. What can I do for you? You can die slowly, cut into a thousand pieces. Tsk, tsk. That's hardly complimentary, Highness. Why loose your venom on me? You killed my love. It's possible. I kill a lot of people.",
        "It was ten days to the wedding. The King still lived, but Buttercup's nightmares were growing steadily worse. See, didn't I tell you she'd never marry that rotten Humperdinck? Yes, you're very smart. Shut up.",
        "Why won't my arms move? You've been mostly-dead all day.",
        "INCONCEIVABLE!",
        "I do not envy you the headache you will have when you awake. But for now, rest well and dream of large women.",
        "Who are you? Are we enemies? Why am I on this wall? Where is Buttercup? Let me explain. No, there is too much. Let me sum up. Buttercup is marry Humperdinck in little less than half an hour. So all we have to do is get in, break up the wedding, steal the princess, make our escape... after I kill Count Rugen.",
        "That doesn't leave much time for dilly-dallying. You just wiggled your finger. That's wonderful. I've always been a quick healer. What are our liabilities? There is but one working castle gate, and... and it is guarded by 60 men. And our assets? Your brains, Fezzik's strength, my steel.",
        "No one would surrender to the Dread Pirate Westley.",
        "A book? That's right. When I was your age, television was called books. And this is a special book. It was the book my father used to read to me when I was sick, and I used to read it to your father. And today I'm gonna read it to you.",
        "Has it got any sports in it? Are you kidding? Fencing, fighting, torture, revenge, giants, monsters, chases, escapes, true love, miracles…",
        "Doesn't sound too bad. I'll try to stay awake. Oh, well, thank you very much, very nice of you. Your vote of confidence is overwhelming.",
        "We face each other as God intended. Sportsmanlike. No tricks, no weapons, skill against skill alone. You mean, you'll put down your rock and I'll put down my sword, and we'll try and kill each other like civilized people? I could kill you now. Frankly, I think the odds are slightly in your favor at hand fighting. It's not my fault being the biggest and the strongest. I don't even exercise.",
        "Get back, witch. I'm not a witch, I'm your wife. But after what you just said, I'm not even sure I want to be that any more.",
        "Look, are you just fiddling around with me or what? I just want you to feel you're doing well.",
        "Why do you wear a mask? Were you burned by acid, or something like that? Oh no, it's just that they're terribly comfortable. I think everyone will be wearing them in the future.",
        "Do you hear that, Fezzik? That is the sound of ultimate suffering. My heart made that sound when Rugen slaughtered my father. The man in black makes it now. The man in black? His true love is marrying another tonight, so who else has the cause for ultimate suffering?",
        "We are men of action, lies do not become us.",
        "You're trying to kidnap what I've rightfully stolen.",
        "Are you the Miracle Max who worked for the king all those years? The King's stinking son fired me, and thank you so much for bringing up such a painful subject. While you're at it, why don't you give me a nice paper cut and pour lemon juice on it? We're closed.",
        "Finish him. Finish him, your way. Oh good, my way. Thank you Vizzini... what's my way? Pick up one of those rocks, get behind a boulder, in a few minutes the man in black will come running around the bend, the minute his head is in view, hit it with the rock. My way's not very sportsman-like.",
        "Can you move at all? Move? You're alive. If you want I can fly.",
        "Since the invention of the kiss, there have been five kisses rated the most passionate, the most pure. This one left them all behind. The end.",
        "You never said anything about killing anyone. I've hired you to help me start a war. It's an prestigious line of work, with a long and glorious tradition. I just don't think it's right, killing an innocent girl. Am I going MAD, or did the word 'think' escape your lips? You were not hired for your brains, you hippopotamic land mass. I agree with Fezzik. Oh, the sot has spoken. What happens to her is not truly your concern. I will kill her. And remember this, never forget this: when I found you, you were so slobbering drunk, you couldn't buy brandy! And YOU: friendless, brainless, helpless, hopeless! Do you want me to send you back to where you were? Unemployed, in Greenland?",
        "My father was slaughtered by a six-fingered man. He was a great swordmaker, my father. When the six-fingered man appeared and requested a special sword, my father took the job. He slaved a year before it was done. I've never seen its equal. ",
        "The six-fingered man returned and demanded it, but at one tenth his promised price. My father refused. Without a word, the six-fingered man slashed him through the heart. I loved my father. So naturally, I challenged his murderer to a duel. I failed. The six-fingered man left me alive, but he gave me these. ",
        "How old were you? I was eleven years old. And when I was strong enough, I dedicated my life to the study of fencing. So the next time we meet, I will not fail. I will go up to the six-fingered man and say, 'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.'",
        "Roberts had grown so rich, he wanted to retire. He took me to his cabin and he told me his secret. 'I am not the Dread Pirate Roberts' he said. 'My name is Ryan; I inherited the ship from the previous Dread Pirate Roberts, just as you will inherit it from me. The man I inherited it from is not the real Dread Pirate Roberts either. His name was Cummerbund. The real Roberts has been retired 15 years and living like a king in Patagonia.'",
        "What was that for? Because you've always been so kind to me, and I'll never see you again, because I'm killing myself as soon as we reach the honeymoon suite. Won't that be nice? She kissed me! Ha!",
        "You are sure nobody's followed us? As I told you, it would be absolutely, totally, and in all other ways inconceivable. No one in Guilder knows what we've done, and no one in Florin could have gotten here so fast. Out of curiosity, why do you ask? No reason. It's only... I just happened to look behind us and something is there. What? Probably some local fisherman, out for a pleasure cruise, at night... in... eel-infested waters...",
        "Sonny, true love is the greatest thing in the world - except for a nice MLT - mutton, lettuce, and tomato sandwich, where the mutton is nice and lean and the tomatoes are ripe",
        "You know, Fezzik, you finally did something right. Don't worry, I won't let it go to my head.",
        "But this is Buttercup's true love - If you heal him, he will stop Humperdinck's wedding. Wait. Wait. I make him better, Humperdinck suffers? Humiliations galore! HA-HA-HA! *That* is a noble cause. Give me the sixty-five, I'm on the job.",
        "Jump in after her! I don't swim. I only dog paddle. AGGHH!",
        "I challenge you to a battle of wits. For the Princess? To the death? I accept!",
        "Your princess is quite a winning creature. A trifle simple, perhaps. Her appeal is undeniable. I know, the people are quite taken with her. It's odd, but when I hired Vizzini to have her murdered on our engagement day, I thought that was clever. But it's going to be so much more moving when I strangle her on our wedding night. Once Guilder is blamed, the nation will truly be outraged - they'll demand we go to war.",
        "Ah. Are you coming down into the pit? Wesley's got his strength back. I'm starting him on the machine tonight. Tyrone, you know how much I love watching you work, but I've got my country's 500th anniversary to plan, my wedding to arrange, my wife to murder and Guilder to frame for it; I'm swamped. Get some rest. If you haven't got your health, then you haven't got anything.",
        "You can't hurt me. Westley and I are joined by the bonds of love. And you cannot track that, not with a thousand bloodhounds, and you cannot break it, not with a thousand swords. And when I say you are a coward it is only because you are one of the slimiest weaklings ever to walk the Earth!",
        "A word, my lady. We are but poor, lost circus performers. Is there a village nearby? There is nothing nearby... Not for miles. Then there will be no one to hear you scream.",
        "That was a warning, Highness. Next time my hand flies on its own. Where I come from, there are penalties when a woman lies.",
        "He's right on top of us. I wonder if he is using the same wind we are using.",
        "Hello there. Slow going? Look, I don't mean to be rude but this is not as easy as it looks, so I'd appreciate it if you wouldn't distract me. Sorry. Thank you.",
        "You must be that little Spanish brat I taught a lesson to all those years ago. You've been chasing me your whole life only to fail now? I think that's about the worst thing I've ever heard. How marvelous.",
        "I am waiting for you, Vizzini! You told me to go back to the beginning... so I have. his is where I am, this is where I'll stay. I will not be moved!",
        "Beautiful isn't it? It took me half a lifetime to invent it. I'm sure you've discovered my deep and abiding interest in pain. Presently I'm writing the definitive work on the subject, so I want you to be totally honest with me on how the machine makes you feel. This being our first try, I'll use the lowest setting.",
        "As you know, the concept of the suction pump is centuries old. Really that's all this is except that instead of sucking water, I'm sucking life. I've just sucked one year of your life away. I might one day go as high as five, but I really don't know what that would do to you. So, let's just start with what we have. What did this do to you? Tell me. And remember, this is for posterity so be honest. How do you feel?",
        "Where am I? The Pit of Despair! Don't even think… ... don't even think about trying to escape. The chains are far too thick. Don't dream of being rescued, either; the only way in is secret. Only the Prince, the Count, and I know how to get in and out.",
        "Westley didn't reach his destination. His ship was attacked by the Dread Pirate Roberts, who never left captives alive. When Buttercup got the news that Westley was murdered… Murdered by pirates is good…",
        "She is alive, or was an hour ago. If she is otherwise when I find her I shall be very put out.",
        "My men are here! I am here! But soon *you* will not be here!",
        "That's a miracle pill? The chocolate coating makes it go down easier. But you have to wait fifteen minutes for full potency. And you shouldn't go in swimming after, for at least, what? A half an hour.",
        "Please consider me as an alternative to suicide.",
        "Do you know what that sound is, Highness? Those are the shrieking eels! If you don't believe me, just wait. They always grow louder when they're about to feed on human flesh! If you swim back now I promise no harm will come to you... I doubt you'll get such an offer from the eels."
    ];
    //Create variable for user input
    var nbrLines = document.getElementById('nbrLines');
    //Create variable for output to be displayed
    var pbOutput = document.getElementById('pbOutput');
    pbOutput.innerHTML = "<h2>Begin! </h2> <br /> <br />";

    //For loop to iterate enough quotes to satisfy user request in nbrLines
    for (var i = 0; i < nbrLines.value; i++) {
        //Rather than hard-code the number of options within the quoteList, I used the length property
        //to get the maximum value for the random number selection for the index position. If more
        //quotes are added to the list or a database, this code should still work.
        pbOutput.innerHTML += quoteList[Math.floor(Math.random() * (quoteList.length))] + "&nbsp";
    }
};

var btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', function () {
    getPBQuotes();
});






