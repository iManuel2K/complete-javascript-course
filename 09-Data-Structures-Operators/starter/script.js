'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);
console.log(arr);

let [, second, , fourth] = restaurant.categories;
console.log(second, fourth);

// Switch variables/values
[second, fourth] = [fourth, second];
console.log(second, fourth);

// Nested array
let nest = [1, 2, [3, 4]];
let [num1, num2, [num3, num4]] = nest;
[num1, num2, [num3, num4]] = [num4, num3, [num2, num1]];
console.log(num1, num2, num3, num4);

// Default values
const defaultArray = ['value', 'value', 'value'];
const [
  defA = 'no value',
  defB = 'no value',
  defC = 'no value',
  defD = 'no value',
] = defaultArray;
console.log(defA, defB, defC, defD);

let nestNest = [1, 2, [3, [99]]];
let [, , [, [num99]]] = nestNest;
console.log(num99);

// Decostructing objects
console.log('--------------------');
console.log('Objects');
const { openingHours, categories } = restaurant;
console.log(openingHours, categories);

// Custom names
const { location: place, openingHours: hoursOnService } = restaurant;
console.log(place, hoursOnService);

// Mutating objects
const testObject = {
  name: 'firstname',
  name2: 'lastname',
};

let { name: firstName, name2: lastName } = testObject;

console.log('------------------');
console.log('Mutating objects');
console.log(firstName, lastName);

({ firstName, lastName } = { lastName, firstName });

console.log(firstName, lastName);

// nested deconstruction in objects
const {
  thu: { open: openHoursOnThu, close: closingHoursOnThu },
} = hoursOnService;
console.log(openHoursOnThu, closingHoursOnThu);

// passing a object as an argument and not the variables of it
function logObject({ title, place, year = 2021 }) {
  console.log(title, place, year);
}

const objToLog = {
  title: 'Party Beach',
  place: 'Sarande',
  year: 2022,
};

logObject(objToLog);

let aaa = 100,
  bbb = 200;
const obj = {
  aaa: 10,
  bbb: 20,
  c: 30,
  d: 40,
};
({ aaa, bbb } = obj);
console.log(aaa, bbb);

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
