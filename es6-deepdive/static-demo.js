// static is a keyword
// it is used for methods
// class methods

class Bus {

    constructor() {
        
    }

    startEngine() {
        console.log("vroom vroom! engine started");
        // this.classMethod(); // throws error
    }

    static classMethod() {
        console.log("This is a static method");
    }

}

let volvo =  new Bus();
let tata  = new Bus();


volvo.startEngine();
tata.startEngine();

// console.log(volvo.classMethod()); // throws error
// console.log(tata.classMethod()); // throws error

Bus.classMethod();


