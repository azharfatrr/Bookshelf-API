/** Handler Kriteria 3 */

const books = require('../books');


const getBookByIdHandler = (request, h) => {
  const {bookId} = request.params;

  const bookInfo = books.filter((book) => book.id === bookId)[0];

  if (bookInfo) {
    const response = h.response({
      status: 'success',
      data: {
        book: bookInfo,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};


module.exports = getBookByIdHandler;
