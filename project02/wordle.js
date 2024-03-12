const wordleGrid = document.getElementById('wordleGrid');
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

// A sample list of words. Ideally, use a larger list or an API for random words.
const wordList = ['APPLE', 'BERRY', 'CHIEF', 'DRAFT', 'EARTH', 
                  'FANCY', 'GRACE', 'HEAVY', 'INPUT', 'JOINT', 
                  'KNOCK', 'LEMON', 'MOUTH', 'NURSE', 'OPERA', 
                  'PRIZE', 'QUIET', 'ROAST', 'SHADE', 'TIGER', 
                  'URBAN', 'VIVID', 'WITCH', 'XENON', 'YIELD', 
                  'ZEBRA', 'ALERT', 'BLOOM', 'CRISP', 'DRINK'];
                  
const solution = wordList[Math.floor(Math.random() * wordList.length)];
console.log(solution); // For testing purposes

let attempts = 0;

// word grid
for (let i = 0; i < 30; i++) { // create 30 cells arragend by css ".wordleCell"
    const cell = document.createElement('div');
    cell.className = 'wordleCell';
    wordleGrid.appendChild(cell);
}

// link enter key to guess button
document.getElementById('guessInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('guessButton').click();
    }
});

// processing when submit a guess
guessButton.addEventListener('click', () => {
    const guess = guessInput.value.toUpperCase();

    if (guess.length !== 5) {
        message.textContent = 'Please enter a 5-letter word.';
        return;
    }

    if (attempts < 6) {
        for (let i = 0; i < 5; i++) {
            const letterCell = wordleGrid.children[attempts * 5 + i];
            letterCell.textContent = guess[i];

            if (solution[i] === guess[i]) {
                letterCell.style.backgroundColor = 'green';
            } else if (solution.includes(guess[i])) {
                letterCell.style.backgroundColor = 'yellow';
            } else {
                letterCell.style.backgroundColor = 'gray';
            }
        }

        if (guess === solution) {
            message.textContent = 'Congratulations! You got it!';
        } else {
            message.textContent = '';
            attempts++;
            if (attempts === 6) {
                message.textContent = `Sorry, you've run out of attempts! The word was ${solution}.`;
            }
        }
    }
    guessInput.value = ''; // clear input after guess
});
