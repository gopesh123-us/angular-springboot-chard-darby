"use strict";
class Animal {
    constructor(theName, theColor) {
        this._name = "";
        this._color = "";
        this._name = theName;
        this._color = theColor;
    }
    get name() {
        return this._name;
    }
    set name(theName) {
        this._name = theName;
    }
    get color() {
        return this._color;
    }
    set color(theColor) {
        this._color = theColor;
    }
}
let myAnimal = new Animal("Cheeta", "Stripped");
console.log(myAnimal.name);
console.log(myAnimal.color);
myAnimal.name = "Deer";
myAnimal.color = "Golden";
console.log(myAnimal.name);
console.log(myAnimal.color);
