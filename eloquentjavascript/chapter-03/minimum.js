"use strict";

function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
}

let min = (x, y) => (x < y) ? x : y;

// console.log(min(0, -10));
// console.log(min(0, 10));

test("Minimum of two number", () => {
    return min(0, -10) === 10;
});