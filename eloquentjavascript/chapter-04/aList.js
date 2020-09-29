"use strict";
/*
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
Also write a listToArray function that produces an array from a list. 
Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to 
 the front of the input list, and nth, which takes a list and a number and returns the element at the 
 given position in the list (with zero referring to the first element) or undefined when there is no 
 such element.
*/

let arrayToList = array => {
    let list = null;
    for (let element = array.length - 1; element >= 0; element--) {
        list = { value: array[element], rest: list };
    }
    return list;
};

let listToArray = list => {
    let array = [];
    for (let ele = list; ele !== null; ele = ele.rest) {
        array.push(ele.value);
    }
    return array;
};

let prepend = (value, list) => {
    return { value, rest: list };
};

let nth = (list, number) => listToArray(list)[number];

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
