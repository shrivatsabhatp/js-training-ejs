"use strict";

let square = x => x * x;

function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
}

// Writing test cases

test("Testing square of 2 returns 4", () => {
    return square(2) === 4;
});
test("Testing square of 2 returns 5", () => {
    return square(2) === 5;
});
