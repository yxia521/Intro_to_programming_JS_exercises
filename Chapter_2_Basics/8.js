/* 
Will an error occur if you try to access an array element with an index 
that is greater than or equal to the length of the array? For example:
*/

var foo = ['a', 'b', 'c'];
foo.length;  // returns 3
foo[3];      // will this result in an error?

// No, JS returns undefined when you refer a number that is out of scale.
