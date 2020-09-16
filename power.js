/*
Write a recursive function called power that takes a number x and an integer n and returns x^n.

Hint: A recursive definition of this operation is x^n = x · x^(n−1). Also, remember that anything raised to the zeroth power is 1.

Optional challenge: you can make this method more efficient, when n is even, using x^n = (x^(n/2))^2.
*/
"use strict";
function power1(base, exp, total = 1) {
    if (exp == 0) {
        return total;
    }
    return power1(base, exp - 1, base * total);
}

// function power(base, exp) {
//     if (exp == 0) {
//         return 1;
//     }
//     return (base * power(base, exp - 1));
// }

// console.log(power(2,3));
console.log(power1(2, 3));