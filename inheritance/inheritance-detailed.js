// IN JS, object is the basic stuff on which most of the things are built.
// Everything in JS is an object


let obj1 = {
    name: "10xAcad",
    location: "Hyderabad",
    greet: function() {
        console.log("Hi Im" + this.name + " from " + this.location);
    }
};

console.log(obj1.name);
console.log(obj1.greet());


let arr =  [1,2,3];

arr.push(4);
console.log("The length of the array is::::::",arr.length);


// When we try to access something (method) on arr, 
//JS first checks if that is present on arr
// If not, goes down the prototype chain to find it on Array
//If not found there as well, goes down to Array's prototype i.e Object
//If not found there as well, goes down to Object's prototype i.e null
// It doesnot find any and returns back

// If you want to add a method that should be accessible to all instances of array, add it to the prototype of it

arr.__proto__.hi = function() {console.log("Hi there")};
