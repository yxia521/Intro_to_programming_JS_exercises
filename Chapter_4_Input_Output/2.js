/* 
Modify the greeter.js program to ask for the user's first and last names 
separately, then greet the user with their full name.
*/

let rlSync = require('readline-sync');
let firstName = rlSync.question('What is your first name? ');
let lastName = rlSync.question('What is your last name? ');

// browser
// let firstName = prompt('What is your first name? ');
// let lastName = prompt('What is your last name? ');

console.log(`Hello, ${firstName} ${lastName}!`);
