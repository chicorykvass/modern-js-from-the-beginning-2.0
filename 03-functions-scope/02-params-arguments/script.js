// Default Params
function registerUser(user = 'Bot') {
  return `${user} is registered`;
}

console.log(registerUser('John'));
console.log(registerUser());

// Rest Params
function sum(...numbers) {
  return numbers.reduce((total, x) => total + x, 0);
}

console.log(sum(1, 2, 3, 4));

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the ID of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'Ivan Goryunov',
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: 'Fyodor Voronov',
  })
);

// Arrays as Params
function randomNumber(...numbers) {
  const randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
}

console.log(randomNumber(1, 2, 3, 4, 7, 8, 9));
