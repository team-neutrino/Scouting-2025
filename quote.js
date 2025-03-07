const quotes = {
 "Mikayla and Dr. Steward": ["I am not good with words; Get better", ""],
"Mick W": ["If you need a hype man, you'll never be successful.", "Why does the field look like the French flag?", ""],
"Cale W": ["I don’t know how to use my fingernails!", "What is your favorite KT-extinction animal?", "If I were in the Tour de France it wouldn’t be called the Tour de France it would be called the tour of eat my dust", "My hair smells like panda express", "It was a good thing the Baltimore Bridge collapsed", "My wife went out :(", "The F in John F. Kennedy stands for fortnight. John Fortnight Kennedy!", "Hogwarts is the illuminati of the wizarding world.", ""],
"Vienna R": ["Don’t judge us, it wasn’t a group decision. ", "That's so crescendo", ""],
"Morgan D": ["Youre like an onion, but in the shrek kind of way.", "Of all the places to lick me, why my shoulder?", "I should really start paying more attention to the amount of loctite I'm consuming", "If I'm Dean Kamin, I think I'm allowed to be sassy", ""],
"Sarah Y": ["I wish someone would quote meeeee!", "High School is fun except for the school part ", "Kanye was right!", "We are a group. We rise together, we fall together. And I’m the only one falling right now!", ""],
"Micah S": ["Every time you’re using spacers you’re wasting time. (2nd in a series)", "Tap Magic is the magic the Hole Wizard uses", "We don’t need no Becky round here (in a western accent)", "I’m gonna quit the team if we win spirit award", "Corners don't exist", "Ya we slayyeddd", "I'm awake to the real world. My eyes have been opened. And my head hurts", ""],
"Mr. Hascall": ["3 trolls movies is 4 too many", "*Imitating Shreya* My eyes are more important that yours, chetas", "People have names Anton", ""],
"Jackson D": ["Don't worry I'll be your mother!", "I've dipped my toes in Taylor Swift!", "Henry Kellen is soooo hot", "(Asking Lyra about Abby) Is that your MOM?!", ""],
"Michael H": ["Thanks for talking about my body", "Why do you keep trying to get me to go on a date with you [Adam]? He’s asked me on a date two times already! He’s staring longingly at me! ", "I got a victory royale, right kids? Poggers.", ""],
"Meabh H": ["*Adam drops goldfish* Is it smiling back?", ""],
"Grace C": ["(whispered) Stop it, you're weird", "I don’t know the national anthem. Is that the one that starts with ‘We the People’?", ""],
"Anika S": ["You kind of remind me of Batman's butler, Albert", "I like the womb thing.", ""],
"Owen M": ["I know a bit about leadership, I'm the drop leader for my Fortnite squad.", "You're not an oxymoron, you're just a regular moron", "The day that Costco raises the price of rotisserie chicken is the day I will rebel against the government ", ""],
"Chloe L": ["Women in STEM! Plus Andrew !", ""],
"Becky M": ["Toxicity!!!!! We love it.", "I forgot that wrenches were two-sided", "Leave your shirts on please", "Could we just get rid of team neutrino as a whole?", "The instructions were telling me things that I didn’t want to do", "Mikayla, that why you don’t hammer your fingers! You go deaf!", "Elijah! You can't take a sledgehammer to a small person!", "You can slap people with this", ""],
"Elijah S": ["They should start flavoring tools", "I got pulled over and shot at by the police while wearing the neutrino logo!", ""],
"Chetas A": ["Don't quote me on that!", "Accept my pull request or I will murder you!", "Smart enough to design a robot, not smart enough to assemble it", ""],
"Laura W": ["You look like a tree!", ""],
"Anton L": ["There’s the big half inch and the small half inch", "I found multiple dead bunnies in my hose", "We do not like success here on Team Neutrino.", "Saudi Arabia is shaped like a rhinocerotops", "Matthias should become our mascot", "2306 is the opposite of empty ", ""],
"Matthias R": ["It’s the mamba mentality", "My ideal posture is that of a croissant ", ""],
"Sun Tzu": ["Know thy self, know thy enemy. A thousand battles, a thousand victories.", "If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.", ""],
"Dr. Steward": ["Why does everybody talk about how much they are going to miss Micheal Holm when he graduates, and nobody is saying how much they will miss me when Dr. Steward dies?", "“We all have issues.", "Battle bots is the pro wrestling of robots", "I can be micah. *mimicks* you can’t do that!!", ""],
"Logan M": ["I'd rather eat some bedazzled trash than normal trash y'know what I'm saying", "Bada bing bada boom hammer and sickle ", "Hotdog is the species, the sandwich is the genus", "Maddie could be a pterodactyl right now and I could be the only one to not see it ", ""],
"Andrew G": ["Hey Dagney, we just dominated all these children. Good job :D", "It's more interesting when everything's broken", "That's a massive apple, you'll never need to see a doctor again.", "Adam isn't real, Adam is a ghost ", ""],
"Leslie K": ["Don't fear! We're not broke... I think", "Now I can touch Andrew’s keyboard with my grimy, greasy hands!", "I’m not feeling Gucci I’m more like Versace ", "Have you ever seen stupidity evolve? Darwinism is going the wrong way. ", "I dont want to look like I've committed a murder!", "Magic the Gathering— is that a teenage experience that everyone should have like parties and drugs?", ""],
"Henry K": ["I have a playlist dedicated to the moon", "You’ve got to take over my job of doing whatever Becky tells me to do. ", "That’s like if I found your arm on the ground and said ‘Hi Becky’", ""],
"Lyra H": ["When solid works is not behaving take it behind the barn and shoot it. ", "Don’t use babies as life preservers", "I’m gonna create child sized armor… toddler fight club", ""],
"Sherry W": ["Children are objects", "Is that a slack logo? *points to a church*", "*says to micah* Im wearing a neutrino hoodie Im more holy than you!", ""],
"Josiah S": ["Im gonna leave that to a self-proclaimed smart person", ""],
"Matthew H": ["There are 171,716 something words in the English dictionary but none of them describe how much I wish to bellyflop on a bed of nails.", ""],
"Shreya S": ["“let me cook”", "Oh my god its only six!!!", "I'm always Hitler", "Safety glasses hurt my eyes", ""],
"Aneesh S": ["The real lasagna is the friends we made along the way.", ""],
"Andrew + John": ["Andrew: Do we have gravity?   John: Yes, we will be doing the climb on Earth. ", ""],
"Lovie + Mick": ["Lovie: I got an email that I ran out of print credits. ... Mick: Yeah. You have like 5.", ""],
"Moriah Z": ["You are just sooo punchable!", ""],
"FDR": ["When you reach the end of your rope, tie a knot in it and hang on.", "The only thing we have to fear is fear itself.", ""],
"Bill Clinton": ["Being president is like running a cemetery: you’ve got a lot of people under you and nobody’s listening.", ""],
"Herbert Hoover": ["Blessed are the young, for they will inherit the national debt.", ""],
"Carrie Fisher": ["Instant gratification takes too long.", ""],
"Ellen DeGeneres": ["Accept who you are. Unless you’re a serial killer.", ""],
"Will Ferrell": ["Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.", ""],
"Oscar Wilde": ["The man who says his wife can’t take a joke, forgets that she took him.", "Always forgive your enemies; nothing annoys them so much.", ""],
"Emperor Hirohito of Japan": ["The fruits of victory are tumbling into our mouths too quickly.", ""],
"Napoleon Bonaparte": ["Never interrupt your enemy when he is making a mistake. *its also gracious professionlisim*", ""],
"No one ever": ["PID is easy. I wrote it last night.", ""],
"Milton Friedman": ["Nothing is so permanent as a temporary government program", "Nothing is as permanent as a temporary solution that works *random reditor: I’m pretty sure the entire country of Belgium was built on that principle*", ""],
"Nelson Mandela": ["It always seems impossible until it's done.", ""],
"Anonymous": ["The tassel was worth the hassle.", ""],
"Mark Twain": ["The two most important days in your life are the day you are born, and the day you find out why.", ""],
"Kevin Hart": ["I gotta stop saying how stupid could you be? I'm beginning to feel like people are taking as a challenge", ""],
"MLK": ["I have a dream...", ""],
"Abraham Lincoln": ["Four score and seven years ago our fathers brought forth, upon this continent, a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.", ""],
"JFK": ["Forgive your enemies, but never forget their names.", ""],
"Anonomys ": ["Get going. Move forward. Aim High. Plan a takeoff. Don't just sit on the runway and hope someone will come along and push the airplane. It simply won't happen. Change your attitude and gain some altitude. Believe me, you'll love it up here.", ""],
"Barack Obama": ["Why can't I just eat my waffle?", ""],
"Ronald Reagan": ["Status quo, you know, is Latin for 'the mess we're in'.", ""],
"Joe Montana": ["Winners, I am convinced, imagine their dreams first. They want it with all their heart and expect it to come true. There is, I believe, no other way to live.", ""],
"George W. Bush": ["I know the human being and fish can coexist peacefully", ""],
"Maddie L": ["GET IN THE BANANA!", "Pull me around like one of your French girls, Morgan", "The date of today is yesterday and the date of yesterday is today", ""],
"The guy who offered Leslie a beer": ["You guys are way smarter than me", ""],
"Maddie and Anton ": ["Today has been a day; I have a day most days", ""],
"Swaran P": ["*to Anirudh* My mom would adopt you", ""],
"Karthik Kanagasabapathy": ["Soft is not an insult. It is a blanket, and people like blankets. ", ""],
"Lovie R": ["Truckers do destroy toilets ", ""],
"Mr. Hascall ": ["Directions are what you follow when all else fails.", ""],
};

function getQuote() {
  let keyList = Object.keys(quotes);
  let amountOfKeys = keyList.length-1;
  let keyNumber = getRandomInt(0, amountOfKeys);
  let personQuoteList = quotes[keyList[keyNumber]];
  let quote = personQuoteList[getRandomInt(0, personQuoteList.length-1)];
  let wordCount = quote.split(' ').length-2;
  let quotePackage = [quote, "-" + keyList[keyNumber], ((0.45*wordCount))*1000];
  return quotePackage;
}
//0.005x^{2}+4
//((0.004*wordCount)^2+4)*1000, 
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}