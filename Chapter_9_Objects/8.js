// What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); 
// => 'hi' 
// cuz foo is an object, which is mutable. On line 11, we mutates the value of foo
// by assigning 'a' property to a new string 'hi'

console.log(qux); 
// => 'hello' 
// cuz qux is primitive and is immutable. Plus, on line 12, reassignment
// doesn't mutate the variable qux

