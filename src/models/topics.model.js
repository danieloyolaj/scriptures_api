const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const Topics = db.define('topics', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  topic:{
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Topics