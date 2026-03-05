const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const itemFilter = document.querySelector('.filter');

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (!newItem) {
    alert('Please add an item');
    return;
  }

  addItemToStorage(newItem);

  itemInput.value = '';

  refreshUI();
}

function addItemToDOM(item) {
  // Create list item
  const li = document.createElement('li');
  const button = createWithClasses('button', 'remove-item btn-link text-red');
  const icon = createWithClasses('i', 'fa-solid fa-xmark');

  li.appendChild(document.createTextNode(item));
  button.appendChild(icon);
  li.appendChild(button);

  itemList.appendChild(li);
}

function getItemsFromStorage() {
  return localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
}

function addItemToStorage(item) {
  let itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.push(item);
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function createWithClasses(type, classes = '') {
  const element = document.createElement(type);
  if (classes) element.className = classes;
  return element;
}

function removeItem(e) {
  const parent = e.target.parentElement;
  if (parent.classList.contains('remove-item') && confirm('Are you sure?')) {
    const itemsFromStorage = getItemsFromStorage();
    localStorage.setItem('items', JSON.stringify(itemsFromStorage.filter(item => item !== parent.parentElement.textContent)));

    refreshUI();
  }
}

function clearAll() {
  // const items = itemList.querySelectorAll('li');
  // for (const item of items) item.remove();

  if (confirm('Are you sure?')) {
    localStorage.setItem('items', '');

    refreshUI();
  }
}

function hideElement(element) {
  if (!element.classList.contains('hidden')) element.classList.add('hidden');
}

function unHideElement(element) {
  if (element.classList.contains('hidden')) element.classList.remove('hidden');
}

function refreshUI() {
  const items = getItemsFromStorage();

  while (itemList.firstChild) {
    itemList.firstChild.remove();
  }

  items.forEach(item => {
    addItemToDOM(item);
  });

  if (items.length) {
    unHideElement(clearBtn);
    unHideElement(itemFilter);
  } else {
    hideElement(clearBtn);
    hideElement(itemFilter);
  }
}

function filterItems(e) {
  for (const item of itemList.children) {
    if (item.innerText.toLowerCase().match(e.target.value.toLowerCase())) {
      unHideElement(item);
    } else {
      hideElement(item);
    }
  }
}

// Event Listeners
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearAll);
itemFilter.addEventListener('input', filterItems);

refreshUI();