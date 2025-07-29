function removeClearButton() {
  document.querySelector('#clear').remove();
}

function removeFirstItem() {
  const ul = document.querySelector('#item-list');
  const li = document.querySelector('#item-list li:first-child');

  ul.removeChild(li);
}

function removeItem(itemNumber) {
  const ul = document.querySelector('#item-list');
  const li = document.querySelector(`#item-list li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

function removeItem2(itemNumber) {
  const ul = document.querySelector('#item-list');
  const li = document.querySelectorAll('#item-list li')[itemNumber - 1];

  ul.removeChild(li);
}

function removeItem3(itemNumber) {
  const li = document.querySelectorAll('#item-list li')[itemNumber - 1];

  li.remove();
}

// removeClearButton();
// removeFirstItem();
// removeItem(3);
// removeItem2(3);
removeItem3(3);
