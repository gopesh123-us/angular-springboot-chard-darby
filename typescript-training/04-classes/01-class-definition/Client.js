"use strict";
class Client {
    constructor(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}
let myClient = new Client("Rajiv", "Malik");
console.log(myClient.firstName);
console.log(myClient.lastName);
myClient.firstName = "Martin";
myClient.lastName = "Dixon";
console.log(myClient.firstName);
console.log(myClient.lastName);
