class Car {
    private _model: string;
    private _trim: string;
    private _seats: number;
    private _color: string;

    constructor(theModel: string, theTrim: string, theSeats: number) {
        this._model = theModel;
        this._trim = theTrim;
        this._seats = theSeats;
    }

    get model(): string {
        return this._model;
    }

    set model(theModel: string) {
        this._model = theModel;
    }

    get trim(): string {
        return this._trim;
    }

    set trim(theTrim: string) {
        this._trim = theTrim;
    }

    get seats(): number {
        return this._seats;
    }

    set seats(theSeats: number) {
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
