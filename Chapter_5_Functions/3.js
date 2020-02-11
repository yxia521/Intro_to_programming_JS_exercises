/*
Write a program that uses a multiply method to multiply two numbers and 
returns the result. Ask the user to enter the two numbers, then output 
the numbers and result as a simple equation.
*/

/* --------- example ----------
$ node multiply.js
Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566
*/

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return number;
}

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`)
