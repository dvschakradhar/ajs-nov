class Car {
    constructor(){
        this.mileage = 20;
    }

    get getMileage() {
        return this.mileage;
    }

    set setMileage(abrakadabra) {
        this.mileage = abrakadabra;
    }

}

let saiSwift = new Car();
saiSwift.mileage // 20

saiSwift.getMileage // without brackets()
saiSwift.setMileage = 30;
