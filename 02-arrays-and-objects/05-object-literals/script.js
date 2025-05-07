let x;

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['video games', 'gardening', 'reading'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person['address']['state'];
x = person.hobbies[1];

person.age++;
person['isAdmin'] = false;
x = person;

delete person.hobbies;

person.hasChildren = false;

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

console.log(x);
