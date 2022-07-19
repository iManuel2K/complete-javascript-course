'use strict';

//Error if its let or const
// console.log(getName, getVar, getLetArrow);

// function getName(age) {
//   age + 12;
// }

// const getConst = function () {
//   return true;
// };

// var getVar = function () {
//   return true;
// };

// let getLetArrow = () => {
//   return true;
// };

//TDZ (temporal dead zone) for let and const. Line 24-25
//is the TDZ for const2, so we cant use it before its initialization in line 26
// const const1 = 100;
// console.log(const2);
// const const2 = 200;

// console.log(name.value);
// console.log(age);
// console.log(job);

// var name = 'Manuel';
// let age = 20;
// const job = 'IT';

// console.log(functionDecl); // function
// console.log(functionExp); // undefined
// console.log(functionArr); // uninitialized

// function functionDecl(a, b) {
//   return a - b;
// }

// var functionExp = function (a, b) {
//   return a - b;
// };

// const functionArr = (a, b) => a - b;
let test = 0;

if (true) {
  console.log('Calling from an if statement', this.test);

  if (true) {
    console.log('Calling from a nested if statement', this.test);
  }
}

function getTest() {
  console.log('Calling from a function', this.test);
}

this.getTest();
getTest();
