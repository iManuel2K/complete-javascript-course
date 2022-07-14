"use strict";

// // Function Declaration
// function calculateAge(birthYear) {
//     return 2022 - birthYear;
// }

// // Function Expression & anonymous function
// const ageFunction = function (birthYear) {
//     return 2022 - birthYear;
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
// const birthYear = parseInt(prompt("What year were you born?"));
// const currentYear = new Date().getFullYear();

// let retirementYearsLeft = (retirementAge, birthYear) =>
//     retirementAge - (currentYear - birthYear);

// console.log(retirementYearsLeft(65, birthYear));

function setup() {
    const pcIsTurnedOn = turnPC(false);
    if (pcIsTurnedOn) {
        turnMonitor1();
        turnMonitor2();
        turnSpeakers();

        return console.log("Setup is online, have fun!");
    }

    return console.log("Oops, your setup is still offline!");
}

function turnPC(boolean) {
    return boolean;
}

function turnMonitor1() {
    return console.log("Are you reaaaaady? Let's see some pixels!");
}

function turnMonitor2() {
    return console.log("Monitor 2 is ready to be used to its maximum!");
}

function turnSpeakers() {
    return console.log("Let's rock and roll!!");
}

setup();

// Arrays
const teams = ["Barca", "Real", "Man City", "Aris"];
console.log(teams);

teams.push("PSG");
console.log(teams);

teams.splice(2, 1);
console.log(teams);

console.log(teams.pop());

teams.unshift("Besiktas");
console.log(teams);

teams.pop();
console.log(teams);

teams.shift();
console.log(teams);

console.log(teams.indexOf("Real"));
console.log(teams.indexOf("Aris"));
console.log(teams.includes("Real")); // === important for if statements
console.log(teams.includes("Aris"));

// Objects
