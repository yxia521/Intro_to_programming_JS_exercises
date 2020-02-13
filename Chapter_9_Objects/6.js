// Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:
// Without running this code, can you determine whether these two snippets produce the same output? Why?

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj['qux'] = 3;
myObj; // => { qux: 3 }

// ------------ Snippet 1 ------------ 
Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

// => qux
// iterates only over myObj's "own" properties - that is, those defined directly on
// the myObj object, not its prototype. 

// ------------ Snippet 2 ------------ 
for (let key in myObj) {
  console.log(key);
}

// qux
// foo
// bar

// for..in iterates over all of the keys in the object, including those in the prototype
// object. We can add a conditional to get the same result from for..in, all we need
// to do is check whether the key is myObj's own property:

// for (let key in myObj) {
//   if (myObj.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
