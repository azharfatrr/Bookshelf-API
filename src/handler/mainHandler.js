/**
 * All Handling routes request
 */

const addBookHandler = require('./addBookHandler');
const getAllBooksHandler = require('./getAllBooksHandler');
const getBookByIdHandler = require('./getBookByIdHandler');


module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
};
