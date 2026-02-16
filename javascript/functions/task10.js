// function max(a,b,c,d,e) {
//     let currentMax = a;
//     if (b > currentMax) {
//         currentMax = b;
//     }
//     if (c > currentMax) {
//         currentMax = c;
//     }
//     if (d > currentMax) {
//         currentMax = d;
//     }
//     if (e > currentMax) {
//         currentMax = e;
//     }
//     return currentMax;
// }

// console.log(max(1,2,3,4,5));




// function max(...numbers) {
//     let currentMax = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i]>currentMax) {
//             currentMax = numbers[i];
//         }
//     }
//     return currentMax;
// }

function getDaysCount(month, year) {
    switch (month) {
        case 2: return isLeap(year) ? 29 : 28;
        case 4:
        case 6:
        case 9:
        case 11: return 30;
    }
    return 31;
}

function isLeap (year) {
    return year%400 === 0 || (year%4 === 0 && year%100 !== 0);
}

function getNextDayFormatted(day, month, year) {
    const monthPerYear = 12;
    day++;
    if (day > getDaysCount(month, year)) {
        day = 1;
        month++;
    }
    if (month > monthPerYear) {
        year++;
        month = 1;
    }
    const dayFormatted = String(day).padStart(2, '0');
    const monthFormatted = String(month).padStart(2, '0');
    const yearFormatted = String(year).padStart(4, '0');
    return `${dayFormatted}.${monthFormatted}.${yearFormatted}`;
}

function testGetDaysCount() {
    console.log(getDaysCount(1, 2000) == 31);
    console.log(getDaysCount(2, 2000) == 28);
    console.log(getDaysCount(2, 2001) == 29);
    console.log(getDaysCount(3, 2000) == 31);
    console.log(getDaysCount(4, 2000) == 30);
    console.log(getDaysCount(5, 2000) == 31);
    console.log(getDaysCount(6, 2000) == 30);
    console.log(getDaysCount(7, 2000) == 31);
    console.log(getDaysCount(8, 2000) == 31);
    console.log(getDaysCount(9, 2000) == 30);
    console.log(getDaysCount(10, 2000) == 31);
    console.log(getDaysCount(11, 2000) == 30);
    console.log(getDaysCount(12, 2000) == 31);
}

testGetDaysCount();
console.log(isLeap(300));
 