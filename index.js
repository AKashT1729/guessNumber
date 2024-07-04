let random = parseInt(Math.random() * 100 + 1);
//console.log(random);
const submit = document.querySelector("#submit-btn");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowORHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".startOver");

const p = document.createElement("p");

let prevGuess = [];
let numGuesses = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // Check if the guess is correct number
  if (isNaN(guess) || guess < 1 || guess > 100) {
    displayMessage("Please enter a valid number between 1 and 100.");
    return;
  } else {
    prevGuess.push(guess);
    if (numGuesses === 10) {
      displayGuess(guess);
      displayMessage(`Game over!, random Number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`Congratulations!!! you win the game`);
  } else if (guess > random) {
    displayMessage("number is high");
  } else if (guess < random) {
    displayMessage("number is low");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuesses++;
  remaining.innerHTML = `${10 - numGuesses}`;
}

function displayMessage(message) {
  lowORHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    startNewGame()
}
function startNewGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function(e) {
        random = parseInt(Math.random() *100 +1)
        prevGuess = []
        numGuesses = 0
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    
        displayMessage('Welcome to the Number Guessing Game!')
    })
}
