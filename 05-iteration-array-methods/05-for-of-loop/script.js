// Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];

const users = [{ name: 'John' }, { name: 'Jill' }, { name: 'Jack' }];

// for (const item of items) {
//   console.log(item);
// }

// for (const user of users) {
//   console.log(user.name);
// }

// Loop over strings
const str = 'Hello World';

// for (const letter of str) {
//   console.log(letter);
// }

// loop over maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
