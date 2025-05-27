const d = new Date(2024, 10, 25, 3, 0, 0);
const hour = d.getHours();

if (hour < 6 || hour > 21) {
  console.log('Good Night!');
} else if (hour < 12) {
  console.log('Good Morning!');
} else if (hour < 18) {
  console.log('Good Afternoon!');
} else {
  console.log('Good Evening!');
}

// Nested If
if (hour < 6 || hour > 21) {
  console.log('Good Night!');
} else if (hour < 12) {
  if (hour === 6) {
    console.log('Wake Up!');
  }
  console.log('Good Morning!');
} else if (hour < 18) {
  console.log('Good Afternoon!');
} else {
  if (hour >= 20) {
    console.log('zzzzzzzzzz');
  }
  console.log('Good Evening!');
}
