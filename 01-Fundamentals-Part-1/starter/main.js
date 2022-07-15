//let x = 100;
//if (x == 100) alert("Yes x is equal to 100");

//console.log(100 + 2 + 9.2 - 77 / 9);


// 5 falsy values = 0, "", undefined, null, NaN
// const money = 0;
// const type = "ss";

// console.log(money, type);
// if (money) {
//     console.log("Its not falsy");
// } else if (!money) {
//     console.log("Its actually falsy");
// }

// if (type) {
//     console.log("Its not falsy");
// } else if (!type) {
//     console.log("Its actually falsy");
// }

// switch
// let userPrefferedDay = prompt("What day of the week you like the most?").toLowerCase();

// switch (userPrefferedDay) {
//     case "monday": // userPrefferedDay === "monday"
//         console.log("Whaaaaaat?");
//         break;
//     case "tuesday":
//         console.log("Never!");
//         break;
//     case "friday":
//         console.log("Yes for all of us!");
//         break;
//     default:
//         console.log("That is not a valid day!");
//         break;
// }

// Expressions
3 + 4
1022123
true && !false

// Statements
if (true) {
    const CONSTANT123 = "Statement is this string"; // The whole "sentence" is a statement, because it doesnt produce a value, ends with semicolon ;
    const literalsAreExpressions = `Because we use ${CONSTANT123}`;
}

// Conditional Ternary Operator
const age = 20;
const ageType = age > 50 ? "Old man" : "Young man";
console.log(`He is an ${ageType}`);
