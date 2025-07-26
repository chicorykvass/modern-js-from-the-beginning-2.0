// querySelectorAll()
const listItems = document.querySelectorAll('.item');

// console.log(listItems[1].innerText);

// listItems.forEach((li, ix) => {
//   li.style.color = 'red';

//   if (ix === 1) {
//     li.remove();
//   }

//   if (ix === 0) {
//     li.firstChild.nodeValue = 'Oranges';
//   }
// });

const listItems2 = document.getElementsByClassName('item');

// console.log(listItems2);

// for (const item of listItems2) {
//   item.style.color = 'indigo';
//   item.style.fontStyle = 'italic';
// }

const listItems3 = document.getElementsByTagName('li');

console.log(listItems3);
