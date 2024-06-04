const words = [
    {
        word: "happy",
        definition: "Feeling or showing pleasure or contentment",
        synonym: "joyful",
        antonym: "sad",
        firstLetter: "h"
    },
    {
        word: "fast",
        definition: "Moving or capable of moving at high speed",
        synonym: "quick",
        antonym: "slow",
        firstLetter: "f"
    },
    // Add more words here
];

let currentWordIndex = 0;
let currentClueIndex = 0;
const clues = ["definition", "synonym", "antonym"];

function showClue() {
    const word = words[currentWordIndex];
    const clueType = clues[currentClueIndex];
    const clueText = word[clueType];
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
