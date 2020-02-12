// What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// This code logs 
// Product2
// Product3
// Product not found!

// start from getting the right serial 113, JS logs 'Product2' and
// executes the code in the case 142 and default clauses as well
// JS doesn't care that criteria for extra case clauses don't match our serial 
// value. The fall-through behavior is often undesirable. To avoid, you must 
// add break statements to each case clause.
