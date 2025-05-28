function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Error: unknown operator';
  }
}

console.log(calculator(1, 6, '+'));
console.log(calculator(10, 6, '-'));
console.log(calculator(2, 7, '*'));
console.log(calculator(10, 5, '/'));
console.log(calculator(2, 7, '%'));
