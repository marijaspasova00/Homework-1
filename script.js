const pricePerPhone = 119.95;
let numberOfPhones = 30;
// let userInputPhones = prompt("Input the number of phones: ");
const tax = (pricePerPhone * (5/100));
// console.log(pricePerPhone * tax);
const priceWithTax = (pricePerPhone + tax);
const actualPrice = (numberOfPhones * priceWithTax);
console.log("The actual price of phones is: ", actualPrice);