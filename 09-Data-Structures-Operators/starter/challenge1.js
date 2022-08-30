// class Author {
//   constructor(firstName, lastName, age, country) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//     this._age = age;
//     this._country = country;
//   }

//   get getFirstName() {
//     return this._firstName;
//   }

//   get getLastName() {
//     return this._lastName;
//   }

//   get getAge() {
//     return this._age;
//   }

//   get getSales() {
//     return this._sales;
//   }

//   static getHouseAdress() {
//     return null;
//   }
// }

// class Book extends Author {
//   constructor(title, author, type, publishDate, sales) {
//     super(author);

//     this._title = title;
//     this._type = type;
//     this._publishDate = publishDate;
//     this._sales = sales;
//   }

//   publishBook() {
//     console.log(
//       `The book ${this._title} has been published today the ${this._publishDate}`
//     );
//   }
// }

// const gregMcKeown = new Author('Greg', 'McKeown', 40, 'USA');
// const essentialism = new Book(
//   'Essentialism',
//   gregMcKeown.lastName,
//   'Non-Fiction',
//   '15.08.2022',
//   100000000
// );
// essentialism.publishBook();

// console.time('Regular for loop');
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.timeEnd('Regular for loop');

// const names = 'asdkjas';
// const names2 = 'sakdjasda';
// console.group(names, names2);

// try {
//   let firstname = 'akdsj';
//   let both = firstname + ' ' + variableNotExisting;
// } catch (e) {
//   console.error('Error name' + e.name);
//   console.error('Error message' + e.message);
// } finally {
//   console.log('finally');
// }

// // const throwErrorExampleFun = () => {
// //   let message;
// //   let x = prompt('Enter a number: ');
// //   try {
// //     if (x == '') throw 'empty';
// //     if (isNaN(x)) throw 'not a number';
// //     x = Number(x);
// //     if (x < 5) throw 'too low';
// //     if (x > 10) throw 'too high';
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };
// // throwErrorExampleFun();

// // JSON Parsing
// const usersText = `{
// "users":[
//   {
//     "firstName":"Asabeneh",
//     "lastName":"Yetayeh",
//     "age":250,
//     "email":"asab@asb.com"
//   },
//   {
//     "firstName":"Alex",
//     "lastName":"James",
//     "age":25,
//     "email":"alex@alex.com"
//   },
//   {
//   "firstName":"Lidiya",
//   "lastName":"Tekle",
//   "age":28,
//   "email":"lidiya@lidiya.com"
//   }
// ]
// }`;

// console.log(
//   JSON.parse(usersText, (key, value) => {
//     let newValue =
//       typeof value == 'string' && key != 'email' ? value.toUpperCase() : value;
//     return newValue;
//   })
// );

// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'Redux',
//       'MongoDB',
//       'Express',
//       'React',
//       'Node',
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'MongoDB',
//       'Express',
//       'React',
//       'Node',
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

// const txt = JSON.stringify(users, undefined, 4);
// console.log(txt);

// const user = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   country: 'Finland',
//   city: 'Helsinki',
//   email: 'alex@alex.com',
//   skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
//   age: 250,
//   isLoggedIn: false,
//   points: 30,
// };

// const txt2 = JSON.stringify(
//   user,
//   ['firstName', 'lastName', 'country', 'city', 'age'],
//   4
// );
// console.log(txt2);

//exercises
// const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];
// const skillsJSON = JSON.stringify(skills);

// let age = 250;
// const ageJSON = JSON.stringify(age);

// let isMarried = true;
// const isMarriedJSON = JSON.stringify(isMarried);

// const student = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayehe',
//   age: 250,
//   isMarried: true,
//   skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'],
// };
// const studentJSON = JSON.stringify(student);

// console.log(skillsJSON, ageJSON, isMarriedJSON);
// console.log(studentJSON);

// const studentLimitedJSON = JSON.stringify(student, [
//   'firstName',
//   'lastName',
//   'age',
//   'skills',
// ]);
// console.log(studentLimitedJSON);

// const txt = `{
//     "Alex": {
//         "email": "alex@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 30
//     },
//     "Asab": {
//         "email": "asab@asab.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     },
//     "Brook": {
//         "email": "daniel@daniel.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux"
//         ],
//         "age": 30,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Daniel": {
//         "email": "daniel@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "John": {
//         "email": "john@john.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux",
//             "Node.js"
//         ],
//         "age": 20,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Thomas": {
//         "email": "thomas@thomas.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "Paul": {
//         "email": "paul@paul.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     }
// }
// `;

// const txtObject = JSON.parse(txt);
// console.log(txtObject);

// const txtMostSkills = JSON.parse(txt, (key, value) => {
//   let person =
//     typeof key == 'object' && value.length > 8 ? txt.firstName : 'multiple';
//   return person;
// });
// console.log(txtMostSkills);

// Web Storage, local storage, setting items
const firstNameLocal = 'Imanuel';
const lastNameLocal = 'Harizi';

window.localStorage.setItem('Local First Name', firstNameLocal);
window.localStorage.setItem('Local Last Name', lastNameLocal);
console.log(localStorage);

const skillsLocal = ['HTML', 'CSS', 'JS', 'Photoshop'];
const skillsLocalJSON = JSON.stringify(skillsLocal, undefined, 4);

window.localStorage.setItem('Local Skills', skillsLocal);
window.localStorage.setItem('Local Skills from JSON', skillsLocalJSON);

const objHouse = {
  street: '2nd Avenue',
  yearOfConstruction: 2000,
  architect: 'John the 25th',
};

const objHouseJSON = JSON.stringify(objHouse);

localStorage.setItem('Object House', objHouse);
localStorage.setItem('Object House from JSON', objHouseJSON);

//get Items
const objHouseJSON2 = localStorage.getItem('Object House from JSON');
console.log(JSON.parse(objHouseJSON2));

window.addEventListener('click', () => {
  localStorage.clear();
});
