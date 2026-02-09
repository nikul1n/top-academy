const prompt = require("prompt-sync")();
"use strict";

// task3
const number = +prompt("Введите число: ");
let power = +prompt("В какую возвести степень: ");
let temp = number;

while (power-1) {
    power--;
    temp *= number;
}

console.log(temp);





// task2 
// let a = +prompt("Введите число:");
// let text = "";
// text += a;

// while (a) {
//     a--;
//     text += a;
// }

// console.log(text);

// task1 

// const countHash = +prompt("Введите количество октоторпов:");
// let a = 0;
// let text = "";

// while (a < countHash) {
//     text += "#";
//     a++;
// }

// console.log(text);