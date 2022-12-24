const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Verses = require('./verses.model')
const References = require('./references.model')

const VerseHasReferences = db.define('verse_has_reference', {
  verseId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    field: 'verse_id',
    references: {
      key: 'id',
      model: Verses
    }
  },
  referenceId:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    field: 'reference_id',
    references: {
      key: 'id',
      model: References
    }
  }
},{ timestamps: false})

module.exports = VerseHasReferences