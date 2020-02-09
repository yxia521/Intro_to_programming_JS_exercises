// Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*
This program will not raise an error. It logs 'bar'
Pretty much the same reason as 5. We initialize a constant with value 'bar'
on line 1. This constant can be accessed within as well as after the block.
Within the block, we declare a new constant FOO, and initialize it with a value
'qux', this constant shadows (hides) the one on line 1.
However, after the block ends, we can't access the FOO within block, so the last
expression logs the value of first FOO.
*/
