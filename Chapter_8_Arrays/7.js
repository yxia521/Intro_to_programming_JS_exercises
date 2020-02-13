// Use reduce to compute the sum of the squares of all of the numbers in an array:

let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83
// Note that 83 is 3*3 + 5*5 + 7*7.

function sumOfSquares(arr) {
  return arr.reduce((accumulator, value) => {
   return accumulator + value * value;
  }, 0)
};

// if no 0 is supplied, the total will be 77
// cuz 3 will be served as first element, and skipped, will not be passed to
// callback body as the current value.
// 3 + 5*5 + 7*7 = 77
