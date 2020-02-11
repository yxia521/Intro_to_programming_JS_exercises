// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/*
This code logs 1. The foo function does NOT affect the value of variable bar.
We initialize a global variable bar with value 1 on line 3. 
On line 5, a new local variable bar is intialized with value 2 within foo function,
it has only local scope and also doesn't mutate the caller when we call foo
function on line 8.
So even though we call foo() on line 8, the global variable bar's value 
never change, calling console.log outputs 1.
*/
 
// compare this result to following code:

let bar = 1;
function foo() {
  bar = 2;
}

foo();
console.log(bar);

/* 
This code logs 2, because the global variable bar on line 23 has global scope
accessible all the throughout the program.
Within the function foo, we are reassigning the bar with value 2, so bar is now
referencing 2.
Thus, after calling foo, line 29 logs 2.
*/
