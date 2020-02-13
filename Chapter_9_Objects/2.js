// Which of the following values are valid keys for an object?

// 1 
// '1' 
// undefined
// 'hello world' 
// true 
// 'true' 

// All are valid keys. JS coerces the non-string key values to strings.
// 1 and '1' represent the same key, as do true and 'true'.
// To illustrate, check following code:

let myObj = {}
myObj[true] = 'hello'
myObj['true'] = 'world' // reassign the value. true key points to 'world' now
myObj[true] // => 'world' 

