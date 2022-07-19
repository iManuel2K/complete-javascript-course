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
// let test = 0;

// if (true) {
//   console.log('Calling from an if statement', this.test);

//   if (true) {
//     console.log('Calling from a nested if statement', this.test);
//   }
// }

// function getTest() {
//   console.log('Calling from a function', this.test);
// }

// this.getTest();
// getTest();

// Primitive types, when changed they create a new a adress in the call stack
// e.g. num, adress = 0001, value = 0
// num2 = num => num2, adress = 0001, value 0
// num2 = 100, num, adress = 0002, value 0 && num2, adress = 0001, value = 100
let num = 0;
let num2 = num;
num = 100;
console.log(num2);

// Reference types, when changed they change the value for both objects because no new adress is created
// These types use the Memory Heap
// numObj, adress = 0003, value = D30F => Memory Heap => adress = D30F, value = {num = 50}
// numObj2, adress = 0003, value = D30F => Memory Heap => adress = D30F, value = {num = 1000}
// Now every object that is referenced to numObj has that num value
const numObj = {
  value: 50,
};

const numObj2 = numObj;
numObj2.value = 1000;

console.log(numObj.value, numObj2.value);

let nameObj = {
  name: 'Imanuel',
};

console.log(nameObj);

const nameObj2 = nameObj;
nameObj2.name = 'Imanuel 2.0';

console.log(nameObj, nameObj2);
nameObj.name = 'Enkelejd';
console.log(nameObj, nameObj2);

nameObj = {};
console.log(nameObj);

//Shallow copy/clone, but is the object has another object it wont work
const shallow = {
  name: 'Something',
  shallow3: {
    name: 'Shallow 3',
  },
};

const shallow2 = Object.assign({}, shallow);
console.log(shallow, shallow2);

shallow2.name = 'Else';
console.log(shallow, shallow2);

// You need to deep clone for this to work
shallow2.shallow3.name = 'HOHOHO';
console.log(shallow, shallow2);

// Deepl clone attempt
const shallowDeep = structuredClone(shallow);
console.log(shallowDeep);

shallowDeep.shallow3.name = 'Ufffff';
console.log(shallow, shallow2, shallowDeep);
