let x;

// Array Literal
const numbers = [24, 84, 2, 47, 90];

// Array Constructor
const fruits = new Array('apple', 'orange', 'banana', 'pear', 'apricot');

const mixed = ['milk', 33, true, null];

x = numbers[2];

x = numbers[0] + numbers[3];

x = `My favorite fruit is ${fruits[3]}`;

x = numbers.length;

fruits[2] = 'dragon fruit';

// fruits.length = 3;

fruits[fruits.length] = 'kiwi';

x = fruits;

console.log(x);
