'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a, b, c);
// console.log(arr);

// let [, second, , fourth] = restaurant.categories;
// console.log(second, fourth);

// // Switch variables/values
// [second, fourth] = [fourth, second];
// console.log(second, fourth);

// // Nested array
// let nest = [1, 2, [3, 4]];
// let [num1, num2, [num3, num4]] = nest;
// [num1, num2, [num3, num4]] = [num4, num3, [num2, num1]];
// console.log(num1, num2, num3, num4);

// // Default values
// const defaultArray = ['value', 'value', 'value'];
// const [
//   defA = 'no value',
//   defB = 'no value',
//   defC = 'no value',
//   defD = 'no value',
// ] = defaultArray;
// console.log(defA, defB, defC, defD);

// let nestNest = [1, 2, [3, [99]]];
// let [, , [, [num99]]] = nestNest;
// console.log(num99);

// // Decostructing objects
// console.log('--------------------');
// console.log('Objects');
// const { openingHours, categories } = restaurant;
// console.log(openingHours, categories);

// // Custom names
// const { location: place, openingHours: hoursOnService } = restaurant;
// console.log(place, hoursOnService);

// // Mutating objects
// const testObject = {
//   name: 'firstname',
//   name2: 'lastname',
// };

// let { name: firstName, name2: lastName } = testObject;

// console.log('------------------');
// console.log('Mutating objects');
// console.log(firstName, lastName);

// ({ firstName, lastName } = { lastName, firstName });

// console.log(firstName, lastName);

// // nested deconstruction in objects
// const {
//   thu: { open: openHoursOnThu, close: closingHoursOnThu },
// } = hoursOnService;
// console.log(openHoursOnThu, closingHoursOnThu);

// // passing a object as an argument and not the variables of it
// function logObject({ title, place, year = 2021 }) {
//   console.log(title, place, year);
// }

// const objToLog = {
//   title: 'Party Beach',
//   place: 'Sarande',
//   year: 2022,
// };

// logObject(objToLog);

// // Spread operator
// const arrToSpread = [1, 2, 3, 4, 5];
// const arrToSpread2 = [...arrToSpread, 6, 7, 8];
// console.log(arrToSpread, arrToSpread2);

// const arrToSpreadSim = [...arrToSpread, { ...arrToSpread }];
// console.log(arrToSpreadSim);

// const args = [0, 1, 2];
// function myFunction(x, y, z) {}
// console.log(myFunction(...args));

// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// console.log(arr1);
// //  Prepend all items from arr2 onto arr1
// Array.prototype.unshift.apply(arr1, arr2);
// console.log(arr1);

// let arr3 = [0, 1, 2];
// let arr4 = [3, 4, 5];
// console.log(arr3);
// arr3 = [...arr4, ...arr3];
// console.log(arr3);

// function spread(...array) {
//   console.log(array);
// }

// spread(arr1, arr2, arr3, arr4);

// // Joining 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: strings, sets, maps, arrays, NO Objects
// const myName = 'Imanuel';
// const letters = [...myName];
// console.log(letters);

// const myInt = 1234567890;
// const integers = [myInt];
// console.log(integers);

// // rest operator
// let arrayForRest = [1, 2, 3, 4, 5];
// const [abc, bbc, ...others] = [1, 2, 3, 4, 5, 6];

// console.log(abc, bbc, others);

// // rest and spread
// const bigArr1 = [1, 2, 3, 4, 3, 2, 1, 2, 23, 12, 3, 1, 312, 3, 213, 2];
// const bigArr2 = ['saj', 'laskd', 'pppp', 'ÖÖÖÖ'];

// const [...biggestArray] = [...bigArr1, ...bigArr2];
// console.log(biggestArray);

// const objForRest = {
//   title: 'Testing',
//   price: 10000,
//   year: 1999,
// };

// const { status = 'available', ...rest } = restaurant.openingHours;
// console.log(status, rest);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// const x = [23, 5, 7];
// add(...x);

// console.log('----Short circuiting----');

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log('guest1', guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');
// ({ aaa, bbb } = obj);
// console.log(aaa, bbb);

// Short Circuiting, looks for the first truthy value
console.log('' || 'Imanuel');
console.log(true || 0);
console.log(undefined || null);

const timePlayed = 0;
const played = timePlayed ? timePlayed : 'No time played';
console.log(played);

const played2 = timePlayed || 'No time played';
console.log(played2);

// AND Operator, looks for falsy values
console.log('' && 'Imanuel');
console.log(true && 0);
console.log(undefined && null);
console.log('Someone' && 'Imanuel');

const randomConst = 1;
if (randomConst) {
  console.log('True');
}

randomConst && console.log('True');

// Nullish Coalescing Operator, nullish: null or false or undefined will the second value be returned (not if it was 0 or "")
const timePlayed3 = false;
const played3 = timePlayed3 ?? 'No time played';
console.log(played3);

console.log('----------------------------');

let testNumber = 0;
testNumber ||= 100;
console.log(testNumber);

let testNumber2 = 0;
testNumber2 ??= 100;
console.log(testNumber2);

console.log('----------------------------');
const testStringArray = ['a', 'b', 'c'];
for (const item of testStringArray.entries()) console.log(item);

console.log('----------------------------');
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const obj = {
  [weekdays[0]]: 'First day',
  [weekdays[1]]: 'Second day',
  [weekdays[2]]: 'Third day',
  [weekdays[3]]: 'Fourth day',
  [weekdays[4]]: 'Fifth day',
  [`Saturda` + 'y']: 'Sixth day',
  basicFunction() {
    console.log('Basic function');
  },
  months,
};

console.log(obj);
