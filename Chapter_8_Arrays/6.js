// Use map and filter to first determine the lengths of all the elements in an 
// array of string values, then discard the even values (keep the odd values).

// Note that it is possible to solve this problem without using map. However, 
// our intent is to show how you can combine multiple functions to achieve a 
// desired result.

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  let lengths = arr.map(string => {
    return string.length;
  });

  return lengths.filter(value => {
      return value % 2 === 1;
  });
}
