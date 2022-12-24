const Books = require('../models/books.model')

const getAllBooks = async () => {
  const data = await Books.findAll()
  return data
}

const getBookById = async (id) => {
  const data = await Books.findOne({where: {id}})
  return data
}

const createBook = async (data) => {
  const response = await Books.create({
    id: data.id,
    bookName: data.bookName,
    canonId: data.canonId
  })
  return response
}

const updateBook = async (id, data) => {
  const response = await Books.update(data, {where: {id}})
  return response
}

const deleteBook = async (id) => {
  const data = await Books.destroy({where: {id}})
  return data
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
}