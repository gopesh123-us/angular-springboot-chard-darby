"use strict";
let reviews = [5, 6, 9, 1.4, 8, 10];
for (let review of reviews) {
    console.log(review);
}
for (let i = 0; i < reviews.length; i++) {
    console.log(`II ${reviews[i]}`);
}
//compute average
let total = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total = total + reviews[i];
}
let average = total / reviews.length;
console.log(`Review average is  ${(average).toFixed(2)}`);
