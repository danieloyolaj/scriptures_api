const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Languages = require('./languages.model')

const Canon = db.define('canon', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  canonName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'canon_name'
  },
  languageId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'language_id',
    references: {
      key: 'id',
      model: Languages
    }

  }
})

module.exports = Canon
