function showKeyInfo(e) {
  const insert = document.querySelector('#insert');
  insert.innerHTML = '';

  const divs = [];

  for (let i = 0; i < 3; i++) {
    divs[i] = document.createElement('div');
    divs[i].className = 'key';

    const small = document.createElement('small');

    [divs[i].textContent, small.textContent] =
      i === 0
        ? [e.key === ' ' ? 'Space' : e.key, 'e.key']
        : i === 1
          ? [e.keyCode, 'e.keyCode']
          : [e.code, 'e.code'];

    divs[i].appendChild(small);
    insert.appendChild(divs[i]);
  }
}

window.addEventListener('keypress', showKeyInfo);
