// for([initialExpression]; [conditionExpression]; [incrementExpression])
//  statement;

for (let i = 1; i <= 10; i++) {
  console.log(i === 7 ? '7 is my lucky number' : `Number ${i}`);
}

// Nested loops
for (let i = 1; i <= 10; i++) {
  console.log(`Number ${i}`);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Loop through an array
const arr = [1, 5, 77, 82, 105];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] === 77 ? '77 is a great number' : arr[i]);
}
