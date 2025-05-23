(function () {
  const user = 'Artyom';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

(function (name) {
  console.log(`Hello, ${name}`);
})('Jonathan');

(function odd(n) {
  if (n > 0) {
    if (n % 2) {
      console.log(n);
    }
    odd(n - 1);
  }
})(8);
