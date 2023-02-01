const Verses = require('../models/verses.model')

const getAllVerses = async () => {
  const data = await Verses.findAll()
  return data
}

const getVerseById = async (id) => {
  const data = await Verses.findOne({where:{id}})
  return data
}

const createVerse = async (data) => {
  const response = await Verses.create({
    id: data.id,
    verse: data.verse,
    chapterId: data.chapterId
  })
  return response
}

const updateVerse = async (id, data) => {
  const response = await Verses.update(data, {where: {id}})
  return response
}

const deleteVerse = async (id) => {
  const data = await Verses.destroy({where:{id}})
  return data
}

module.exports = {
  getAllVerses,
  getVerseById,
  createVerse,
  updateVerse,
  deleteVerse
}