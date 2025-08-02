const itemInput = document.querySelector('#item-input');
const priorityInput = document.querySelector('#priority-input');
const checkbox = document.querySelector('#checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  heading.textContent = e.target.value;
}

function onChecked(e) {
  heading.textContent = e.target.checked ? 'Checked' : 'Unchecked';
}

function onFocus(e) {
  console.log('Input is focused');
  itemInput.style.outline = '1px solid green';
}

function onBlur(e) {
  console.log('Input is blurred');
  itemInput.style.outline = 'none';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
