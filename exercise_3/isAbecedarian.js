/* 9
A word is said to be “abecedarian” if the letters in the word appear in alphabetical order.
For example, the following are all six-letter English abecedarian words:

abdest, acknow, acorsy, adempt, adipsy, agnosy, befist, behint, beknow,
bijoux, biopsy, cestuy, chintz, deflux, dehors, dehort, deinos, diluvy, dimpsy
Write a function called isAbecedarian that takes a String and returns a boolean indicating whether the word is abecedarian
*/
"use strict";

let isAbecedarian = string => {
    for(let index = 0; index < string.length - 1; index++) {
        if( string.charAt(index) > string.charAt(index+1) ) {
            return false;
        }
    }
    return true;
};

console.log(isAbecedarian("abdest"));