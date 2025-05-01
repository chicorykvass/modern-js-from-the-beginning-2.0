// String
const firstName = 'Sara';

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = false;

// Null
const emptyVal = null;

// Undefined
let score;

// Symbol
const id = Symbol('id');

// BigInt
const n = 90071992547409919n;

// Reference Types
const numbers = [1, 2, 3, 4, 5];

const person = {
  name: 'John',
  email: 'john@gmail.com',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);
