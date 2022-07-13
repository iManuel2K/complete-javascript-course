"use strict;";

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
const birthYear = parseInt(prompt("What year were you born?"));
const currentYear = new Date().getFullYear();

let retirementYearsLeft = (retirementAge, birthYear) =>
    retirementAge - (currentYear - birthYear);

console.log(retirementYearsLeft(65, birthYear));
