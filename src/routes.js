/**
 * Route for server
 */

const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
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
];


module.exports = routes;
