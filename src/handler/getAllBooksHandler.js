/** Handler Kriteria 2 */

const books = require('../books');


const getAllBooksHandler = (request, h) => {
  const booksInfo = [];

  books.forEach((book) => {
    const {id, name, publisher} = book;
    booksInfo.push({id, name, publisher});
  });

  const response = h.response({
    status: 'success',
    data: {
      books: booksInfo,
    },
  });
  response.code(200);
  return response;
};


module.exports = getAllBooksHandler;
