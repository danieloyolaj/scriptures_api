const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Conferences = require('./conferences.model')
const Speakers = require('./speakers.model')

const ConferenceHasSpeaker = db.define('conference_has_speaker', {
  conferenceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'conference_id',
    references: {
      key: 'id',
      model: Conferences
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
}, { 
  timestamps: false 
})

module.exports = ConferenceHasSpeaker