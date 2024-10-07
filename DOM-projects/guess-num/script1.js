let randomNum = parseInt(Math.random() * 100 + 1);
let previous = [];
let playgame = true;
let remaining = 10;
let currGuess = 0;

const userInput = document.querySelector("#userInput");
const prevGuess = document.querySelector("#prev-guess");
const attempts = document.querySelector("#remaining");
const lowOrHigh = document.querySelector("#lowOrHigh");
const submit = document.querySelector("#sub");
const result = document.querySelector("#result");
const startOver = document.querySelector("#info");

if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validate(guess);
  });
}

function validate(guess) {
  if (guess > 100 || guess < 1 || guess == "" || isNaN(guess)) {
    alert("Please enter a valid number");
  } else {
    previous.push(guess);
    if (currGuess === 10) {
      displayGuess(guess);
      displayMsg(`game over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkNum(guess);
    }
  }
}

function checkNum(guess) {
  if (guess == randomNum) {
    displayMsg(`you guessed it right`);
    endGame();
  } else if (guess < randomNum) {
    displayMsg(`guessed number is low`);
  } else {
    displayMsg(`guessed number is high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  prevGuess.innerHTML += `${guess}    `;
  currGuess++;
  attempts.innerHTML = `${10 - currGuess}`;
}
function displayMsg(message) {
  lowOrHigh.innerHTML = `${message}`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  result.classList.add("button");
  result.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  playgame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    previous = [];
    currGuess = 1;
    prevGuess.innerHTML = "";
    attempts.innerHTML = "10";
    userInput.removeAttribute("disabled");
    result.innerHTML = "";
    playgame = true;
  });
}
