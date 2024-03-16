// an event handler
// an arrow function
document.addEventListener('DOMContentLoaded', () => {
    const wordleGrid = document.getElementById('wordleGrid');
    // input box
    const guessInput = document.getElementById('guessInput');
    // guess button
    const guessButton = document.getElementById('guessButton');
    // restart button for new name after game started
    const restartButton = document.getElementById('restartButton');
    const message = document.getElementById('message');
    const usedLettersBoard = document.getElementById('usedLettersBoard');
    // display average guesses
    const averageGuessesDisplay = document.getElementById('averageGuesses');
    // reset user data 
    const resetButton = document.getElementById('resetButton');

    // an array
    const wordList = ['APPLE', 'BERRY', 'CHIEF', 'DRAFT', 'EARTH', 
                      'FANCY', 'GRACE', 'HEAVY', 'INPUT', 'JOINT', 
                      'KNOCK', 'LEMON', 'MOUTH', 'NURSE', 'OPERA', 
                      'PRIZE', 'QUIET', 'ROAST', 'SHADE', 'TIGER', 
                      'URBAN', 'VIVID', 'WITCH', 'XENON', 'YIELD', 
                      'ZEBRA', 'ALERT', 'BLOOM', 'CRISP', 'DRINK'];
    
    // a javascript object
    let gameState = {
        solution: '',
        attempts: 0,
        totalGuesses: 0,
        gamesPlayed: 0,
        usedLetters: new Set(),
        initialize: function() {
            this.solution = wordList[Math.floor(Math.random() * wordList.length)];
            this.attempts = 0;
            this.usedLetters.clear();
            console.log(this.solution); // For testing purposes
            wordleGrid.innerHTML = '';
            usedLettersBoard.innerHTML = '';
            message.textContent = '';
            restartButton.style.display = 'none';
            guessButton.disabled = false;

            for (let i = 0; i < 30; i++) {
                const cell = document.createElement('div');
                cell.className = 'wordleCell';
                wordleGrid.appendChild(cell);
            }
        },
        
        // Display the average guesses needed for the user on that device
        loadStatistics: function() {
            const data = JSON.parse(localStorage.getItem('playData') || '{"totalGuesses": 0, "gamesPlayed": 0}');
            this.totalGuesses = data.totalGuesses;
            this.gamesPlayed = data.gamesPlayed;
            this.updateAverageGuessesDisplay();
        },
        saveStatistics: function() {
            const data = JSON.stringify({ totalGuesses: this.totalGuesses, gamesPlayed: this.gamesPlayed });
            localStorage.setItem('playData', data);
        },
        updateAverageGuessesDisplay: function() {
            const average = this.gamesPlayed > 0 ? (this.totalGuesses / this.gamesPlayed).toFixed(2) : 0;
            averageGuessesDisplay.textContent = `Average Guesses: ${average}`;
        },
        resetStatistics: function() {
            localStorage.removeItem('playData');
            this.totalGuesses = 0;
            this.gamesPlayed = 0;
            this.updateAverageGuessesDisplay();
        }
    };

    gameState.loadStatistics();
    gameState.initialize();

    const checkGuess = (guess) => {
        if (guess.length !== 5) {
            message.textContent = 'Please enter a 5-letter word.';
            return false;
        }
        return true;
    };

    const displayGuess = (guess) => {
        // .forEach
        guess.split('').forEach((letter, index) => {
            const letterCell = wordleGrid.children[gameState.attempts * 5 + index];
            letterCell.textContent = letter;
            if (gameState.solution[index] === letter) {
                letterCell.style.backgroundColor = 'green';
            } else if (gameState.solution.includes(letter)) {
                letterCell.style.backgroundColor = 'yellow';
            } else {
                letterCell.style.backgroundColor = 'gray';
            }
        });
    };

    const updateGameState = (guess) => {
        gameState.attempts++;
        gameState.totalGuesses++;
        gameState.updateAverageGuessesDisplay();

        guess.split('').forEach(letter => {
            gameState.usedLetters.add(letter);
        });
        updateUsedLettersBoard();

        if (gameState.attempts > 0) {
            restartButton.style.display = 'block';
        }

        if (guess === gameState.solution || gameState.attempts === 6) {
            gameState.gamesPlayed++;
            gameState.saveStatistics();

            if (guess === gameState.solution) {
                message.textContent = 'You got it right';
            } else {
                message.textContent = `Run out of attempts! Answer is ${gameState.solution}.`;
            }

            guessButton.disabled = true;
        }
    };

    // Display a used letter board
    const updateUsedLettersBoard = () => {
        usedLettersBoard.innerHTML = '';
        gameState.usedLetters.forEach(letter => {
            const letterElement = document.createElement('span');
            letterElement.textContent = letter;
            letterElement.className = 'usedLetter';
            usedLettersBoard.appendChild(letterElement);
        });
    };

    const isValidWord = async (word) => {
        try {
            // API: Check if a 5 letter word is valid
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (response.ok) {
                return true;
            }
        } catch (error) {
            // Word is not valid or API call failed
            console.error('Error fetching API:', error);
        }
        return false;
    };    

    guessButton.addEventListener('click', async () => {
        const guess = guessInput.value.toUpperCase();
        guessInput.value = ''; // clear input after guess

        if (checkGuess(guess)) {
            const validWord = await isValidWord(guess);
            if (validWord) {
                displayGuess(guess);
                updateGameState(guess);
            } else {
                message.textContent = 'Not a valid word. Please try again.';
            }
        }    
    });
    
    restartButton.addEventListener('click', () => {
        gameState.loadStatistics();
        gameState.initialize();
    });

    guessInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            guessButton.click();
        }
    });

    resetButton.addEventListener('click', () => {
        gameState.resetStatistics();
    });
});
