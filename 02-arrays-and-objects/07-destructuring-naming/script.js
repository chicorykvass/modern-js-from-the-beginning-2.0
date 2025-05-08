const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring objects
const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId,
  title,
  user: { name: userName },
} = todo;

console.log(userName);

// Destructuring arrays
const numbers = [22, 33, 66, 77, 99];

const [first, second, third, ...rest] = numbers;

console.log(first, second, third, rest);
