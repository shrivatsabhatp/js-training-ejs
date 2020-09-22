/* 5
Write a function called isSorted that takes a list as a parameter and returns true if the list is 
sorted in ascending order and false otherwise. For example:

>>> isSorted([1, 2, 2])
true
>>> isSorted(['b', 'a'])
false
*/

"use strict";

let isSorted = param => param.join("") === param.sort().join("");

console.log(isSorted([1, 2, 2]));
console.log(isSorted(["b", "a"]));