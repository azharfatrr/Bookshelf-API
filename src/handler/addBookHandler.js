/** Handler Kriteria 1 */

const {nanoid} = require('nanoid');
const books = require('../books');


const addBookHandler = (request, h) => {
  /** Ambil data buku */
  const {name, year, author, summary, publisher,
    pageCount, readPage, reading,
  } = request.payload;
  const id = nanoid(16);
  const finished = pageCount === readPage ? true : false;
  const insertedAt = new Date().toISOString();
  const updatedAt = new Date().toISOString();

  /** Buat objek buku baru */
  const newBook = {
    id, name, year, author, summary, publisher, pageCount, readPage,
    finished, reading, insertedAt, updatedAt,
  };

  /** Handler kesalahan */
  if (!name) { // Check falsy
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }

  /** Tidak ada kesalahan, coba tambah */
  books.push(newBook);
  const isSuccess = books.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }

  /** Kesalahan umum */
  const response = h.response({
    status: 'error',
    message: 'Buku gagal ditambahkan',
  });
  response.code(201);
  return response;
};


module.exports = addBookHandler;
