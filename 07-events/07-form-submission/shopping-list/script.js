const form = document.querySelector('#item-form');

function onSubmit(e) {
  e.preventDefault();

  const item = document.querySelector('#item-input').value;
  const priority = document.querySelector('#priority-input').value;

  if (!item || priority === '0') {
    alert('Fill in all fields');
    return;
  }

  console.log(item, priority);
}

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  // const item = formData.get('item');
  // const priority = formData.get('priority');

  const entries = formData.entries();

  for (let entry of entries) {
    console.log(entry[1]);
  }
}

form.addEventListener('submit', onSubmit2);
