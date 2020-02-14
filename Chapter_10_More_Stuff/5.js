// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

console.log(doSomething('meow')); // [4]
console.log(doSomething('hello world'));  // [5, 5]
