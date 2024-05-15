/* 8
 A word is said to be a “doubloon” if every letter that appears in the word appears exactly twice.
 Here are some example doubloons found in the dictionary:

Abba, Anna, appall, appearer, appeases, arraigning, beriberi, bilabial, boob, Caucasus, coco,
Dada, deed, Emmett, Hannah, horseshoer, intestines, Isis, mama, Mimi, murmur, noon, Otto, papa,
peep, reappear, redder, sees, Shanghaiings, Toto
Write a function called isDoubloon that takes a string and checks whether it is a doubloon.
To ignore case, invoke the toLowerCase method before checking.
 */

"use strict";

// let isDoubloon = string => {
//     let count = 0;
//     let s = string.toLowerCase().split("");
//     s.some(
//         (element, index, array) => {
//             // if(array.lastIndexOf(element) !== index) {
//             //     count++;
//             // }
//             array.lastIndexOf(element) !== index && count++;
//         }
//     );
//     return count % 2 === 0;
// };

let isDoubloon = string => {
    let count = 0;
    let s = string.toLowerCase().split("");
    s.some(
        (element, index, array) => array.lastIndexOf(element) !== index && count++
    );
    return count % 2 === 0;
};

console.log(isDoubloon("redder"));