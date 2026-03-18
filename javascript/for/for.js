const prompt = require('prompt-sync')();
"use strict";

// Запросить число и проверить, простое ли оно. Простое
// число делится без остатка только на себя и на единицу.

const number = +prompt("Введите число: ");
let isPrime = true;
for (let i = 2; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`Число ${number} простое`);
} else {
  console.log("Число не простое");
}


// let a = 0;
//   while (a < 10) {
//     document.write(`${a} `);
//     a++;
//   }
//   while (gameIsRunning) {
//     if (player.isQuitting) {
//       gameIsRunning = false;
//     }
//   }

//   let arr = [1, 2, 7, 3, 4, 2];
//   for (let i = 0; i < arr.length; i++) {
//     document.write(`${arr[i]} `);
//   }



// task4 Запросить 2 числа и найти все общие делители.
// const number1 = +prompt("Введите первое число: ");
// const number2 = +prompt("Введите второе число: ");
// let temp = 1;

// while (temp <= number1 && temp <= number2) {
//     if (number1%temp === 0 && number2%temp === 0) {
//         if (number1%temp ===  number2%temp) {
//             console.log(temp);
//         }
//     }
// temp++;
// }

// console.log(temp);


// task3
// const number = +prompt("Введите число: ");
// let power = +prompt("В какую возвести степень: ");
// let temp = number;

// while (power-1) {
//     power--;
//     temp *= number;
// }

// console.log(temp);





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

