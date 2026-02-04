"use strict";

// Задание 4
const x = +prompt("Введите координату x:");
const y = +prompt("Введите координату y:");

if (isNaN(x) || isNaN(y)) {
    console.log("wrong input");
} else {
    if (x > 0 && y > 0) {
        alert("Вы находитесь в первой четверти");
    } else if (x < 0 && y > 0) {
        alert("Вы находитесь во второй четверти");
    } else if (x < 0 && y < 0) {
        alert("Вы находитесь в третьей четверти");
    } else if (x > 0 && y < 0) {
        alert("Вы находитесь в четвёртой четверти");
    } else {
        alert("Вы попали на ось");
    }
}



// Задание 4

// const [hours, minets, seconds] = prompt("Input time (HH:mm:ss):").split(':').map(Number);

// if (isNaN(hours)|| isNaN(minets) || isNaN(seconds) || hours>23 || minets>59 || seconds>59) {
//     console.log("wrong input");
// } else {
//     alert("Введённое время: " + hours + " часов " + minets + " минут " + seconds + " секунд");
// }

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