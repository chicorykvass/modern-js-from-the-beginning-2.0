let x;

x = 1 + '2'; // 12 string

x = 1 + Number('2'); // 3 'number'

x = '4' * 4; // 16 'number'

x = 5 + null; // 5 'number'

x = Number(null); // 0 'number'

x = Number(true); // 1 'number'

x = Number(false); // 0 'number'

x = 5 + true; // 6 'number'

x = 5 + false; // 5 'number'

x = 5 + undefined; // NaN 'number'

console.log(x, typeof x);
