'use strict';

// const print = function (text = 'No text to print', pages = 1, author) {
//   console.log(`${text} written by ${author} is ${pages} pages long.`);
// };

// print();
// print(undefined, undefined, 'Me');

// const flight = 'LH123';
// const passenger = {
//   name: 'Imanuel',
//   id: 21929123822,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH000';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.id === 21929123822) {
//     alert('ID is valid');
//   } else {
//     console.warn('ID isnt valid');
//   }
// };

// checkIn(flight, passenger);
// console.log(flight);
// console.log(passenger);

// // Abstraction
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// Functions Returning Functions
const greet = greeting => name => console.log(`${greeting} ${name}`);

const sayBye = function (text) {
  return function (name) {
    console.log(`${text} ${name}`);
  };
};

greet('Hello')(' Mr. Imanuel');
sayBye('Bye Bye')('Imanuel');

// Call and apply methods
const flight = {
  airline: 'Ryanair',
  code: 'R549',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked on seat ${this.airline} flight ${flightNum}`);
    this.bookings.push({ flight: `${flightNum}` });
  },
};

const flight2 = {
  airline: 'Lufthansa',
  code: 'X01',
  bookings: [],
};

flight.book(999, 'Imanuel H.');
flight.book(111, 'Someone H.');
console.log(flight.bookings);

const book = flight.book;
// Returns an error, because the (this) keyword points to undefined. Its no longer the method from the flight object. Its a function now.
//book(22, 'Trump');

// Call Method calls the book function not us. First parameter is all about what (this) keyword should be e.g. flight or flight2. It doesnt matter where
// the method comes from, because we could manually manipulate (this) keyword to our liking
book.call(flight, 10000, 'Jeniffer');
book.call(flight2, 991, 'Jeniffer');

console.log(flight, flight2);

// Apply method, similar to the call method. But after the manipulation of (this) keyword, it takes an Array.
const flightData = [129, 'Cooper'];
book.apply(flight2, flightData);
console.log(flight2.bookings);

// Same as apply method, but better...
book.call(flight2, ...flightData);

console.log('----------Bind Method-----------');

// Bind Method
const bookFlight2 = book.bind(flight2);
bookFlight2(123123, 'Testing Bind');

const bookFlight2V2 = flight.book.bind(flight2);
bookFlight2V2(10000, '0000');

// Specific flights, partial application, one part of the method or function is already defined = presets parameters
const bookFlight2For920 = book.bind(flight2, 920);
bookFlight2For920('Imanuel');

//With Event Listeners
flight.planes = 1000;
flight.buyPlane = function () {
  // logs NaN, because (this) is looking at the .buy class based on the handler function. The eventListener is calling the function and not the flight
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// Wont work as expected, logs NaN
// document
//   .querySelector('.buy')
//   .addEventListener('click', flight.buyPlane);

document
  .querySelector('.buy')
  .addEventListener('click', flight.buyPlane.bind(flight));

// Partial Example without (this) keyword
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//bind(null) = we are not binding (this) keyword to anything
const addVat = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23

console.log(addVat(1000));

// IIFE, executed only once and never again. The first part, from ( till... ) is the expression/value and the last 2 parentheses call it
(function () {
  console.log('IIFE...');
})();

(() => console.log('IIFE... in an arrow function'))();

// Securing variables from not being accessed by the outside
{
  const secureInt = 199;
}

// Closures, makes a function remember all the variables that existed at the functions "birthplace"
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount + ' passengers');
  };
};

// A function always has access to the variable Environment of its execution context in which it was created
const booker = secureBooking();

booker();
booker();

console.dir(booker);

// More closures, Example 1, closures never forget
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
