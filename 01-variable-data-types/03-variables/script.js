// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Re-assigning variables
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (1 + 1 === 2) {
  score += 1;
}

console.log(score);

const x = 12;

// x = 14;
// Constant cannot be reassigned

const arr = [1, 2, 3, 4];

arr.push(5);

console.log(arr);

arr[0] = 7;

console.log(arr);

const person = {
  name: 'John',
};

person.name = 'James';

person.email = 'james@gmail.com';

console.table(person);

// Declare multiple values at once
let a, b, c;
const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);
