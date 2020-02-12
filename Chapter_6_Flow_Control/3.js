// Let's improve our previous implementation of evenOrOdd. 
// Add a validation check to ensure that the argument is an integer. 
// If it isn't, the function should issue an error message and return.

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('This is not an integer.') 
    return; // must return, otherwise continue evaluates next if statement
  }
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
    } 
  } 

evenOrOdd(9);
evenOrOdd(8);
evenOrOdd('hi');
