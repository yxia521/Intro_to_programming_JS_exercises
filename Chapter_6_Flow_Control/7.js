// Write a function that takes a string as an argument and returns an all-caps 
// version of the string when the string is longer than 10 characters. 
// Otherwise, it should return the original string. Example: change 'hello world' 
// to 'HELLO WORLD', but don't change 'goodbye'.

function capOrNot(string) {
  if (string.length > 10)
    return string.toUpperCase();
  else
    return string;
}

console.log(capOrNot('hello world'));
console.log(capOrNot('goodbye'));

// --- more concise ---
function capsLong(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}
