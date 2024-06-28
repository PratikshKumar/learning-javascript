let num = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');

const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('enter valid number');
  } else if (guess < 1) alert('its < 1');
  else if (guess > 100) alert('it is > 100');
  else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMsg(`Game Over. Random number was ${num}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == num) {
    displayMsg(`Sahi pakde hain aap`);
    endGame();
  } else if (guess < num) {
    displayMsg(`chhota hai`);
  } else if (guess > num) {
    displayMsg(`Bada hai ye`);
  }
}

function displayMsg(msg) {
  lowOrHi.innerHTML = `<h2> ${msg} </h2>`;
}

function displayGuess(msg) {
  input.value = ``;
  guesses.innerHTML = `${prevGuess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

// const input=document.querySelector("#guessField");
// const guesses= document.querySelector('.guesses');
// const remaining=document.querySelector('.lastResult');

function endGame() {
  input.value = ``;
  // lowOrHi.innerHTML=``;
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start new game bhai</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newG = document.querySelector('#newGame');
  newG.addEventListener('click', function (e) {
    num = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guesses.innerHTML = ``;
    lowOrHi.innerHTML = ``;
    remaining.innerHTML = 10;
    input.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
