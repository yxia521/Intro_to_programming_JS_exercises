// Write a function that searches an array of strings for every element that 
// matches the regular expression given by its argument. The function should 
// return all matching elements in an array.

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // ['laboratory', 'flab', 'elaborate']

function allMatches(arr, stringToMatch) {
  return words.filter(word => {
    if (stringToMatch.test(word)) {
      return word; // no need to write like this, test returns true/false, if true, put the word to new array
    }
  });
};

// --- more concise ---
function allMatches(arr, stringToMatch) {
  return words.filter(word => stringToMatch.test(word))
}
