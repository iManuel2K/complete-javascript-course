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
