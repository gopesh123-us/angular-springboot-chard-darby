"use strict";
class Car {
    constructor(theModel, theTrim, theSeats) {
        this._model = theModel;
        this._trim = theTrim;
        this._seats = theSeats;
    }
    get model() {
        return this._model;
    }
    set model(theModel) {
        this._model = theModel;
    }
    get trim() {
        return this._trim;
    }
    set trim(theTrim) {
        this._trim = theTrim;
    }
    get seats() {
        return this._seats;
    }
    set seats(theSeats) {
        this._seats = theSeats;
    }
}
//using the class
let myCar = new Car("Toyota", "Sedan", 4);
console.log(myCar.model);
console.log(myCar.seats);
console.log(myCar.trim);
myCar.model = "Honda";
myCar.trim = "SUV";
myCar.seats = 5;
console.log("\n");
console.log(myCar.model);
console.log(myCar.seats);
console.log(myCar.trim);
