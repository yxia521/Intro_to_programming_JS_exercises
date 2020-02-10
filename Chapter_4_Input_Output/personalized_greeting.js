let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);

// > What's your name?
// > Yu
// = Good Morning, Yu!
