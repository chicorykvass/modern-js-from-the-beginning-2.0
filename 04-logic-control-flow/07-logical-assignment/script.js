// ||= assigns the right side value only if the left is a falsy value

let a = false;

a ||= 1;

console.log(a);

// &&= assigns the right side value only if the left is a truthy value

a = true;

a &&= 2;

console.log(a);

// ??= assigns the right side value only if the left is null or undefined

a = null;

a ??= 3;

console.log(a);
