"use strict";

// TODO: Bug when dice is rolled and new game is clicked, design brakes

let diceImage = document.querySelector(".dice");
let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");
let player0CurrentHTML = document.getElementById("current--0");
let player0ScoreHTML = document.getElementById("score--0");
let player1CurrentHTML = document.getElementById("current--1");
let player1ScoreHTML = document.getElementById("score--1");
let playing,
    player0Score,
    player0CurrentScore,
    player1Score,
    player1CurrentScore;

const newGame = document.querySelector(".btn--new");
const rollDice = document.querySelector(".btn--roll");
const holdCurrent = document.querySelector(".btn--hold");

const init = function () {
    player0Score = 0;
    player1Score = 0;
    player1CurrentScore = 0;
    player0CurrentScore = 0;

    player0CurrentHTML.textContent = 0;
    player0ScoreHTML.textContent = 0;
    player1CurrentHTML.textContent = 0;
    player1ScoreHTML.textContent = 0;

    diceImage.classList.add("hidden");
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
};
init();

rollDice.addEventListener("click", function () {
    const num = Math.trunc(Math.random() * 6) + 1;
    diceImage.classList.remove("hidden");
    diceImage.src = `./dice-${num}.png`;

    if (player0.classList.contains("player--active")) {
        player0CurrentScore += num;
        player0CurrentHTML.textContent = player0CurrentScore;
    } else {
        player1CurrentScore += num;
        player1CurrentHTML.textContent = player1CurrentScore;
    }

    if (num === 1 && player0.classList.contains("player--active")) {
        player0CurrentScore = 0;
        player0CurrentHTML.textContent = "0";
        changePlayers(player0, player1);
    } else if (num === 1 && player1.classList.contains("player--active")) {
        player1CurrentScore = 0;
        player1CurrentHTML.textContent = "0";
        changePlayers(player1, player0);
    }
});

newGame.addEventListener("click", init);

holdCurrent.addEventListener("click", function () {
    if (player0.classList.contains("player--active")) {
        addHTMLValues(player0ScoreHTML, player0CurrentScore);
        setHTMLValues(player0CurrentHTML, 0);

        player0Score += player0CurrentScore;
        player0CurrentScore = 0;

        changePlayers(player0, player1);
    } else if (player1.classList.contains("player--active")) {
        addHTMLValues(player1ScoreHTML, player1CurrentScore);
        setHTMLValues(player1CurrentHTML, 0);

        player1Score += player1CurrentScore;
        player1CurrentScore = 0;

        changePlayers(player1, player0);
    }

    if (player0Score >= 10) {
        player0.classList.toggle("player--winner");
        diceImage.classList.toggle("hidden");
        rollDice.setAttribute("disabled", "true");
        holdCurrent.setAttribute("disabled", "true");
    } else if (player1Score >= 100) {
        player1.classList.toggle("player--winner");
        diceImage.classList.toggle("hidden");
        rollDice.setAttribute("disabled", "true");
        holdCurrent.setAttribute("disabled", "true");
    }
});

function setHTMLValues(variable, num) {
    return (variable.textContent = num);
}

function addHTMLValues(variable, value) {
    let varContent = parseInt(variable.textContent);
    let varInt = (varContent += value);
    let varStr = varInt.toString();
    return (variable.textContent = varStr);
}

function changePlayers(currentPlayer, nextPlayer) {
    currentPlayer.classList.remove("player--active");
    nextPlayer.classList.add("player--active");
}
