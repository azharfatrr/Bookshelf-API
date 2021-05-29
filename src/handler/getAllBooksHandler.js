/** Handler Kriteria 2 */

const books = require('../books');


const getAllBooksHandler = (request, h) => {
  let booksInfo = books;
  const {name, reading, finished} = request.query;

  // Terdapat query ?name
  if (name !== undefined) {
    booksInfo = booksInfo.filter(
        (book) => book.name.toLowerCase().includes(name.toLowerCase()));
  };

  // Terdapat query ?reading
  if (reading !== undefined) {
    booksInfo = booksInfo.filter((book) => book.reading == reading);
  }

  // Terdapat query ?finished
  if (finished !== undefined) {
    booksInfo = booksInfo.filter((book) => book.finished == finished);
  }

  const response = h.response({
    status: 'success',
    data: {
      books: booksInfo.map((book) => (
        {
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        }),
      ),
    },
  });
  response.code(200);
  return response;
};


module.exports = getAllBooksHandler;
