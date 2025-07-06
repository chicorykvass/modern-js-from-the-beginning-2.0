// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

const x = [];

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 2;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// Checking for empty arrays
const posts = ['Post One', 'Post Two'];

if (posts.length) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}

// Checking for empty objects
const user = {
  name: 'James',
};

if (Object.keys(user).length) {
  console.log('List User');
} else {
  console.log('Nothing To List');
}

// Loose Equality (==)
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);

// Strict Equality (===)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
