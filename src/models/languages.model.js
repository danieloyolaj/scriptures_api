const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const Languages = db.define('languages', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false
  }

})

module.exports = Languages