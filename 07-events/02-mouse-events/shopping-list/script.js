const logo = document.querySelector('img');

function onClick() {
  console.log('click event');
}

function onDoubleClick() {
  console.log('double click event');
  if (document.body.style.backgroundColor == 'green') {
    document.body.style.backgroundColor = '#f5f5f5';
    document.body.style.color = '#333';
  } else {
    document.body.style.backgroundColor = 'green';
    document.body.style.color = '#fff';
  }
}

function onRightClick(e) {
  console.log('right click event');
  e.preventDefault();
}

function onMouseDown() {
  console.log('mouse down event');
}

function onMouseUp() {
  console.log('mouse up event');
}

function onMouseWheel() {
  console.log('mouse wheel event');
}

function onMouseOver() {
  console.log('mouse over event');
}

function onMouseOut() {
  console.log('mouse out event');
}

function onDragStart() {
  console.log('drag start event');
}

function onDragEnd() {
  console.log('drag end event');
}

function onDrag() {
  console.log('drag event');
}

// Event listener
// logo.addEventListener('click', onClick);
// logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('mousewheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('dragend', onDragEnd);
logo.addEventListener('drag', onDrag);
