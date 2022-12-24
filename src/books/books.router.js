const router = require('express').Router()
const booksServices = require('./books.services')

//Root route
router.route('/')
  .get(booksServices.getAllBooks)
  .post(booksServices.createBook)

router.route('/:id')
  .get(booksServices.getBookById)
  .patch(booksServices.patchBook)
  .delete(booksServices.deleteBook)

module.exports = router