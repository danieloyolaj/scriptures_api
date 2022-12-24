const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Verses = require('./verses.model')

const References = db.define('references', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  subIndex: {
    type: DataTypes.STRING,
  },
  verseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'verse_id',
    references: {
      key: 'id',
      model: Verses
    }
  }
})

module.exports = References