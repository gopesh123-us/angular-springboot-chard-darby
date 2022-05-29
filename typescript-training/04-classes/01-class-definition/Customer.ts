class Customer {
    private firstName: string;
    private middleName: string;
    private lastName: string;

    private _age: number = 0;
    private _gender: string = "";

    constructor(theFirst: string, theMiddle: string, theLast: string) {
        this.firstName = theFirst;
        this.middleName = theMiddle;
        this.lastName = theLast;
    }

    public set age(theAge: number) {
        this._age = theAge;
    }

    public get age(): number {
        return this._age;
    }

    public set gender(theGender: string) {
        this._gender = theGender;
    }
    public get gender(): string {
        return this._gender;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public setFirstName(theFirst: string): void {
        this.firstName = theFirst;
    }

    public getMiddleName(): string {
        return this.middleName;
    }

    public setMiddleName(theMiddle: string): void {
        this.middleName = theMiddle;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(theLast: string): void {
        this.lastName = theLast;
    }

}

let myCustomer = new Customer("Samuel", "Luther", "Ticha");

/*
//old code without constructor
myCustomer.firstName = "Martin";
myCustomer.middleName = "Luther";
myCustomer.lastName = "King";
*/

/*
//old code -- will not work the private properties
console.log(myCustomer.firstName);
console.log(myCustomer.middleName);
console.log(myCustomer.lastName);
*/

console.log(myCustomer.getFirstName());
console.log(myCustomer.getMiddleName());
console.log(myCustomer.getLastName());

//using setters
myCustomer.setFirstName("Gopi");
myCustomer.setMiddleName("Chand");
myCustomer.setLastName("Thakur");

console.log("\n");

console.log(myCustomer.getFirstName());
console.log(myCustomer.getMiddleName());
console.log(myCustomer.getLastName());

console.log("\n");

myCustomer.age = 98;
myCustomer.gender = "male";
console.log(myCustomer.age);
console.log(myCustomer.gender);




