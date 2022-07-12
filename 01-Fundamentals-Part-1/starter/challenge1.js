// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

let massOfJohn, massOfMark, heightOfJohn, heightOfMark, markHigherBMI, johnBMI, markBMI;

markHigherBMI = markBMI > johnBMI;

// Data 1
massOfJohn = 92;
heightOfJohn = 1.95;

massOfMark = 78;
heightOfMark = 1.69;

johnBMI = massOfJohn / heightOfJohn ** 2;
markBMI = massOfMark / heightOfMark ** 2;

if (markHigherBMI) {
    console.log(`Mark has a higher BMI of: ${markBMI}`);
} else {
    console.log(`John has a higher BMI of: ${johnBMI}`);
}


// Data 2
massOfJohn = 85;
heightOfJohn = 1.76;

massOfMark = 95;
heightOfMark = 1.88;

markHigherBMI = markBMI > johnBMI;

johnBMI = massOfJohn / heightOfJohn ** 2;
markBMI = massOfMark / heightOfMark ** 2;

if (markHigherBMI) {
    console.log(`Mark has a higher BMI of: ${markBMI}`);
} else {
    console.log(`John has a higher BMI of: ${johnBMI}`);
}

console.log(Boolean(""));
