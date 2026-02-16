// . Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие
// числа выводить, определяется третьим параметром типа
// bool (true – четные, false – нечетные).

const { startTransition } = require("react");

function printByOddity(start, end, is_even) {
    if (is_even = false && is_even === (start % 2 === 0)) {
        for (let number = start + 1; number < end; number + 2) {
            console.log(number);
        }
    } else {
        for (let number = start; number < end; number + 2) {
            console.log(number);
        }
    }
}

printByOddity(1, 10, )

start += (start % 2 == 0 == is_even) ? 0 : 1;