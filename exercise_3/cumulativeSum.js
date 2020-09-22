/* 2
Write a function called cumulativeSum that takes an array of numbers and
returns the cumulative sum; that is, a new array where the ith element is the sum of the first i+1 elements
from the original array. For example:

>>> let t = [1, 2, 3]
>>> cumulativeSum(t)
[1, 3, 6]
*/

"use strict";

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const cumulativeSum = array => {
    let cSum = [];
    for(let number of array) {
        cSum.push(array.slice(0, number).reduce(reducer));
    }
    return cSum;
};

let array = [1, 2, 3];
console.log(cumulativeSum(array));