"use strict";
/*
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, 
write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces 
a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method 
does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(array) {
    let newArray = [];
    for (let index = array.length - 1; index >= 0; index--) {
        newArray.push(array[index]);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    let oldArray;
    for (let index = 0; index < Math.floor(array.length / 2); index++) {
        oldArray = array[index];    // swap 
        array[index] = array[array.length - 1 - index];
        array[array.length - 1 - index] = oldArray;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
console.log(arrayValue.reverse());