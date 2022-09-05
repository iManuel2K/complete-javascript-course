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
