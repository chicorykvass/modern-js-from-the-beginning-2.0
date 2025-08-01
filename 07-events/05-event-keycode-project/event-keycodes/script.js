function showKeyInfo(e) {
  const insert = document.querySelector('#insert');
  insert.innerHTML = '';

  for (let i = 0; i < 3; i++) {
    const div = document.createElement('div');
    div.className = 'key';

    const small = document.createElement('small');

    [div.textContent, small.textContent] =
      i === 0
        ? [e.key === ' ' ? 'Space' : e.key, 'e.key']
        : i === 1
          ? [e.keyCode, 'e.keyCode']
          : [e.code, 'e.code'];

    div.appendChild(small);
    insert.appendChild(div);
  }
}

window.addEventListener('keypress', showKeyInfo);
