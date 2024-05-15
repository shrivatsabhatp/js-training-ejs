"use strict";
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));
// → 9
//  function to accept any number of arguments you put three dots before the function’s last parameter
/*
When such a function is called, the "rest parameter" is bound to an array containing all further arguments. 
If there are other parameters before it, their values aren’t part of that array. When, as in max, 
it is the only parameter, it will hold all arguments.
*/
