const clearBtn = document.querySelector('#clear');

function onClear() {
  const items = document.querySelectorAll('.items li');
  // items.forEach((item) => item.remove());
  items.forEach((item) => item.parentElement.removeChild(item));
}

// JavaScript Event Listener
// clearBtn.onclick = () => {
//   alert('Clear Items');
// };

clearBtn.addEventListener('click', onClear);
// clearBtn.addEventListener('click', () => console.log('Clear Items'));

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);
// setTimeout(() => clearBtn.click(), 5000);
