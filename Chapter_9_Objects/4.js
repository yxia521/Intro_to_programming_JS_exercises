// Create an array from the keys of object obj below, with all values converted to 
// uppercase. Your implementation must not mutate obj. The order of the array does not matter.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

Object.keys(obj).map(key => key.toUpperCase());
// => [ 'B', 'A', 'C' ]
obj;
// => { b: 2, a: 1, c: 3 }
