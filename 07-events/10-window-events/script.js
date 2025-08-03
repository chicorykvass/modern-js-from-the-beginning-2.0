// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };

window.addEventListener('load', () => {
  //   document.querySelector('h1').textContent = 'Hello World';
  console.log('Page Loaded');
});

window.addEventListener('DOMContentLoaded', () => {
  // document.querySelector('h1').textContent = 'Hello World';
  console.log('DOM Loaded');
});

console.log('Run Me');

window.addEventListener('resize', () => {
  document.querySelector('h1').innerText =
    `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = '#ccc';
  } else {
    document.body.style.backgroundColor = '#fff';
  }
});

window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});

window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black';
  });
});
