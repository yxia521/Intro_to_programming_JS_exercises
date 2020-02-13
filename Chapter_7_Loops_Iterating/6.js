// Reimplement the factorial function from exercise 2 using recursion. 
// Once again, you may assume that the argument is a valid non-negative integer.

function factorial(number) {
  if (number < 2) {
    return 1;
  } else {
    return factorial(number - 1) * number
  }
}

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
