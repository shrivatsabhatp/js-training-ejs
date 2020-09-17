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
        console.log(`${index} bottles of water on the wall,`);
        console.log(`${index} bottles of water,`);
        console.log(`ya’ take one down,`); 
        console.log(`ya’ pass it around,`);
        console.log(`${index - 1} bottles of water on the wall.\n`);
    }
    console.log(`No bottles of water on the wall,`);
    console.log(`no bottles of water,`);
    console.log(`ya’ can’ t take one down,`); 
    console.log(`ya’ can’ t pass it around,`);
    console.log(`’cause there are no more bottles of water on the wall!\n`);
}

poem(10);