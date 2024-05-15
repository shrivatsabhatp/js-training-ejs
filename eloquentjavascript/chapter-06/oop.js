//Java c++ slightly different in javascript
// class and objects - javascript does not have class in the strict sense

// data and behaviour into one program entity helps us build concepts - bankaccount, useraccount
// concept videoplayer data and behaviour

// local details of how things are done is restricted to that part of  the program.
// Database - localise database, which database - mysql, mongodb, locally or cloud
// use the service provided by database handling part of the code
// Interface and hide implementation. Methods provide interface and client code rely 
// only on interface and implementation detials can be chnaged later without affecting the 
// rest of the program. 

// Program to interface not to the implementation.
// add row, delete row, update row, create row CRUD - interface
// watch - dial with three hands - mechanic, quartz
// public contract 
// running Tap -  turn off, turn on, checkWhetherWaterflowing at this point
// people can not code with the knowledge of internal details - public, private

// Object - programmer usually marks private type or anything which implementation detail

// _databaseType = "mySQL" without changing interface
// _databaseType = "mongdb"

// Array or Math => documentation
// if db.__databaseType === "mySQL" // create, delete, update, read => modify
// interface breaking change
// db.update() => db.modify()

// method? property which holds function value
"use strict";



// almost all objects - associated with a fallack obect for properties
// prototype
// prototype chain
// obj -> prototype -> prototype -> prototype ->null

// function -> Function.prototype -> Object.prototype -> null
// Array.prototype.map
// [] -> Array.prototype -> Object.prototype -> null
// {} -> protouser -> Object.prototype -> null
let protoUser = {
    describe() {
        console.log(`${this.name} is ${this.age} old`);
    }
}
// prototype store methods where instances share
// Make that as prototype of the object to be created
// stick the properties of object created 

// Class informal way to create equivalent class

// constructor function
function makeUser(name, age) {
    let user = Object.create(protoUser);
    user.name = name;
    user.age = age;
    return user;
}

function User(name, age) {
    this.name = name;
    this.age = age;
    // implicitly returns this
}
User.prototype.describe = function () {
    console.log(`${this.name} is ${this.age} old`);
}

class ES6User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`${this.name} is ${this.age}`);
    }
}

// ES6User.prototype -> Object.prototype -> null
ES6User.prototype.foo = function () {
    console.log("Foo called");
}

User.prototype.toString = function () {
    return `<< ${this.name}: ${this.age}>>`;
}

let user1 = new User("Ravi", 10);

let user2 = new User("Jane", 40);
let user3 = new ES6User("Raj", 50);

console.log(Object.getPrototypeOf(user1) === User.prototype);
console.log(Object.getPrototypeOf(user2) === User.prototype)
console.log(Object.getPrototypeOf(user3) === ES6User.prototype)
console.log(Object.getPrototypeOf(User.prototype) === Object.prototype);

console.log(Object.getPrototypeOf(User) === Function.prototype);

user1.describe();
user2.describe();
user3.describe();
user3.foo();

// user1 -> User.prototype -> Object.prototype -> null

console.log(user1.toString());
console.log(Math.min.toString());
user3.describe();
// name and age necessarily from from ESUser
// Synthetic sugar

// computed property
// Spread operator

// Inheritance -> share code but provide an improvemnt

class PrivilegedUser extends ES6User {
    constructor(name, age, privileges) {
        super(name, age);
        this.privileges = privileges
    }
    printPrivileges() {
        for (let privilege of this.privileges) {
            console.log(privilege);
        }
    }
    describe() {
        console.log(`${this.name} is ${this.age} : privileges - ${this.privileges}`);
        
    }
}
// privUser -> PrivilegedUser.prototype -> User.prototype -> Object.prototype -> null
let privUser = new PrivilegedUser("Ragu", 30, ["admin", "superuser"]);
privUser.describe();
privUser.printPrivileges();
console.log(privUser.name);

// instanceof

console.log(privUser instanceof PrivilegedUser);
console.log(privUser instanceof ES6User);
console.log(user3 instanceof PrivilegedUser);

let strRep = new String(user1); // polymorphic code - works on toString method
console.log(strRep);

