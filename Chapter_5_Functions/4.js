/* 
Use the times function shown below to write a program that logs the value of 1! 
(one factorial), 2! (two factorial), 3!, 4!, and 5! (five factorial) to the console.

n!  Expansion Result
1!  1 1
2!  1 * 2 2
3!  1 * 2 * 3 6
4!  1 * 2 * 3 * 4 24
5!  1 * 2 * 3 * 4 * 5 120

Here's an example of the expected output:
> node factorial.js
1
2
6
24
120
*/

function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

// times(1, 1) 1
// times(1, 2) 2
// times(2, 3) 6
// times(6, 4) 24
// times(24, 5) 120

times(times(times(times(times(1, 1), 2), 3), 4), 5); 

