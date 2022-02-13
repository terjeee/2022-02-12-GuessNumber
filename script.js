'use strict';

/*
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `Correct Number!`;
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

// eventListener ()

// generate secretNumber
let secretNumber = Math.floor(Math.random() * 20) + 1;
let scoreCounter = 20;
let highScore = 0;

// AGAIN-BUTTON (reset)
document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.floor(Math.random() * 20) + 1; // new secretNumber
  scoreCounter = 20;
  displayScore(scoreCounter);
  displaySecretNumber(`?`);
  displayMessage(`Start guessing...`);
  disabledCheckButton(false);
  document.querySelector(`.guess`).value = ``; // Input value
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});

// GUESSING GAME - Check!-button + features
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (guess === secretNumber) {
    displayMessage(`Correct! You did it!`);
    displaySecretNumber(secretNumber);
    disabledCheckButton(true);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (scoreCounter > highScore) {
      highScore = scoreCounter;
      document.querySelector(`.highscore`).textContent = scoreCounter;
    }
  } else if (guess !== secretNumber) {
    if (!guess) {
      displayMessage(`Not a Valid Number!`);
    } else if (scoreCounter > 1) {
      scoreCounter--;
      displayMessage(guess < secretNumber ? `Too Low!` : `Too High!`);
      displayScore(scoreCounter);
    } else {
      displayMessage(`You lost the game!`);
      displayScore(0);
      disabledCheckButton(true);
    }
  }
});

function displayMessage(message) {
  document.querySelector(`.message`).textContent = message;
}
function displayScore(score) {
  document.querySelector(`.score`).textContent = score;
}
function displaySecretNumber(value) {
  document.querySelector(`.number`).textContent = value;
}
function disabledCheckButton(boolean) {
  document.querySelector(`.check`).disabled = boolean;
}
