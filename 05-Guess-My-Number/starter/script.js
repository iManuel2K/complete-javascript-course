'use strict';

/* TODO 

    // 1. Rename Score to 7 Lives
    // 2. Dont allow negative numbers to be inputted
    // 3. Math.Random from 1-20
    // 4. Highscore variable
    // 5. If statements when the user found the right number --> Add as highscore, "Congratulations!"
    // 6. If lives are gone, new html for "Game Over!"
    // 7. Pressing again!, resets 
    // 8. If statements are undefined, null, NaN dont check, show error message

*/
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
    } else if (inputNumber !== randomNumber) {
      lives--;
      message.textContent = 'Wrong guess, try again!';
      livesHTML.textContent = lives;
    } else if (
      inputNumber === undefined ||
      inputNumber === NaN ||
      typeof inputNumber === 'string'
    ) {
      console.error('Invalid value');
    }
  } else {
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
