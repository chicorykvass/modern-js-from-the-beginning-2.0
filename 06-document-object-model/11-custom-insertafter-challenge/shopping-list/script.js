function insertAfter(newEl, existingEl) {
  existingEl.insertAdjacentElement('afterend', newEl);
}

const li = document.createElement('li');
li.textContent = 'insertAfter';

const sibling = document.querySelector('li:nth-child(3)');

insertAfter(li, sibling);
