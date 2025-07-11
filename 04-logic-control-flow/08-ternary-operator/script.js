const age = 19;

// Using an if statement
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log("You can't vote");
}

// Using a ternary operator
console.log(age >= 18 ? 'You can vote!' : "You can't vote");

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;

console.log(canVote);

// Multiple statements
const auth = true;
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

const redirect = auth
  ? (alert('Welcome to the dashboard'), '/dashboard')
  : (alert('Access Denied'), '/login');

console.log(redirect);

// No else statement
auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashboard');
