let x;

const d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth(); // zero-based

x = d.getDate(); // day of the month

x = d.getDay(); // day of the week; zero-based

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${String(d.getDate()).padStart(2, '0')}.${String(
  d.getMonth() + 1
).padStart(2, '0')}.${d.getFullYear()}`;

x = Intl.DateTimeFormat('ru-RU').format(d);
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('ru-RU', {
  month: 'short',
});

x = d.toLocaleString('ru-RU', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'Europe/Moscow',
});

console.log(x);
