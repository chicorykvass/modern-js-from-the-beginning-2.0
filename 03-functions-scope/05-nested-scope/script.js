function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  second();
}

first();

if (true) {
  const x = 10;

  if (x === 10) {
    const y = 20;
    console.log(x + y);
  }
}
