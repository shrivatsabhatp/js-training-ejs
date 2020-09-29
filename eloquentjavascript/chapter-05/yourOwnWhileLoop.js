"use strict";

function loop(value, test, check, returnValue) {
    for (; test(value); value = check(value)) returnValue(value);
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1