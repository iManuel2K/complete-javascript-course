"use strict";

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
// 2. Usethefunctiontocalculatetheaverageforbothteams
// 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
// 5. Ignoredrawsthistime
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const calcAverage = (a, b, c) => (a + b + c) / 3;

const winner = function checkWinner(
    score1,
    score2,
    score3,
    score4,
    score5,
    score6
) {
    const averageDolphinsScore = calcAverage(score1, score2, score3);
    const averageKoalasScore = calcAverage(score4, score5, score6);

    if (averageDolphinsScore >= 2 * averageKoalasScore) {
        console.log("And the winner is... the Dolphins!");
    } else if (averageKoalasScore >= 2 * averageDolphinsScore) {
        console.log("And the winner is... the Koalas!");
    }

    return `The average score added together was: ${
        averageDolphinsScore + averageKoalasScore
    }`;
};

console.log(winner(44, 23, 71, 65, 54, 49));
console.log(winner(85, 54, 41, 23, 34, 27));
