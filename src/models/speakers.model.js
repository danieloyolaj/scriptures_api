const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const Speakers = db.define('speakers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

module.exports = Speakers