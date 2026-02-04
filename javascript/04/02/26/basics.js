"use strict";


const number1 = +prompt("Введите количество часов: ");
const number2 = +prompt("Введите количество минут: ");

if (isNaN(number1) || isNaN(number2)) {
    console.log("wrong input");
} else {
    let temp = 24*60 - number1*60 - number2;
    alert("До следующего дня осталось: " + Math.round(temp/60) + " часов " + temp%60 + " минут");
}



// const number1 = +prompt("Введите число: ");

// if (isNaN(number1)) {
//     console.log("wrong input");
// } else {
//     alert("Квадрат введённого числа: " + number1 * number1);
// }

// const mile = 0.621371;
// const number1 = +prompt("Введите количество киллометров: ");

// alert("Введённое количество километров равно " + number1*mile + " миль");