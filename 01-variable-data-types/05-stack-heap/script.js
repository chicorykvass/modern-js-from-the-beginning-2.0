// These values are stored on the stack
const name = 'John';
const age = 30;

// Reference values are stored on the heap
const person = {
  name: 'Jack',
  age: 30,
};

let newName = name;
newName = 'Jonathan';

let newPerson = person;

newPerson.name = 'Frank';

console.log(person, newPerson);
