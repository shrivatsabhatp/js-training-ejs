/* 7
 Write a function called hasDuplicates that takes an array and returns true
 if there is any element that appears more than once. It should not modify the original array.
 */

"use strict";

let isDuplicates = string => {
    let text = string.split("");    // ['r', 'o', 'b', 'o', 's', 'o', 'f', 't']
    return text.some(
        (element, index, array) => array.lastIndexOf(element) !== index
    );
};

console.log(isDuplicates("robosoft"));
console.log(isDuplicates("abcd"));

// element = e, index = i, array = a
// e = r, i = 0, a =  ['r', 'o', 'b', 'o', 's', 'o', 'f', 't'] 
// a.lastIndexOf(r) => 0 and i = 0
// 0 != 0 (false)

// e = o, i = 1, a =  ['r', 'o', 'b', 'o', 's', 'o', 'f', 't'] 
// a.lastIndexOf(r) => 5 and i = 1
// 5 != 1 (true) [there common letter in 1st place and 5th place]