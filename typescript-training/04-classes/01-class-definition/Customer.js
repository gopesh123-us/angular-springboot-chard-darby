"use strict";
class Customer {
    constructor(theFirst, theMiddle, theLast) {
        this._age = 0;
        this._gender = "";
        this.firstName = theFirst;
        this.middleName = theMiddle;
        this.lastName = theLast;
    }
    set age(theAge) {
        this._age = theAge;
    }
    get age() {
        return this._age;
    }
    set gender(theGender) {
        this._gender = theGender;
    }
    get gender() {
        return this._gender;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(theFirst) {
        this.firstName = theFirst;
    }
    getMiddleName() {
        return this.middleName;
    }
    setMiddleName(theMiddle) {
        this.middleName = theMiddle;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(theLast) {
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
