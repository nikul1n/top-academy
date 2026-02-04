"use strict";

const number1 = +prompt("Введите первое число: ")
const number2 = +prompt("Введите второе число: ")
 
const operation = +prompt("Выберите операцию:\n1. +\n2. -\n3. *\n4. /");
let operationResult = "Неверный выбор";
switch (operation) {
    case 1: operationResult = number1 + number2; break;
    case 2: operationResult = number1 - number2; break;
    case 3: operationResult = number1 * number2; break;
    case 4: operationResult = number1 / number2; break;
}
alert(operationResult);





// const mouthNumber = +prompt("input mouth number: ")
// let month = " Ошибка ввода"
// switch (mouthNumber) {
//     case 1: month = "Январь"; break;
//     case 2: month = "Февраль"; break;
//     case 3: month = "Март"; break;
//     case 4: month = "Апрель"; break;
//     case 5: month = "Май"; break;
//     case 6: month = "Июнь"; break;
//     case 7: month = "Июль"; break;
//     case 8: month = "Август"; break;
//     case 9: month = "Сентябрь"; break;
//     case 10: month = "Октябрь"; break;
//     case 11: month = "Ноябрь"; break;
//     case 12: month = "Декабрь"; break;
//     default: month
// }
// alert(month);