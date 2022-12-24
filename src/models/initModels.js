const Users = require('./users.models')
const Language = require('./languages.model')
const Canon = require('./canon.model')
const Book = require('./books.model')
const Chapter = require('./chapters.model')
const Verse = require('./verses.model')
const Reference = require('./references.model')
const Conference = require('./conferences.model')
const Speaker = require('./speakers.model')
const Topic = require('./topics.model')
const Speech = require('./speech.model')


const initModels = () => {

  //Setting up a One-To-One relationship
  //One language has only one canon - One canon belongs to only one language
  //Canon will get 'id_language'
  Language.hasOne(Canon, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
    
  })
  Canon.belongsTo(Language)

  //One-To-Many relationship between Canon and Book
  //Canon can have many books while a Book belongs to one Canon
  Canon.hasMany(Book, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  Book.belongsTo(Canon)

  //One-To-Many relationship between Book and Chapter
  //A Book can have many chapters while a Chapter belongs to one Book
  Book.hasMany(Chapter, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  Chapter.belongsTo(Book)

  //One-to-Many relationship between Chapter and Verse
  //A Chapter can have many verses while a Verse belongs to one Chapter
  Chapter.hasMany(Verse, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  Verse.belongsTo(Chapter)

  //Many-To-Many relationship between Verse and Reference
  //A Verse can have many References while a Reference belongs to many Verses
  Verse.belongsToMany(Reference, { through: 'verse_has_reference'})
  Reference.belongsToMany(Verse, { through: 'verse_has_reference' })

  //Many-To-Many relationship between Conference and Speaker
  //A Conference can have many Speakers while a Speaker belongs to many Conferences
  Conference.belongsToMany(Speaker, { through: 'conference_has_speaker' })
  Speaker.belongsToMany(Conference, { through: 'conference_has_speaker' })

  //One-To-Many relationship between Speaker and Speech
  //A Speaker can have many Speeches while a Speech belongs to one Speaker
  Speaker.hasMany(Speech, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  Speech.belongsTo(Speaker)

  //Many-To-Many relationship between Speech and Topic
  //A Speech can have many Topics while a Topic belongs to many Speeches
  Speech.belongsToMany(Topic, { through: 'speech_has_topics'})
  Topic.belongsToMany(Speech, { through: 'speech_has_topics'})
}

module.exports = initModels