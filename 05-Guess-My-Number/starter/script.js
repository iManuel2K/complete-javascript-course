"use strict";

// TODO: DRY Principle
// Save highscore to localStorage and location.reload()

let randomNumber = Math.round(Math.random() * 20);
let highscore = 0;
let lives = 7;
let livesHTML = document.querySelector(".lives");
let inputNumber = document.querySelector(".guess");
let message = document.querySelector(".message");
let midBox = document.querySelector(".number");
let header = document.getElementById("line");
let highscoreHTML = document.querySelector(".highscore");
const checkButton = document.querySelector("#btn");
const resetButton = document.querySelector("#reset");
console.log("The random number is: " + randomNumber);

inputNumber.addEventListener("click", function (e) {
  inputNumber.value = e.target.value;
});

function replaceHtmlText(type, message) {
  return (type.textContent = `${message}`);
}

document.querySelector("#btn").addEventListener("click", function () {
  if (lives >= 1) {
    if (inputNumber.value == randomNumber) {
      if (lives > highscore) {
        highscore = lives;
        checkButton.disabled = true;
      }

      replaceHtmlText(highscoreHTML, highscore);
      replaceHtmlText(message, "Congratulations!");
      document.querySelector("body").style.backgroundColor = "darkGreen";
    } else if (inputNumber !== randomNumber) {
      lives--;
      replaceHtmlText(message, "Wrong guess, try again!");
      replaceHtmlText(livesHTML, lives);
    } else if (
      inputNumber === undefined ||
      inputNumber === NaN ||
      typeof inputNumber === "string" ||
      !inputNumber.value
    ) {
      replaceHtmlText(message, "No number has been entered!");
      console.error("Invalid value");
    } else if (lives === 0) {
      replaceHtmlText(message, "Game over!");
      checkButton.disabled = true;
      replaceHtmlText(midBox, "X");
      midBox.style.backgroundColor = "red";
      header.style.borderColor = "red";
    }
  }
});

document.querySelector("#reset").addEventListener("click", function () {
  lives = 7;
  replaceHtmlText(livesHTML, "7");
  inputNumber.value = "";
  randomNumber = Math.round(Math.random() * 20);

  replaceHtmlText(message, "Start guessing...");
  checkButton.disabled = false;
  replaceHtmlText(midBox, "?");
  midBox.style.backgroundColor = "#eee";
  header.style.borderColor = "#eee";

  document.querySelector("body").style.backgroundColor = "#222";

  console.log("New random number: " + randomNumber);
});
