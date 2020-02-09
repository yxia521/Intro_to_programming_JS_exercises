// Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

let number = 4936;
let thousands = Math.floor( number / 1000 );
console.log(thousands);

let hundreds = Math.floor( number % 1000 / 100 );
console.log(hundreds);

let tens = Math.floor( number % 100 / 10 );
console.log(tens);

let ones = number % 10;
console.log(ones);
