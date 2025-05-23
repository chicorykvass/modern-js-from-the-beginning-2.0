// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
  return a + b;
};

// Implicit return
const subtract = (a, b) => a - b;

// const double = a => a * 2;

// Returning an object
const createObj = () => ({
  name: 'Artyom',
});

const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (n) {
//   console.log(n);
// });

// Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(8, 1));
// console.log(double(6));
console.log(createObj());
