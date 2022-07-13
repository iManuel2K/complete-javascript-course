// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [1, 22, -2, 3, 1, "assa", 99, 29, 92, 54, -8];
const temperatures2 = [1, 20, 0.2, -222, "wow"];

/* Understanding using Questions

1. What is amplitude? --> Difference between max and min
2. How to calculate amplitude? --> Compute the max and min our of an array
3. What to do with the error? --> Ignore the error

*/

/* Breaking the problem in sub problems

1. Get Temperature values using for loop
2. Allow only valid values not undefined, "error" etc.
3. Find the max and min of the array
4. Return the amplitude from those 2 values

*/

/* Breaking the problem in sub problems - 2

1. Merge 2 arrays

*/

const calculateAmplitude = function (array, array2) {
    let newArray = array.concat(array2);

    let max = newArray[0];
    let min = newArray[0];

    for (let index = 0; index < newArray.length; index++) {
        const currentTemp = newArray[index];

        if (typeof currentTemp !== "number") continue;

        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    console.log(max, min);
    return max - min;
};

console.log(calculateAmplitude(temperatures, temperatures2));
