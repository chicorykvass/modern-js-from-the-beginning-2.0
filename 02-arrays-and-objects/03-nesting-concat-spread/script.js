let x;

const fruits = ['apple', 'pineapple', 'avocado'];
const berries = ['strawberry', 'cranberry', 'serviceberry'];

// fruits.push(berries);

// x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];

x = fruits.concat(berries);

// Spread Operator (...)
x = [...fruits, ...berries];

// Flatten arrays
x = allFruits.flat();

// Static methods on Array object
x = Array.isArray(allFruits);

x = Array.from('abcdef');

const a = 3,
  b = 4,
  c = 5;

x = Array.of(a, b, c);

console.log(x);
