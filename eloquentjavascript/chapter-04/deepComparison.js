"use strict";
/*
Write a function deepEqual that takes two values and returns true only if they are the same value or 
are objects with the same properties, where the values of the properties are equal when compared with a 
recursive call to deepEqual.
To find out whether values should be compared directly (use the === operator for that) or have their 
properties compared, you can use the typeof operator. If it produces "object" for both values, you should 
do a deep comparison. But you have to take one silly exception into account: because of a historical accident, 
typeof null also produces "object".
The Object.keys function will be useful when you need to go over the properties of objects to compare 
them.
*/

let deepEqual = (x, y) => {
    // console.log(typeof(x), typeof(y));
    if (x === y) return true;

    if (Object.keys(x).length != Object.keys(y).length) return false; // Object.keys() returns array 

    for (let key of Object.keys(x)) {
        // console.log(Object.keys(x), Object.keys(x).includes(key));
        // console.log(Object.keys(y), Object.keys(y).includes(key));
        if (!Object.keys(y).includes(key) || !deepEqual(x[key], y[key])) return false;
    }
    return true;
};

let object = { here: { is: "an" }, object: 2 };
console.log(deepEqual(object, object));
console.log(deepEqual(object, { here: 1, object: 2 }));
console.log(deepEqual(object, { here: { is: "an" }, object: 2 }));

