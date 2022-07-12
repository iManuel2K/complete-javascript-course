const COUNTRY = "Albania";
const CONTINENT = "Europe";
let population = 2830000;
let isIsland = false;
const LANGUAGE = "albanian";

console.log(isIsland, COUNTRY, CONTINENT, population, LANGUAGE);

// Basic operators
console.log(population / 2);
console.log(population + 1);

const FINLAND_POPULATION = 6000000;
console.log(population > FINLAND_POPULATION);
console.log(population > 33000000);

let description = "Portugal is in Europe, and its 11 million people speak portuguese";

let descriptionLiteral = `Portugal is in Europe, and its 11 million people speak portuguese`;

console.log(typeof description);
console.log(typeof descriptionLiteral);

// IF else
if (population > 33000000) {
    console.log("Albanias's population is above average");
} else {
    console.log(`${COUNTRY}'s population is below average`);
}

//Type conversion
'9' - '5';              //4
'19' - '13' + '17';     //617
'19' - '13' + 17;       //23
'123' < 57;             //false
5 + 6 + '4' + 9 - 4 - 2;//1143

// Equality operators
/* let numNeighbours = prompt("How many neighbour countries does your country have?");

if (parseInt(numNeighbours) === 1) {
    console.log("Only 1 border!");
} else if (parseInt(numNeighbours) >=  1) {
    console.log("More than 1 border");
} else {
    console.log("No borders!");
} */

//Logical Operators
if (LANGUAGE === "english" && population < 50000000 && isIsland) {
    console.log("Live here plz!");
} else {
    console.log("Oh hell no");
}

//switch
switch (LANGUAGE) {
    case "mandarin":
    case "chinese":
        console.log("Number 1");
        break;
    case "spanish":
        console.log("Number 2");
        break;
    case "turkish":
        console.log("Number something");
        break;
    default:
        console.log("Great language too!");
}

//conditional ternary operator
population > 3300 ? console.log("bigger") : console.log("smaller");
