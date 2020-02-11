// What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/* This code logs nothing cuz when call scream,
we explicitly return nothing on line 5;
after executing return statement, the program stops executing
and return nothing. line 6 console.log won't be evaluated.
*/
