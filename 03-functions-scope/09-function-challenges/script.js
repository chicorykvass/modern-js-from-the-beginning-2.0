// Challenge 1
const getCelsius = (fahrDeg) => Math.round(((fahrDeg - 32) * 5) / 9);

console.log(`The temperature is ${getCelsius(85)}\xB0C`);

// Challenge 2
const minMax = (numbers) => ({
  min: Math.min(...numbers),
  max: Math.max(...numbers),
});

console.log(minMax([1, 2, 3, 44, 5, 0, 77]));

// Challenge 3
((length, width) =>
  console.log(
    `The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}.`
  ))(7, 3);
