//let x = 100;
//if (x == 100) alert("Yes x is equal to 100");

//console.log(100 + 2 + 9.2 - 77 / 9);


// 5 falsy values = 0, "", undefined, null, NaN
const money = 0;
const type = "ss";

console.log(money, type);
if (money) {
    console.log("Its not falsy");
} else if (!money) {
    console.log("Its actually falsy");
}

if (type) {
    console.log("Its not falsy");
} else if (!type) {
    console.log("Its actually falsy");
}