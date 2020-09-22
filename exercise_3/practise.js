"use strict";

/* _________________How REDUCE works___________________________ */
const numbers = [1, 2, 3, 4];

// 1 + 2 + 3 + 4
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // accumulator = 0
console.log(sum);
// expected output: 10

// a = 0, c = 1 => a = 1
// a = 1, c = 2 => a = 3
// ...

const sum1 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}); // accumulator = 0
console.log(sum1);
// a = 1, c = 2 => a = 3
// a = 3, c = 3 => a = 6
// ...

/* ____________________________________________ */