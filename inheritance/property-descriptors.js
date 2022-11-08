let obj = {
    name: '10xAcad',
    age: 26
};

let arr = [1,2,3];

// for(let val of arr) {
//     console.log(val);
// }


Object.defineProperty(obj, 'city', {
    value: 'Hyderabad',
    writable: false,
    configurable: true,
    enumerable: true // observe -  this is true
} );

Object.defineProperty(obj, 'password', {
    value: 'testpwd',
    writable: false,
    configurable: true,
    enumerable: false // observe - this is false
} );

Object.defineProperty(obj, 'test', {
    value: 'dummy',
    writable: true, // observe - this is true - means you can edit this 
    configurable: false,
    enumerable: true // true means you can get this in loop
} );


obj.city = "Delhi";
obj.test = "random value";

// delete(obj.test);

obj.newProperty = "fahjlfhjla"
Object.seal(obj); // will not allow new properties but you can update existing properties
obj.anotherNewProperty = "dadaada";

Object.freeze(obj); // cannot add and update

obj.yetAnotherProperty = "anfjkahfa";

obj.age = 30;

for(let key in obj) {
    console.log("The value of " + key + " is " + obj[key]);
}
// console.log("The password is ",obj.password);

console.log(Object.getOwnPropertyNames(obj)); // prints password as well

console.log(Object.keys(obj)); // this does not show password

console.log(Object.values(obj));

console.log(Object.entries(obj));

 const myObj = {
    fname: "a",
    lname: "b"
 };

myObj.fname = "jsfhs";
myObj.surname = "fsfafa";
//  myObj = {};
 console.log(myObj);


 myObj.__proto__ = obj;
 // alternative
 Object.setPrototypeOf(myObj, obj); // is the order correct? interchange them to see

console.log(Object.getOwnPropertyNames(myObj)); // prints password as well

console.log(Object.keys(myObj)); // this does not show password

console.log(Object.values(myObj));


