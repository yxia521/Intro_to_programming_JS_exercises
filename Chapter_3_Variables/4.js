/* What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
*/

/*
The first part of code will outputs what it's,
the second part of code will raise an error, because const keyword declares contants
that remains the same throughout the execution of a program, we cannot give it
another value 'Joe' to constant variable NAME
*/
