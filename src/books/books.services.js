const booksController = require('./books.controller')

const getAllBooks = (req, res) => {
  booksController.getAllBooks()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getBookById = (req, res) => {
  const id = req.params.id
  booksController.getBookById(id)
    .then(data => {
      if(data){
        res.status(200).json(data)
      }else{
        res.status(400).json({message: 'Invalid id'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const createBook = (req, res) => {
  const { id, bookName, canonId } = req.body
  if(id && bookName && canonId){
    booksController.createBook({id, bookName, canonId})
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(400).json(err.message)
      })
  }else{
    res.status(400).json({message: 'All the info is necessary',
      fields: {
        id: 'int',
        bookName: 'string',
        canonId: 'int'
      }
    })
  }
}

const patchBook = (req, res) => {
  const id = req.params.id
  const { bookName, canonId } = req.body
  booksController.updateBook(id, {bookName, canonId})
    .then(data => {
      if(data[0]){
        res.status(200).json({message: 'Book updated successfully'})
      }else{
        res.status(400).json({message: 'Invalid id'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteBook = (req, res) => {
  const id = req.params.id
  booksController.deleteBook(id)
    .then(data => {
      if(data){
        res.status(204).json()
      }else{
        res.status(400).json({message: 'Invalid id'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  patchBook,
  deleteBook
}