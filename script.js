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
    // Add more words here
];

let currentWordIndex = 0;
let currentClueIndex = 0;
const clues = ["definition", "synonyms", "antonyms"];

function showClue() {
    const word = words[currentWordIndex];
    const clueType = clues[Math.floor(Math.random() * clues.length)]; // Randomize clue order
    let clueText;

    switch (clueType) {
        case "definition":
            clueText = word.definition;
            break;
        case "synonyms":
            clueText = word.synonyms.join(", ");
            break;
        case "antonyms":
            clueText = word.antonyms.join(", ");
            break;
        default:
            clueText = "Unknown clue type";
    }

    document.getElementById('clue').innerText = `Clue: ${clueText} (Starts with: ${word.firstLetter.toUpperCase()})`;
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
