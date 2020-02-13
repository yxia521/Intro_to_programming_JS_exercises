In the following code, what are the final length values for array1, array2, array3, array4, and array5?

let array1 = [1, 2, undefined, 4]; // 4

let array2 = [1];
array2.length = 5; // 5, filling the last 4 as <4 empty items>

let array3 = [];
array3[-1] = [1]; // 0, -1 negative, add an object, doesn't count to length

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // 3, removes the last 2 elements

let array5 = [];
array5[100] = 3; // 0, 100 positive, so [<100 empty items>, 3]
