const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Chapters = require('./chapters.model')

const Verses = db.define('verses', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  verse: {
    type: DataTypes.STRING,
    allowNull: false
  },
  chapterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'chapter_id',
    references: {
      key: 'id',
      model: Chapters
    }
  }
})

module.exports = Verses
