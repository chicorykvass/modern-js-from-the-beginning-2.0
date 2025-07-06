console.log(10 > 20 && 30 > 15);
console.log(10 > 20 || 30 > 15);

// && - Will return first falsy value or the last value

let a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

const posts = ['Post One', 'Post Two'];
posts.length && console.log(posts[0]);

// || - Will return first truthy value or the last value

let b = 10 || undefined;
b = '' || undefined;
b = '' || undefined || null;
b = '' || 30 || null;

console.log(b);

// ?? - Will return the right side operand when the left is either null or undefined

let c = 10 ?? 20;
c = 0 ?? 20;
c = null ?? 20;
c = NaN ?? 20;
c = undefined ?? 20;
c = '' ?? 20;

console.log(c);
