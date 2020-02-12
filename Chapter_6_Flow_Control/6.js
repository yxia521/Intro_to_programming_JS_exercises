What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array

// This code logs 'Not Empty'.
// false
// null
// undefined
// 0
// NaN
// ''
// evaluate to false by JS. [] is a truthy value, so only line 5 will be executed.
