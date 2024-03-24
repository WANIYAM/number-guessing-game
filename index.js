#! /usr/bin/env node
//                         NUMBER GUESSING GAME
import inquirer from "inquirer";
// 1) COMPUTER GENERATE A  NUMBER
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
// 2) USER GUESSING NUMBER
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1 -10",
    },
]);
// 3)COMPARING BOTH NUMBER
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
