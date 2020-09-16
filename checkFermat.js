/*
Fermat’s Last Theorem says that there are no positive integers a, b, and c such that
a^n + b^n = c^n 
for any values of n greater than 2.
Write a function named checkFermat that takes four parameters— a, b, c and n—and checks to 
see if Fermat’s theorem holds. 
If n is greater than 2 and
a^n + b^n = c^n
the program should print, “Holy smokes, Fermat was wrong!” Otherwise the program should print,
“No, that doesn’t work.”
*/

/*
const a = 17;
const b = 144;
const c = 145;
const n = 2;
*/
/*
const a = (18 + (17 * Math.sqrt(2)));
const b = (18 - (17 * Math.sqrt(2)));
const c = 42;
const n = 3;
*/
"use strict";
const a = 1;
const b = 2;
const c = 3;
const n = 4;

const power = function (base, exponent, total = 1) {
    if (exponent == 0) {
        return total;
    }
    return power(base, exponent - 1, base * total);
};
// or use Math.pow(base, pwr)

function checkFermat(a, b, c, n) {
    if (n > 2 && power(a, n) + power(b, n) === power(c, n)) {
        return "Holy smokes, Fermat was wrong!";
    }
    return "No, that doesn’t work.";
}

console.log(checkFermat(a, b, c, n));
