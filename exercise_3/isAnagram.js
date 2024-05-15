/* 6
Two words are anagrams if you can rearrange the letters from one to spell the other.
 Write a function called isAnagram that takes two strings and returns true if they are anagrams.
 */

"use strict";

let isAnagram = (stringA, stringB) => {
    return stringA.toUpperCase().split("").sort().join() === stringB.toUpperCase().split("").sort().join() ? true : false;
};

console.log(isAnagram("Listen", "Silent"));
console.log(isAnagram("sun", "son"));

