"use strict";


// Задание 4

const [hours, minets, seconds] = prompt("Input time (HH:mm:ss):").split(':').map(Number)


const number = +prompt("input number:");

if (isNaN(number)) {
    console.log("wrong input");
} else {
    alert(Math.abs(number));
}

// Задание 3

// const number = +prompt("input number:");

// if (isNaN(number)) {
//     console.log("wrong input");
// } else {
//     alert(Math.abs(number));
// }


// Задание 2

// const number = +prompt("Input you age:");

// if (isNaN(number) || number < 0 || number > 120) {
//     console.log("wrong input");
// } else {
//     alert("ok");
// }


// Задание 1

// const number = +prompt("Input number:");

// if (isNaN(number)) {
//     console.log("wrong input");
// } else {
//     if (number > 0) {
//         alert("number is positive")
//     } if (number < 0) {
//         alert("number is negative")
//     } else {
//         alert("number is zero")
//     }
// }











// const number = +prompt("Input number:");
// if (isNaN(number)) {
//     console.log("wrong input");


// }
// else {
//     if (number % 2 === 0) {
//         confirm("even");
//     } else {
//         alert("odd");
//     }
// }

// const age = prompt("Сколько вам лет?");

// if (age < 18) console.log("Вы несовершеннолетний!!!"); else console.log("Вы совершеннолетний!!!!");