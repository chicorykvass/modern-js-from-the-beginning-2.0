const library = [
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoyevsky',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The History of a Town',
    author: 'Mikhail Saltykov-Shchedrin',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library.forEach((book) => {
  book.status.read = true;
});

const { title: firstBook } = library[0];

libStr = JSON.stringify(library);

console.log(libStr);
