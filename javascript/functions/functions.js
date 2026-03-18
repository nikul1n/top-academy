const prompt = require('prompt-sync')();
"use strict";

// Написать функцию, которая принимает 2 числа и возвращает меньшее из них.
const a = +prompt("Введите первое число: ");
const b = +prompt("Введите второе число: ");

function minNumber(number1, number2) {
    if (number1 < number2) {
        return number1;
    } else {
        return number2;
    }
}


console.log(minNumber(a, b));

// function exclamate(text) {
//   console.log(getExclamated(text));
// }

// exclamate("Hello");
// console.log(getExclamated("Goodbye") === "Goodbye!");
// console.log(getExclamated("") === "");
// console.log(getExclamated(null) === null);
// console.log(typeof getExclamated(undefined) === 'undefined');