const itemInput = document.querySelector('#item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
  console.log('keyup');
};

const onKeyDown = (e) => {
  // key
  console.log(e.key);
  // e.key === 'Enter' && alert('You pressed Enter');

  // keyCode
  // https://www.toptal.com/developers/keycode/table
  e.keyCode === 13 && alert('You pressed Enter');

  // code
  // console.log(e.code);
  e.code === 'Digit1' && console.log('You pressed 1');

  // repeat property
  e.repeat && console.log(`You are holding down ${e.key}`);

  console.log(`Shift: ${e.shiftKey}`);
  console.log(`Control: ${e.ctrlKey}`);
  console.log(`Alt: ${e.altKey}`);

  e.shiftKey && e.key === 'K' && console.log(`You hit Shift + K`);
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
