/* 
In the exercises for the previous chapter, you wrote a dynamic greeter 
program named greeter.js. Add a function to this program that solicits 
the user's first and last names in separate invocations; the function 
should return the appropriate name as a string. Use the return values to 
greet the user with their full name.
*/

let rlSync = require('readline-sync');
function getName() {
  let firstName = rlSync.question("What's your first name?\n");
  let lastName = rlSync.question("What's your last name?\n");
  let fullName = firstName + ' ' + lastName;
  return fullName;
}

console.log(`Hello, ${getName()}!`);

// --- ls sol ---
function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? '); // seperate invocationa
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
