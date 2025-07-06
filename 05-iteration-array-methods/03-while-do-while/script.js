let i = 0;

while (i <= 20) {
  console.log(`Number ${i}`);
  i++;
}

i = 0;

const arr = [1, 2, 3, 4, 5];
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// Nesting while loops
i = 1;

while (i <= 5) {
  console.log(`Number ${i}`);

  let j = 1;
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }

  i++;
}

i = 1;

do {
  console.log(`Number ${i++}`);
} while (i <= 20);
