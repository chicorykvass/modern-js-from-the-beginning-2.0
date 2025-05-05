let x;

const arr = [34, 22, 67, 85, 0];

// arr.push(500);

// arr.pop();

// arr.unshift(12);

// arr.shift();

// arr.reverse();

x = arr.includes(22);

x = arr.includes(23);

x = arr.indexOf(67);

x = arr.indexOf(5);

x = arr.slice(2, 4);

// x = arr.splice(2, 2); // x: [67, 85]; arr: [34, 22, 0]

// To delete 85 from arr and assign to x:
// x = arr.splice(arr.indexOf(85), 1);

x = arr
  .slice(1, arr.length - 1)
  .reverse()
  .toString()
  .charAt(1);

console.log(x);
