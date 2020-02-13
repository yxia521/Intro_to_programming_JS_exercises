// Use the filter method to implement a function that returns a new array with all 
// of the integers from the input array. It should ignore all non-integer values 
// from the input.
 
// You can use Number.isInteger(value) to determine whether a numeric value 
// is an integer. It returns true if the value is an integer, false otherwise.

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]

function removeNonInteger(array) {
  let intArr = [];
  array.map(element => {
    if (Number.isInteger(element)) {
      intArr.push(element);
    }
  })
  return intArr;
};

// --- better using filter ---
function removeNonInteger(array) {
  return array.filter(element => {
    return Number.isInteger(element);
  })
}
