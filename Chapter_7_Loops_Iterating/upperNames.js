let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

// with continue
for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;
  }

  upperNames.push(names[index].toUpperCase());
}
console.log(upperNames);


// without continue
for (let index = 0; index < names.length; index += 1) {
  if (names[index] !== 'Naveed') {
    upperNames.push(names[index].toUpperCase());
  }
} 
console.log(upperNames);
