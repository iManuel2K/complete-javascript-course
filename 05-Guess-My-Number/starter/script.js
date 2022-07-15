'use strict';

/* TODO 

    // 1. Rename Score to 7 Lives
    // 2. Dont allow negative numbers to be inputted
    // 3. Math.Random from 1-20
    // 4. Highscore variable
    5. If statements when the user found the right number --> Add as highscore, "Congratulations!"
    // 6. If lives are gone, new html for "Game Over!"
    7. If no new highscore, "Beat your highscore, just do it!"
    8. Pressing again!, resets 
    // 9. If statements are undefined, null, NaN dont check, show error message
    10. Input number
    11. Counter for tries

*/
// document.addEventListener('DOMContentLoaded', function () {
let randomNumber = Math.round(Math.random() * 20);
let highscore = 0;
let lives = 7;
let livesHTML = document.querySelector('.lives');
let inputNumber = document.querySelector('.guess');
let message = document.querySelector('.message');
let midBox = document.querySelector('.number');
let header = document.getElementById('line');
const checkButton = document.querySelector('#btn');
const resetButton = document.querySelector('#reset');

console.log('The random number is: ' + randomNumber);
console.log(inputNumber.textContent);

function updateInputValue(e) {
  inputNumber = e.target.value;
}

function checkUserInput() {
  console.log('You are inside the checkUserInput function');

  if (lives >= 1) {
    if (inputNumber === randomNumber) {
      // TODO: new and old highscore variables
      if (highscore < lives) {
        highscore = lives;

        message.textContent = 'Congratulations! New highscore too!';
        checkButton.disabled = true;
      }

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

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
// maybe change button to input type reset?
function resetGame() {
  lives = 7;
  randomNumber = Math.round(Math.random() * 20);
  console.log('Reset has been hit');
  console.log('new random number: ' + randomNumber);
}

// TODO: Event listener that updates the inputted value
inputNumber.addEventListener('input', updateInputValue);
checkButton.addEventListener('click', checkUserInput);
resetButton.addEventListener('click', resetGame);
//});
