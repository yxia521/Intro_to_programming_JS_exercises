// What does the following code log to the console?

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');

/*
This code logs nothing. 
Unlike previous exercise, within function definitin, we explicitly return
a string and return statement is the last line within function.
So after calling scream, this function returns Yipeee!!!! but won't log it on 
the screen.
*/
