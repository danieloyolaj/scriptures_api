const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Books = require('./books.model')

const Chapters = db.define('chapters', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  chapter: {
    type: DataTypes.STRING,
    allowNull: false
  },
  chapterIntro: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'chapter_intro'
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'book_id',
    references: {
      key: 'id',
      model: Books
    }
  }
})

module.exports = Chapters