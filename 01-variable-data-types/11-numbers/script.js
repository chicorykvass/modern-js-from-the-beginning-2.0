let x;

const num = new Number(5);

x = num.toString();

x = num.length; // undefined

x = num.toString().length;

x = num.toFixed(2); // 5.00 string

x = num.toPrecision(2); // 5.0 string

x = num.toExponential(2); // 5.00e+0 string

x = num.toLocaleString('bn-BD'); // ৫ string

x = num.valueOf(); // 5 'number'

x = Number.MAX_VALUE; // 1.7976931348623157e+308 'number'

x = Number.MIN_VALUE; // 5e-324 'number'

console.log(x, typeof x);
