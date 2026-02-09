
document.addEventListener("DOMContentLoaded", async () => {
    "use strict";

    const outputElement = document.querySelector(".game-number");
    function setOutput(text) {
        outputElement.innerHTML = <strong>${text}</strong>;
    }
    const numberToGuess = 1 + Math.floor((Math.random() * 100));
    alert("<strong>Игра угадай чсило!</strong><br>");


    let guess = 0;



    while (numberToGuess !== guess) {
        guess = +prompt("Введите число от 1 до 100 включительно:");

        if (numberToGuess < guess) {
            alert("Ваше число больше загаданного, попробуйте ещё раз: ");
            // guess = +prompt("test1");
        } else if (numberToGuess > guess) {
            alert("Ваше число меньше загаданного, попробуйте ещё раз: ");
        }
        else {
            alert("Вы угадали! Молодец!");
        }
    }
});