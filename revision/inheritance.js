class Car {
    startEngine() {

    }
}

class ElectricCar extends Car {

}


function Car() {

}

Car.prototype.startEngine = function () {

}

function ElectricCar() {

}

ElectricCar.prototype = Car;