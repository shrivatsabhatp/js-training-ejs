/*
Write a recursive function called power that takes a number x and an integer n and returns x^n.

Hint: A recursive definition of this operation is x^n = x · x^(n−1). Also, remember that anything raised to the zeroth power is 1.

Optional challenge: you can make this method more efficient, when n is even, using x^n = (x^(n/2))^2.
*/

function power1(base, pwr, total = 1) {
    if (pwr == 0) {
        return total;
    }
    return power1(base, pwr - 1, base * total);
}

function power(base, pwr) {
    if (pwr == 0) {
        return 1;
    }
    return (base * power(base, pwr -1));
}

console.log(power(2,3));
console.log(power1(2, 3));