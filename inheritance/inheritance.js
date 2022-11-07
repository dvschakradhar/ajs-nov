//inheritance

class Car {  // blueprint of a car

    constructor() {
        this.color =  "white";
        this.engine = "1200cc";
    }

    startEngine() {
        console.log("Engine started!");
    }

    applyBrakes() {
        console.log("Brakes applied");
    }

}

class ElectricCar extends Car{  // blueprint of a car
    constructor() {
        super();
        this.color =  "Red";
    }

    // applyBrakes() {
    //     console.log("Electric car Brakes applied");
    // }

}

let baleno1 = new Car();  // actual car manufactured
let baleno2 = new Car();  // actual car manufactured
let baleno3 = new Car();  // actual car manufactured
let baleno4 = new Car();  // actual car manufactured
let baleno5 = new Car();  // actual car manufactured

// baleno1.startEngine();  // "engine started"

let tesla = new ElectricCar();

tesla.applyBrakes();


//JS is not an object oriented language

// It doesnot have OOPS concepts

//It supports inheritance but in a different way using prototypes

// what is inheritance? 

// It is a pattern or a way where one object can borrow somnething from another object (parent object)





