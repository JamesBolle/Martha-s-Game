// Shuffling function to randomize the order of words
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const words = [
    {
        word: "abduct",
        definition: "To take someone against their will using force or deception",
        synonyms: ["kidnap","capture","seize", "snatch"],
        antonyms: ["release","liberate"],
        firstLetter: "a"
    },
    {
        word: "absurd",
        definition: "Without any sense or reason",
        synonyms: ["ludicrous","nonsensical","preposterous"],
        antonyms: ["sensible","logical","rational"],
        firstLetter: "a"
    },
    {
        word: "abundance",
        definition: "A large quantity or amount of something",
        synonyms: ["wealth","mass","profusion","bounty"],
        antonyms: ["shortage","scarcity","deficiency"],
        firstLetter: "a"
    },
    {
        word: "accompany",
        definition: "To go somewhere wth someone",
        synonyms: ["usher","chaperone","escort"],
        antonyms: [],
        firstLetter: "a"
    },
    {
        word: "acquaint",
        definition: "To make yourself, or someone else, familiar with something",
        synonyms: ["familiarise","inform","enlighten"],
        antonyms: ["ignore","mislead"],
        firstLetter: "a"
    },
    {
        word: "adequate",
        definition: "Of acceptable quality or quantity",
        synonyms: ["satisfactory","sufficient","suitable"],
        antonyms: ["unsuitable","deficient","meagre"],
        firstLetter: "a"
    },
    {
        word: "adhere (to)",
        definition: "To act in accordance with something",
        synonyms: ["follow","observe","obey","heed"],
        antonyms: ["disobey","ignore","disregard"],
        firstLetter: "a"
    },
    {
        word: "adhere (to)",
        definition: "To stick or affix something",
        synonyms: ["fasten","attach","cling"],
        antonyms: ["there are no antonyms for this word"],
        firstLetter: "a"
    },
    {
        word: "adjacent",
        definition: "Positioned next to or nearby",
        synonyms: ["adjoining","neighbouring","bordering"],
        antonyms: ["remote","distant","detached"],
        firstLetter: "a"
    },
    {
        word: "adversary",
        definition: "A rival in a competition, dispute or combat",
        synonyms: ["opponent","foe","enemy","antagonist"],
        antonyms: ["ally","friend","supporter","teammate"],
        firstLetter: "a"
    },
    {
        word: "affinity",
        definition: "A natural affection or understanding",
        synonyms: ["penchant","proclivity","predilection"],
        antonyms: ["aversion","dislike"],
        firstLetter: "a"
    },
    {
        word: "affinity",
        definition: "A similarity to something else",
        synonyms: ["resemblance","likeness"],
        antonyms: ["difference","disparity"],
        firstLetter: "a"
    },
    {
        word: "allegation",
        definition: "A claim of wrongdoing, often without proof",
        synonyms: ["accusation","assertion","statement","charge"],
        antonyms: ["there are no antonyms for this word"],
        firstLetter: "a"
    },
    {
        word: "alluring",
        definition: "Attractive and enticing",
        synonyms: ["captivating","enchanting","tempting"],
        antonyms: ["repellent","repulsive"],
        firstLetter: "a"
    },
    {
        word: "aloof",
        definition: "Having a distant or detached personality",
        synonyms: ["reserved","cold","unfriendly","haughty"],
        antonyms: ["warm","sociable","friendly","amiable"],
        firstLetter: "a"
    },
    {
        word: "appease",
        definition: "To calm someone, usually by satisfying their demands",
        synonyms: ["soothe","pacify","allay","placate"],
        antonyms: ["provoke","frustrate","incite","rile"],
        firstLetter: "a"
    },
    {
        word: "appreciative",
        definition: "Feeling or expressing either gratitude or recognition for something",
        synonyms: ["thankful","grateful","responsive"],
        antonyms: ["thankless","ungrateful"],
        firstLetter: "a"
    },
    {
        word: "apprehensive",
        definition: "Tense or fearful that something bad might happen",
        synonyms: ["uneasy","afraid","anxious","concerned"],
        antonyms: ["confident","composed","assured","bold"],
        firstLetter: "a"
    },
    {
        word: "apprentice",
        definition: "A person who is working for a trained professional in order to learn their skills",
        synonyms: ["trainee","student"],
        antonyms: ["master","expert","teacher"],
        firstLetter: "a"
    },
    {
        word: "apt",
        definition: "Appropriate in a given circumstance",
        synonyms: ["suitable","relevant","fitting","pertinent"],
        antonyms: ["improper","unsuitable","unfit"],
        firstLetter: "a"
    },
    {
        word: "apt",
        definition: "Able to learn or understand things quickly",
        synonyms: ["competent","clever","bright","sharp","astute"],
        antonyms: ["incapable","unskilled","inept"],
        firstLetter: "a"
    },
    {
        word: "aptitude",
        definition: "A natural talent or ability to do something well",
        synonyms: ["gift","flair","knack","proficiency"],
        antonyms: ["ineptitude","incompetence","shortcomings"],
        firstLetter: "a"
    },
    {
        word: "architecture",
        definition: "The planning and construction of buildings",
        synonyms: ["design"],
        antonyms: ["there are no antonyms for this word"],
        firstLetter: "a"
    },
    {
        word: "architecture",
        definition: "The style in which a building is designed",
        synonyms: ["there are no synonyms for this word. Here is an example sentence instead: The city's a___________ seems to have Greek influences"],
        antonyms: ["there are no antonyms for this word either"],
        firstLetter: "a"
    },
    {
        word: "arduous",
        definition: "Difficult or demanding a lot of effort",
        synonyms: ["exhausting","taxing","laborious","gruelling"],
        antonyms: ["effortless","unchallenging"],
        firstLetter: "a"
    },
    {
        word: "artefact",
        definition: "A man-made object of cultural or historical interest",
        synonyms: ["relic","antique"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Martha delivered the priceless a_______ to the museum"],
        firstLetter: "a"
    },
    {
        word: "assiduous",
        definition: "Hard-working and thorough",
        synonyms: ["diligent","attentive","studious","industrious"],
        antonyms: ["careless","idle","negligent"],
        firstLetter: "a"
    },
    {
        word: "assortment",
        definition: "A group of things or people that are similar but have some recognisable differences",
        synonyms: ["variety","mixture","selection","medley","array"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: We ate an a_________ of cheeses for supper"],
        firstLetter: "a"
    },
    {
        word: "asunder",
        definition: "Into pieces, usually by force",
        synonyms: ["apart"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: When Papa married us, he said 'What God has joined together, let no man tear a______'"],
        firstLetter: "a"
    },
    {
        word: "audacity",
        definition: "Disrespectful behaviour",
        synonyms: ["impertinence","gall","nerve","shamelessness"],
        antonyms: ["respect","politeness"],
        firstLetter: "a"
    },
    {
        word: "audacity",
        definition: "A willingness to take daring risks",
        synonyms: ["courage","nerve","dauntlessness"],
        antonyms: ["fear","timidity","cowardice"],
        firstLetter: "a"
    },
    {
        word: "audition",
        definition: "A trial performance used to assess how suitable someone is for a role, e.g., in a play OR to take part in a trial performance",
        synonyms: ["trial","try out"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Gary had an a_______ today and was offered the part in the play"],
        firstLetter: "a"
    },
    {
        word: "barren",
        definition: "Having a dry and bare landscape that is unable to support life",
        synonyms: ["desolate","arid"],
        antonyms: ["fertile","lush"],
        firstLetter: "b"
    },
    {
        word: "bemoan",
        definition: "To express regret, sorrow or dissatisfaction about something",
        synonyms: ["lament","mourn","complain about","denounce"],
        antonyms: ["celebrate","rejoice","praise"],
        firstLetter: "b"
    },
    {
        word: "brusque",
        definition: "Rudely abrupt in speech or behaviour",
        synonyms: ["curt","blunt","short","sharp","terse"],
        antonyms: ["cordial","genial","affable","amiable"],
        firstLetter: "b"
    },
    {
        word: "campaign",
        definition: "A course of action or activities organised with the aim of achieving a specific goal",
        synonyms: ["effort","drive","operation","movement"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Rishi Sunak's election c_______ got off to a poor start"],
        firstLetter: "c"
    },
    {
        word: "catastrophe",
        definition: "A sudden event causing destruction and suffering",
        synonyms: ["disaster","crisis","calamity","tragedy"],
        antonyms: ["miracle","success"],
        firstLetter: "c"
    },
    {
        word: "citizen",
        definition: "A legal resident of a country, town or city OR a person who lives in a specific place",
        synonyms: ["native","resident","national"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Every c______ of the UK should vote in the elections"],
        firstLetter: "c"
    },
    {
        word: "collide",
        definition: "To crash into something while moving",
        synonyms: ["hit","impact","bump into"],
        antonyms: ["miss"],
        firstLetter: "c"
    },
    {
        word: "collide",
        definition: "To disagree or come into conflict with",
        synonyms: ["clash","differ","oppose"],
        antonyms: ["harmonise","correspond"],
        firstLetter: "c"
    },
    {
        word: "committee",
        definition: "A group of people who represent a larger organisation or group and make decisions for them",
        synonyms: ["panel","commision","council","board"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: The c________ met to decide the new timetable"],
        firstLetter: "c"
    },
    {
        word: "complemented",
        definition: "Combined in a way that positively highlights the different qualities of each thing",
        synonyms: ["enhanced","improved","heightened","boosted"],
        antonyms: ["contrasted","clashed with"],
        firstLetter: "c"
    },
    {
        word: "compliment",
        definition: "A remark showing admiration or appreciation OR to praise or congratulate someone",
        synonyms: ["praise (noun)","flattery (noun)","flatter (verb)","laud (verb"],
        antonyms: ["reproach (noun)","criticism (noun)","complaint (noun)","insult (verb)","criticise (verb)"],
        firstLetter: "c"
    },
    {
        word: "component",
        definition: "An individual part of something larger",
        synonyms: ["element","piece","unit"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Dr Who screwed the final c________ of his time machine into place"],
        firstLetter: "c"
    },
    {
        word: "component",
        definition: "Forming part of something larger",
        synonyms: ["constituent"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Our fridge is made up of over 500 c__________ parts"],
        firstLetter: "c"
    },
    {
        word: "composed",
        definition: "Calm and in control of one's feelings",
        synonyms: ["relaxed","collected","serene","poised"],
        antonyms: ["agitated","uneasy","flustered"],
        firstLetter: "c"
    },
    {
        word: "composed",
        definition: "wrote or created something, e.g., a song, a piece of art or an email",
        synonyms: ["devised","crafted","penned"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Mozart c_______ many masterpieces in his life"],
        firstLetter: "c"
    },
    {
        word: "comrade",
        definition: "A friend or associate in an organisation, e.g., the armed forces. (Daddy says: This word is closely associated with the Communist Party and other left-wing political groups)",
        synonyms: ["ally","companion","colleague"],
        antonyms: ["rival","enemy","foe","adversary"],
        firstLetter: "c"
    },
    {
        word: "confer",
        definition: "To exchange opinions or ideas in order to make a decision",
        synonyms: ["discuss","consult","deliberate"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Darrell decided to c_____ with her team mates before giving an answer at the quiz"],
        firstLetter: "c"
    },
    {
        word: "confer",
        definition: "To give an official title, honour or power",
        synonyms: ["award","grant","bestow"],
        antonyms: ["withhold","refuse","deny"],
        firstLetter: "c"
    },
    // Add more words here
];


// Randomize the order of words
const shuffledWords = shuffle(words);

let currentWordIndex = 0;
let currentClueIndex = 0;

function showClue() {
    const word = shuffledWords[currentWordIndex];
    let clueText = "";
    let hiddenWord = "";

    if (currentClueIndex === 0) {
        clueText = `Definition: ${word.definition}`;
        hiddenWord = word.word.charAt(0).toUpperCase() + " " + "_ ".repeat(word.word.length - 1);
    } else if (currentClueIndex === 1) {
        clueText = `Synonyms: ${word.synonyms.join(", ")}`;
        hiddenWord = word.word.charAt(0).toUpperCase() + " " + "_ ".repeat(word.word.length - 1);
    } else if (currentClueIndex === 2) {
        clueText = `Antonyms: ${word.antonyms.join(", ")}`;
        hiddenWord = word.word.charAt(0).toUpperCase() + " " + "_ ".repeat(word.word.length - 1);
    } else {
        clueText = `Definition: ${word.definition}<br>Synonyms: ${word.synonyms.join(", ")}<br>Antonyms: ${word.antonyms.join(", ")}`;
        hiddenWord = word.word.charAt(0).toUpperCase() + word.word.charAt(1).toUpperCase() + " " + "_ ".repeat(word.word.length - 2);
        for (let i = 2; i < currentClueIndex; i++) {
            hiddenWord += `${word.word.charAt(i).toUpperCase()} `;
        }
        hiddenWord += "_ ".repeat(word.word.length - currentClueIndex);
    }

    document.getElementById('clue').innerHTML = `${clueText}<br>Clue: ${hiddenWord}`;
}

function checkGuess() {
    const guess = document.getElementById('guessInput').value.trim().toLowerCase();
    const word = shuffledWords[currentWordIndex].word;

    if (guess === word) {
        const wordObj = shuffledWords[currentWordIndex];
        const cluesToShow = [
            `Word: ${wordObj.word}`,
            `Definition: ${wordObj.definition}`,
            `Synonyms: ${wordObj.synonyms.join(", ")}`,
            `Antonyms: ${wordObj.antonyms.join(", ")}`,
            `(Starts with: ${wordObj.firstLetter.toUpperCase()})`
        ];
        document.getElementById('result').innerHTML = "Correct! Well done!<br>" + cluesToShow.join("<br>");
        document.getElementById('nextWord').style.display = 'block';
        document.getElementById('submitGuess').disabled = true;
    } else {
        currentClueIndex++;
        if (currentClueIndex >= (shuffledWords[currentWordIndex].word.length + 2)) {
            const wordObj = shuffledWords[currentWordIndex];
            const cluesToShow = [
                `Word: ${wordObj.word}`,
                `Definition: ${wordObj.definition}`,
                `Synonyms: ${wordObj.synonyms.join(", ")}`,
                `Antonyms: ${wordObj.antonyms.join(", ")}`,
                `(Starts with: ${wordObj.firstLetter.toUpperCase()})`
            ];
            document.getElementById('result').innerHTML = `Out of clues! The word was "${word}".<br>` + cluesToShow.join("<br>");
            document.getElementById('nextWord').style.display = 'block';
            document.getElementById('submitGuess').disabled = true;
        } else {
            showClue();
        }
    }
}

function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % shuffledWords.length;
    currentClueIndex = 0;
    document.getElementById('result').innerHTML = '';
    document.getElementById('nextWord').style.display = 'none';
    document.getElementById('submitGuess').disabled = false;
    document.getElementById('guessInput').value = '';
    showClue();
}

document.getElementById('submitGuess').addEventListener('click', checkGuess);
document.getElementById('nextWord').addEventListener('click', nextWord);

// Start the game with the first clue
showClue();
