# Projects related to DOM

#### these projects are to understand document manipulations and some simple events

### Project-1 Color-Changer script

```javascript
const colors = document.querySelectorAll(".button");
const body = document.querySelector("body");

function change() {
  body.style.backgroundColor = "white";
}
// console.log(colors);  ->nodelist
colors.forEach(function (color) {
  color.addEventListener("click", function (e) {
    //here e is an event
    //e.target-> where the event occurred
    if (e.target.id == "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "aquamarine") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "green") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

### Project-2 BMI-Index script

```javascript
const form = document.querySelector("form");
//cant access h and w here, coz the value will be obtained as soon as the page will be
//loaded. but e want values after the sumbit

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const h = parseInt(document.querySelector("#height").value);
  const w = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (h === "" || h < 0 || isNaN(h) || w === "" || w < 0 || isNaN(w)) {
    result.innerHTML = `Please give a valid height ${h} and weight ${w}`;
  } else {
    const bmi = (w / ((h * h) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
```

### Project 3 - digital clock - script

```javascript
<script>
    const clock = document.getElementById("clock");
    setInterval(function () {
      let date = new Date();
      clock.innerHTML = date.toLocaleTimeString();
    }, 1000);
  </script>
  //1000 is milliseconds - interval for function to run

```

### Project 4 - guess num - script

```javascript
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
```
