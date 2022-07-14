"use strict";

// // Function Declaration
// function calculateAge(getBirthYear) {
//     return 2022 - getBirthYear;
// }

// // Function Expression & anonymous function
// const ageFunction = function (getBirthYear) {
//     return 2022 - getBirthYear;
// };

// console.log(calculateAge(2001), ageFunction(2001));

// const batteryEcoMax = 95;
// const batteryEcoMin = 15;
// const optimalBatteryLevel = () => batteryEcoMax - batteryEcoMin;

// console.log(
//     `The optimal battery level should be between 15 and 95, so that it actually only ${optimalBatteryLevel()}% optimal battery`
// );

// Exercise: Years until retirement
// Big difference from "traditional" functions and arrow functions, is that arrow functions cant be found/used with "this"
// const getBirthYear = parseInt(prompt("What year were you born?"));
// const currentYear = new Date().getFullYear();

// let retirementYearsLeft = (retirementAge, getBirthYear) =>
//     retirementAge - (currentYear - getBirthYear);

// console.log(retirementYearsLeft(65, getBirthYear));

// function setup() {
//     const pcIsTurnedOn = turnPC(false);
//     if (pcIsTurnedOn) {
//         turnMonitor1();
//         turnMonitor2();
//         turnSpeakers();

//         return console.log("Setup is online, have fun!");
//     }

//     return console.log("Oops, your setup is still offline!");
// }

// function turnPC(boolean) {
//     return boolean;
// }

// function turnMonitor1() {
//     return console.log("Are you reaaaaady? Let's see some pixels!");
// }

// function turnMonitor2() {
//     return console.log("Monitor 2 is ready to be used to its maximum!");
// }

// function turnSpeakers() {
//     return console.log("Let's rock and roll!!");
// }

// setup();

// // Arrays
// const teams = ["Barca", "Real", "Man City", "Aris"];
// console.log(teams);

// teams.push("PSG");
// console.log(teams);

// teams.splice(2, 1);
// console.log(teams);

// console.log(teams.pop());

// teams.unshift("Besiktas");
// console.log(teams);

// teams.pop();
// console.log(teams);

// teams.shift();
// console.log(teams);

// console.log(teams.iOf("Real"));
// console.log(teams.iOf("Aris"));
// console.log(teams.includes("Real")); // === important for if statements
// console.log(teams.includes("Aris"));

// Objects
// const player2 = {
//     name: "George",
//     age: 30,
//     job: "Constructor",
// };

// const player3 = {
//     name: "John",
//     age: 55,
//     job: "Engineer",
// };

// const player = {
//     name: "Tony",
//     age: 25,
//     job: "Unemployed",
//     hasLicense: false,
//     friends: [player2.name, player3["name"]],
//     getBirthYear: function () {
//         return 2022 - this.age;
//     },
//     getSummary: function () {
//         return `${this.name} is ${this.age} and ${
//             this.hasLicense ? "has" : "doesnt have"
//         } a drivings license.`;
//     },
// };

// console.log(player.friends);

// const interestedIn = prompt(
//     "What do you want to know about player1? Name? Age? Job? Friends?"
// );
// console.log(player[interestedIn]); // JS replaces the value here, but if we use the dot notation, it wont work

// player.location = "Germany";
// console.log(player);

// player["money"] = 99999;
// console.log(player);

// console.log(
//     `${player.name} has ${player.friends.length} friends and his best friend is ${player.friends[0]}`
// );

// console.log(player["getBirthYear"]());
// console.log(player.getSummary());

// For loops
// const arrayWithStringsAndNumbers = [1, 2, "kalsd", 99, "ooooo", "99", 0.2];

// console.log("--- Using Continue ---");
// for (let i = 0; i < arrayWithStringsAndNumbers.length; i++) {
//     if (typeof arrayWithStringsAndNumbers[i] === "string") continue;
//     console.log(arrayWithStringsAndNumbers[i]);
// }

// console.log("--- Using break ---");
// for (let i = 0; i < arrayWithStringsAndNumbers.length; i++) {
//     if (typeof arrayWithStringsAndNumbers[i] === "string") break;
//     console.log(arrayWithStringsAndNumbers[i]);
// }

// console.log("----- Nested For Loops -----");
// for (let i = 1; i < 4; i++) {
//     console.log(`### Exercise ${i}`);

//     for (let i = 1; i < 5; i++) {
//         console.log(`*** Rep ${i}`);
//     }
// }

// The while loop is perfect when we dont know how many iterations are needed like in a for loop
let dice = Math.trunc(Math.random() * 5) + 1;

while (dice !== 5) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 5) + 1;

    if (dice === 5) console.log("Dice is about to hit 5");
}
