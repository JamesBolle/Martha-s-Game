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
    // Add more words here
];


// Randomize the order of words
const shuffledWords = shuffle(words);

let currentWordIndex = 0;
let currentClueIndex = 0;
const clues = ["definition", "synonyms", "antonyms"];

function showClue() {
    const word = shuffledWords[currentWordIndex];
    const clueType = clues[Math.floor(Math.random() * clues.length)]; // Randomize clue order
    let clueText;
    let cluePrefix;

    switch (clueType) {
        case "definition":
            cluePrefix = "Definition";
            clueText = word.definition;
            break;
        case "synonyms":
            cluePrefix = "Synonyms";
            clueText = word.synonyms.join(", ");
            break;
        case "antonyms":
            cluePrefix = "Antonyms";
            clueText = word.antonyms.join(", ");
            break;
        default:
            cluePrefix = "Unknown";
            clueText = "Unknown clue type";
    }

    document.getElementById('clue').innerText = `${cluePrefix}: ${clueText}\n(Starts with: ${word.firstLetter.toUpperCase()})`;
}


function checkGuess() {
    const guess = document.getElementById('guessInput').value.trim().toLowerCase();
    const word = words[currentWordIndex].word;

    if (guess === word) {
        document.getElementById('result').innerText = "Correct! Well done!";
        document.getElementById('nextWord').style.display = 'block';
        document.getElementById('submitGuess').disabled = true;
    } else {
        currentClueIndex++;
        if (currentClueIndex >= clues.length) {
            document.getElementById('result').innerText = `Out of clues! The word was "${word}".`;
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
