let x;

const name = 'John';

const age = 36;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String properties and methods
const s = new String('Hello World');

x = typeof s; // object

x = s.length;

// Access value by key
x = s[2];

x = s.__proto__;

x = s.toUpperCase();

x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('W');

x = s.substring(0, 5);

x = s.substring(6);

x = s.slice(-5);

x = s.slice(-11, -8);

x = '    Hello World         ';

x = x.trim();

x = s.replace('World', 'John');

x = s.includes('Hello');

x = s.valueOf(); // Get primitive value from object

x = s.split(' ');

console.log(x);
