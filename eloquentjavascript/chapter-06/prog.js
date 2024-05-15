"use strict";
class Rectangle {
    constructor(x, y, width, height) {
        this.origin = {x, y};
        this.size = {width, height};
    }
    get center () {
        let centerX = this.origin.x + this.size.width / 2;
        let centerY = this.origin.y + this.size.height / 2;
        return {x: centerX, y: centerY};
    }
    set center(newCenter) {
        this.origin.x = newCenter.x - this.size.width / 2;
        this.origin.y = newCenter.y - this.size.height / 2;
    }
}


let rect = new Rectangle(2, 4, 10, 4);
console.log(rect);
console.log(rect.center);
rect.center = {x: 10, y: 10};
console.log(rect);
// Object oriented programming is all about polymorphism
// write a program / algorithm with a knowledge that objects given to you have certain
// methods
// Sorting algorithm works on array -> Objects in the array are comparable
// obj - compare(val) => 0 if equal, 1 if obj > val, -1 if obj < val
// Don't care what objects are there in array, what is their class etc
// Poly works on multiple kind of objects as long as it has compare method

// interface with compare => Objects with compare method with the behavior 0 if equal, 1 if obj > val, -1 if obj < val

// ES6USer - compare based on age
// FileDescriptor - based on size
// Recipe - cooking time
// Book - number of pages
// Car - can not be compare
// BankAccount - can not be compared
// CovidDailyRecovered - compare

// Write algorithm, code it simply works for future object if it can have required method
// write code today, and it works for tomorrow's objects! 
// iterations = 
// 1. Method by name - Symbol.iterator -> iterator - done
// 2. Return object which has to have a next() method - done
// 3. next() retuen object {value: current value, done: <boolean value>} - done

/*polymorphic code*/
// for of
// spread operation
// Array.from(iterable)

class Range {
    constructor(start, end, step) {
        this.start = start;
        this.end = end;
        this.step = step;
    }
    [Symbol.iterator]() {
        // return new RangeIterator(this);
        return {
            start: this.start,
            end: this.end,
            step: this.step,
            position: this.start,
            next() {
                if (this.position < this.end) {
                    let value = {value: this.position, done: false};
                    this.position += this.step;
                    return value;
                }
                return {value: undefined, done: true};
            }
        }
    }

}
/*
class RangeIterator {
    constructor(range) {
        this.range = range;
    }
    next() {

    }

}*/

let range = new Range(1, 10, 1);
// polymorphic code
for(let each of range) {
    console.log(each);
}

let arr1 = [20, 30, 40];
let arr = [...arr1, ...range];
console.log(arr);
let array = Array.from(range);
console.log(array);

// set and get - read the Rectangle example above as exercise:


