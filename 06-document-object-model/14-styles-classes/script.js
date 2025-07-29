const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  // className
  // text.className = 'card dark';

  // classList
  // text.classList.contains('dark')
  //   ? text.classList.remove('dark')
  //   : text.classList.add('dark');

  // text.classList.toggle('hidden');

  // text.classList.replace('card', 'dark');

  // Change style
  // itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    item.style.color = index === 2 ? 'green' : 'red';
  });
}

document.querySelector('button').onclick = run;
