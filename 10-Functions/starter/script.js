'use strict';

const print = function (text = 'No text to print', pages = 1, author) {
  console.log(`${text} written by ${author} is ${pages} pages long.`);
};

print();
print(undefined, undefined, 'Me');

const flight = 'LH123';
const passenger = {
  name: 'Imanuel',
  id: 21929123822,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH000';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.id === 21929123822) {
    alert('ID is valid');
  } else {
    console.warn('ID isnt valid');
  }
};

checkIn(flight, passenger);
console.log(flight);
console.log(passenger);

// Abstraction
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
