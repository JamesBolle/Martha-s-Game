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
        synonyms: ["kidnap", "capture", "seize", "snatch"],
        antonyms: ["release", "liberate"],
        firstLetter: "a"
    },
    {
        word: "absurd",
        definition: "Without any sense or reason",
        synonyms: ["ludicrous", "nonsensical", "preposterous"],
        antonyms: ["sensible", "logical", "rational"],
        firstLetter: "a"
    },
    {
        word: "abundance",
        definition: "A large quantity or amount of something",
        synonyms: ["wealth", "mass", "profusion", "bounty"],
        antonyms: ["shortage", "scarcity", "deficiency"],
        firstLetter: "a"
    },
    {
        word: "accompany",
        definition: "To go somewhere wth someone",
        synonyms: ["usher", "chaperone", "escort"],
        antonyms: [],
        firstLetter: "a"
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

    // Always show the first letter and word length as the first clue
    if (currentClueIndex === 0) {
        const firstLetter = word.word.charAt(0).toUpperCase();
        const hiddenWord = firstLetter + " " + "_ ".repeat(word.word.length - 1);
        clueText += `First Letter and Length: ${hiddenWord}\n`;
    }

    // Always show the definition as the second clue
    if (currentClueIndex === 0 || currentClueIndex === 1) {
        clueText += `Definition: ${word.definition}\n`;
    } else {
        // If not the first or second clue, randomly select either synonyms or antonyms
        const remainingClueTypes = currentClueIndex === 2 ? ["synonyms", "antonyms"] : ["antonyms", "synonyms"];
        const selectedClueType = remainingClueTypes[Math.floor(Math.random() * remainingClueTypes.length)];

        if (selectedClueType === "synonyms") {
            clueText += `Synonyms: ${word.synonyms.join(", ")}\n`;
        } else {
            clueText += `Antonyms: ${word.antonyms.join(", ")}\n`;
        }
    }

    // If this is the last clue, display it as the hidden word
    if (currentClueIndex === 3) {
        const firstLetter = word.word.charAt(0).toUpperCase();
        clueText = `${firstLetter} ${"_ ".repeat(word.word.length - 1)}`;
    }

    document.getElementById('clue').innerText = `Clue: ${clueText}`;
}

function checkGuess() {
    const guess = document.getElementById('guessInput').value.trim().toLowerCase();
    const word = words[currentWordIndex].word;

    if (guess === word) {
        const wordObj = words[currentWordIndex];
        const cluesToShow = [
            `Word: ${wordObj.word}`,
            `Definition: ${wordObj.definition}`,
            `Synonyms: ${wordObj.synonyms.join(", ")}`,
            `Antonyms: ${wordObj.antonyms.join(", ")}`,
            `(Starts with: ${wordObj.firstLetter.toUpperCase()})`
        ];
        document.getElementById('result').innerText = "Correct! Well done!\n" + cluesToShow.join("\n");
        document.getElementById('nextWord').style.display = 'block';
        document.getElementById('submitGuess').disabled = true;
    } else {
        currentClueIndex++;
        if (currentClueIndex >= 4) {
            const wordObj = words[currentWordIndex];
            const cluesToShow = [
                `Word: ${wordObj.word}`,
                `Definition: ${wordObj.definition}`,
                `Synonyms: ${wordObj.synonyms.join(", ")}`,
                `Antonyms: ${wordObj.antonyms.join(", ")}`,
                `(Starts with: ${wordObj.firstLetter.toUpperCase()})`
            ];
            document.getElementById('result').innerText = `Out of clues! The word was "${word}".\n` + cluesToShow.join("\n");
            document.getElementById('nextWord').style.display = 'block';
            document.getElementById('submitGuess').disabled = true;
        } else {
            showClue();
        }
    }
}

function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    currentClueIndex = 0;
    document.getElementById('result').innerText = '';
    document.getElementById('nextWord').style.display = 'none';
    document.getElementById('submitGuess').disabled = false;
    document.getElementById('guessInput').value = '';
    showClue();
}

document.getElementById('submitGuess').addEventListener('click', checkGuess);
document.getElementById('nextWord').addEventListener('click', nextWord);

// Start the game with the first clue
showClue();
