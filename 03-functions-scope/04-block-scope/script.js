const x = 100;

if (true) {
  const y = 200;
  console.log(x + y);
}

// console.log(y); // error: y is not defined

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); // error: i is not defined

if (true) {
  var y = 200;
  console.log(x + y);
}

console.log(x + y); // 300

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

console.log(i); // 11

function run() {
  var n = 12;
  console.log(n);
}

run();

// console.log(n); // error: n is not defined
