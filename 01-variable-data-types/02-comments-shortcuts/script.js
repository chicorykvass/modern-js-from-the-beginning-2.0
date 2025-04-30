// console.log(100);

/*
console.log('Hello World');

console.log(11, 'Bye', true);
*/

const x = 100;

console.log(x);

console.warn('Warning');

console.error('Error');

console.table({ name: 'John', email: 'john@gmail.com' });

console.group('simple');
console.log(x);
console.warn('Warning');
console.error('Error');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello World', styles);
