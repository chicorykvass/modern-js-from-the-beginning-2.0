function returnLi(el) {
  if (el.tagName === 'LI') {
    return el;
  } else {
    return returnLi(el.parentElement);
  }
}

document.querySelector('#item-list').addEventListener('click', (e) => {
  e.target.className === 'fa-solid fa-xmark' &&
    e.target.parentElement.parentElement.remove();
});

document.querySelector('#item-list').addEventListener('mouseover', (e) => {
  if (!e.target.closest('li')) return;
  const li = returnLi(e.target);
  li.style.color = 'red';
  li.addEventListener('mouseout', () => {
    li.style.color = '#333';
  });
});
