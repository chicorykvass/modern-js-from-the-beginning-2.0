function createNewItem(item) {
  const li = createWithClasses('li');
  const button = createWithClasses('button', 'remove-item btn-link text-red');
  const icon = createWithClasses('i', 'fa-solid fa-xmark');

  li.appendChild(document.createTextNode(item));
  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

function createWithClasses(type, classes = '') {
  const element = document.createElement(type);
  if (classes) element.className = classes;
  return element;
}

createNewItem('Eggs');
