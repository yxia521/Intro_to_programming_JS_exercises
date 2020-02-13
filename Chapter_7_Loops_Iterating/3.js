// The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// The condition counter = 1 always evaluates to true, so the body of while loop
// will run forever. There's no any stop code to terminate the program.
