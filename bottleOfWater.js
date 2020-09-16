/*
The purpose of this exercise is to take a problem and break it into smaller problems, and to solve the smaller problems by 
writing simple functions.
Consider the first verse of the song “99 Bottles of water:

99 bottles of water on the wall,
99 bottles of water,
ya’ take one down, ya’ pass it around,
98 bottles of water on the wall.

Subsequent verses are identical except that the number of bottles gets smaller by one in each verse, until the last verse:

No bottles of water on the wall,
no bottles of water,
ya’ can’t take one down, ya’ can’t pass it around,
’cause there are no more bottles of water on the wall!

And then the song (finally) ends.
*/
"use strict";
function poem(count = 99) {
    for (let index = count; index > 0; index--) {
        console.log(`${index} bottles of water on the wall,
        \n${index} bottles of water,\nya’ take one down,\nya’ pass it around,${index - 1} bottles of water on the wall.\n`);
    }
    console.log("No bottles of water on the wall,\nno bottles of water,\nya’ can’ t take one down, ya’ can’ t pass it around, \n’cause there are no more bottles of water on the wall!");
}

poem();