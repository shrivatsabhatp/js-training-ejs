"use strict";
function inc(x) {
    return x + 1;
}
function dec(x) {
    return x - 1;
}
function plus(a, b) {
    return a === 0 ? b : inc(plus(dec(a), b));
}

console.log(plus(3, 4));