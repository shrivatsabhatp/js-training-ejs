/*
Write a function named rightJustify that takes a string named s as a parameter
and prints the string with enough leading spaces so that the last letter of the string is in
column 70 of the display.
Hint: Use string concatenation and loop. Also, string has a property called length.
Ex:
>rightJustify('monty')
                                                                monty
*/

const spaceLen = 70;

function rightJustify(s) {
    let output = '';
    for (let index = 1; index < spaceLen - s.length; index++) {
        output += ' '; 
    }
    return output + s;
}

console.log(rightJustify('monty'));