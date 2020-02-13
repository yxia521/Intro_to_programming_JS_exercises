// This problem is more challenging than most in this book. Don't worry if you can't solve it on your own.

// Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. 
// Instead, try to use the reduce method.


function oddLengths(arr) {
  return arr.reduce((accumulator, string) => {
    if (string.length % 2 === 1) {
      accumulator.push(string.length);
    } 
    
    return accumulator;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
