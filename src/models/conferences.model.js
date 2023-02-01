const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Languages = require('./languages.model')

const Conferences = db.define('conferences', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  month:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  year:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  languageId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'language_id',
    references: {
      key: 'id',
      model: Languages
    }
  }
})

module.exports = Conferences