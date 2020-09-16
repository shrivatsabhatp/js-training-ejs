/*
Declare a function that takes three numbers as arguments and returns 
the sum of the squares of the two larger numbers.
*/

function square(number) {
    return number * number;
}

function sumOfSquaresOfTwoLargeNumber(number1, number2, number3) {
    return square(number1) + square(number2) + square(number3) -
           square(number1 > number2 ? (number2 > number3 ? number3 : number2)
           : (number1 > number3 ? number3 : number1));
           // subtract the samllest square from sum
}

console.log(sumOfSquaresOfTwoLargeNumber(1, 2, 3));