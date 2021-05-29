/** Handler Kriteria 4 */

const books = require('../books');

const editBookByIdHandler = (request, h) => {
  const {bookId} = request.params;

  const {name, year, author, summary, publisher,
    pageCount, readPage, reading,
  } = request.payload;

  const updatedAt = new Date().toISOString();

  const idx = books.findIndex((book) => {
    return book.id === bookId;
  });

  if (idx != -1) {
    if (!name) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      });
      response.code(400);
      return response;
    }

    if (readPage > pageCount) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      });
      response.code(400);
      return response;
    }


    books[idx] = {
      ...books[idx], name, year, author, summary, publisher,
      pageCount, readPage, reading, updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  };


  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};


module.exports = editBookByIdHandler;

