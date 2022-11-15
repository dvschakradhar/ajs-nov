// Global scope - outside everyting
// Function scope - the body of the function
// local scope
// block scope

let globVar = 100;
function A() {
    let x = 10;
    // console.log(y); // throws error
    if(true) {
        let x = 20;
        console.log(globVar);
        let y = 5;
        console.log(x);
    }

    console.log("x after if block", x);
}

// A();

// console.log(z); //Cannot access 'z' before initialization
// let z = 50;

console.log(z); // error or 50 or something else? - undefined
var z = 50;
console.log("z after assignment", z);

// undefined means it knows that z exists but there is no value to print at that time.

// HOISTING

// pass 1 - whenver we write a code, JS will simply go line by line but does not execute anything
// during this pass, if it encounters any variable declaration, it will assign a memory location to it and move on

// 2nd pass - it actually executes the code and assigns values
console.log(z);
var z = 50;

//  |
// \/

var z;
console.log(z);
z = 50;



var a =10;
var b = 20;
var c = 30;

// gets converted to 

var a;
var b;
var c;

a = 10;
b = 20;
c = 30;


// In case of LET and CONST

console.log(p);
let p =20;
let q =30;

// gets converted to 

/***** TEMPORAL DEAD ZONE ******/
// let p;
// let q;
/***** END OF TEMPORAL DEAD ZONE ******/
console.log(p);
p = 20;
q = 30;
