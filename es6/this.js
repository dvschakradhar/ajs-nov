//THIS
// 'this' keyword is a shorthand for the owner
// ownership depends on situation

// console.log(this); // {}



// If I print 'this' on a blank js file, it is global (window)
// because it is outside everything

// First we should understand the scope

// Global scope - outside everyting
// Function scope - the body of the function
// local scope
// block scope


// function

// function A() {
//  let x = 10;
//  console.log(x);
// //  console.log(y);
//  if(true) {
//     let y = 20;
//     console.log("x here", x);
//  }
// }

// A();

// function B() {
//     console.log(this);
// }

// B();

// for functions this refers to global.


//  Places of interest where we are looking for the contex/owner of 'this' keyword

//1. Global - window
//2. Function - global/window
//3. objects (methods) - object
//4. classes(constructor) - NEW keyword - newly created object
//5. Arrow functions - depends on where you wrote the arrow funntion - refers to the parent context


let person = {
    name: 'john',
    getName: function() {
        console.log(this.name);
    }
}

person.getName();

// A function which is a propery of an object is called method

// For methods, the 'this' keyword refers to the object

// In case of constructor invocation or a new object created with 'new' keyword, the reference is to the newly created object.

// ********** Arrow functions

//normal function
// function add(a, b) {
//     return a + b;
// }

// arrow function
 
let add = (a,b) => a + b;

let multiplyBy5 = a => a*5;

console.log(add(2,3));





