// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4; 
console.log(array2);    // [1, 4, 3]
console.log(array1[1]); // 4

// logs [1, 4, 3]
// On line 4, we are initializing and assigning array2 with the value [1, 2, 3],
// array1 and array2 now are referencing the same array object.
// On line 5, we're reassigning a specific element of array1 at the place of index 1,
// recall that array1 is object, which is mutable, so we're mutating the array1 itself,
// now array1 has a new value [1, 4, 3], since they're referencing the same object,
// this object is mutated, so is array2.
