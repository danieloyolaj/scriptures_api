const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Speakers = require('./speakers.model')
const Topics = require('./topics.model')

const Speech = db.define('speech', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  topicId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'topic_id',
    references: {
      key: 'id',
      model: Topics
    }
  },
  speakerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'speaker_id',
    references: {
      key: 'id',
      model: Speakers
    }
  }
})

module.exports = Speech