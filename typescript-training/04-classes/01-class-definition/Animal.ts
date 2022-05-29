class Animal {
    private _name: string = "";
    private _color: string = "";

    constructor(theName: string, theColor: string) {
        this._name = theName;
        this._color = theColor;
    }

    public get name(): string {
        return this._name;
    }

    public set name(theName: string) {
        this._name = theName;
    }

    public get color(): string {
        return this._color;
    }

    public set color(theColor: string) {
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
