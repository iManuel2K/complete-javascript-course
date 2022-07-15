'use strict';

// TODO: DRY Principle

let randomNumber = Math.round(Math.random() * 20);
let highscore = 0;
let oldHighscore = 0;
let lives = 7;
let livesHTML = document.querySelector('.lives');
let inputNumber = document.querySelector('.guess');
let message = document.querySelector('.message');
let midBox = document.querySelector('.number');
let header = document.getElementById('line');
let highscoreHTML = document.querySelector('.highscore');
const checkButton = document.querySelector('#btn');
const resetButton = document.querySelector('#reset');

console.log('The random number is: ' + randomNumber);

function updateInputValue(e) {
  inputNumber.textContent = e.target.value;
}

function checkUserInput() {
  if (lives >= 1) {
    if (inputNumber.textContent == randomNumber) {
      if (highscore < oldHighscore) {
        highscore = lives;

        message.textContent = 'Congratulations! New highscore too!';
        checkButton.disabled = true;
      }
      highscore = lives;
      highscoreHTML.textContent = highscore;
      message.textContent = 'Congratulations!';
    } else if (inputNumber !== randomNumber && inputNumber.value !== '') {
      lives--;
      message.textContent = 'Wrong guess, try again!';
      livesHTML.textContent = lives;
    } else if (
      inputNumber === undefined ||
      inputNumber === NaN ||
      typeof inputNumber === 'string' ||
      !inputNumber.value
    ) {
      message.textContent = 'No number has been entered!';
      console.error('Invalid value');
    }
  }
  if (lives == 0) {
    message.textContent = 'Game over!';
    checkButton.disabled = true;
    midBox.textContent = 'X';
    midBox.style.backgroundColor = 'red';
    header.style.borderColor = 'red';
  }
}

function resetGame() {
  lives = 7;
  livesHTML.textContent = '7';
  inputNumber.value = '';
  randomNumber = Math.round(Math.random() * 20);

  message.textContent = 'Start guessing...';
  checkButton.disabled = false;
  midBox.textContent = '?';
  midBox.style.backgroundColor = '#eee';
  header.style.borderColor = '#eee';

  console.log('New random number: ' + randomNumber);
}

inputNumber.addEventListener('input', updateInputValue);
checkButton.addEventListener('click', checkUserInput);
resetButton.addEventListener('click', resetGame);
