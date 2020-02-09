// Take a look at this code snippet:
let foo = 'bar';
{
  let foo = 'qux';
}
console.log(foo);
// What does this program log to the console? Why?

/*
This code logs 'bar'.
We initialize variable foo with a value 'bar' outside of the block, 
it's accessible to within block as well as after block ends.
Within the block, we initialize a new variable foo with value 'qux' that 
shadows (hides) the variable from line 1, but it goes out of scope on line 7
when the block ends.
Therefore, after block ends, when we want to log the value of foo, we actually 
log the first foo we initialize on line 1.
*/
