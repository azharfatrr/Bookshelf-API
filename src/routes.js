/**
 * Route for server
 */

const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler/mainHandler');


const routes = [
  {
    /** Kriteria 1 : API dapat menyimpan buku */
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    /** Kriteria 2 : API dapat menampilkan seluruh buku */
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    /** Kriteria 3 : API dapat menampilkan detail buku */
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    /** Kriteria 4 : API dapat mengubah data buku */
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    /** Kriteria 5 : API dapat menghapus buku */
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];


module.exports = routes;
