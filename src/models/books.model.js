const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Canon = require('./canon.model')

const Books = db.define('books', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  }, 
  bookName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'book_name'
  },
  canonId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'canon_id',
    references: {
      key: 'id',
      model: Canon
    }
  }
})

module.exports = Books