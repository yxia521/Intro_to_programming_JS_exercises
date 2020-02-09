/* What happens when you run the following program? Why do we get that result?
{
  let foo = 'bar';
}

console.log(foo);
*/

/* It raises an error: Uncaught ReferenceError: foo is not defined
cuz let creates variable foo that only has block scope, which means it's only
accessible within the block, it can't be accessed outside of the block
*/
