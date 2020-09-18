"use strict";

let output;

for (let number = 1; number <= 100; number++) {
    output = "";
    if (number % 3 === 0) output += "Fizz";
    if (number % 5 === 0) output += "Buzz";
    console.log(output || number);
}