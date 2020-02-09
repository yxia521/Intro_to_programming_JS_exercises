/* 
5. Explain why this code logs '510' instead of 15.
*/
console.log('5' + 10);


/*
This is implicit type coercion. When two different data types
(one string, one any other) need to be concatenated by +, 
JS always produces a string.
JS first converts the number 10 to string '10', then concatenates
two strings to a string '510'
*/


/* 
6. Refactor the code from the previous exercise to use 
explicit coercion, so it logs 15 instead.
*/

console.log(Number('5') + 10)

