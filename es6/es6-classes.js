class Car {
    color;
    fuelType;
    length;
    engineStarted = false;

    constructor(color, fuelType) {
        this.color = color ? color : 'white';
        this.fuelType = fuelType ? fuelType : 'petrol';
        this.length = '1500mm';
        // console.log(this) // amitCar
    }

    get getFuelType() {
        return this.fuelType;
    }
    get getColor() {
        return this.color;
    }

    set setColor(input) {
        this.color = input;
    }

    startEngine() {
        this.engineStarted = true;
        console.log("Engine started!");
    }

    applyBrakes() {
        console.log("Brakes applied!");
    }
}

class HybridCar extends Car {

    constructor(color) {
        super(color); // calls parent constructor
    }

    startEngine() {
        console.log("Running on batteries");
    }

}

let seltos = new Car();

let amitCar = new Car();
let rahulCar = new Car();

// console.log(seltos.startEngine());
let fuel = seltos.getFuelType;

let redSeltos =new Car('red');
// console.log(redSeltos.getColor);

let seltosHybrid = new HybridCar('yellow');

let seltosHybrid2 = new HybridCar();

seltosHybrid2.setColor = 'green';
console.log(seltosHybrid2.getColor);


console.log(seltosHybrid.getColor);



// prototypes

// function car() {

// }

// car.prototype.startEngine = function() {

// }



