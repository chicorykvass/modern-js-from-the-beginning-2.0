const logo = document.querySelector('img');

const onClick = (e) => {
  // console.log(e.target);
  // console.log(e.currentTarget);
  // e.target.style.backgroundColor = 'black';
  // console.log(e.type);
  // console.log(e.timeStamp);
  // console.log(e.clientX);
  // console.log(e.clientY);
  // console.log(e.offsetX);
  // console.log(e.offsetY);
  // console.log(e.pageX);
  // console.log(e.pageY);
  console.log(e.screenX);
  console.log(e.screenY);
};

const onDrag = (e) => {
  document.querySelector('h1').textContent = `X: ${e.clientX}; Y: ${e.clientY}`;
};

const onDragEnd = (e) => {
  document.querySelector('h1').textContent = 'Shopping List';
};

logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);

document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Link was clicked');
});

// document.body.addEventListener('click', onClick);

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/
