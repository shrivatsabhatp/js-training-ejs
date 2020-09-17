"use strict";
// let isEven = number => number % 2 ? false : true;
let isEven = number => (number >= 0) && (number % 2 ? false : true); 
// check for ppositive number then check for even number

console.log(isEven(75));
console.log(isEven(50));
console.log(isEven(-1));
console.log(isEven(-10));
console.log(isEven(-7));