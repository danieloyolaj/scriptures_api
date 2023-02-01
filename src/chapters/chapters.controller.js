const Chapters = require('../models/chapters.model')

const getAllChapters = async () => {
  const data = await Chapters.findAll()
  return data
}

const getChapterById = async (id) => {
  const data = await Chapters.findOne({where: {id}})
  return data
}

const createChapter = async (data) => {
  const response = await Chapters.create({
    id: data.id,
    chapterIntro: data.chapterIntro,
    chapter: data.chapter,
    bookId: data.bookId
  })
  return response
}

const updateChapter = async (id, data) => {
  const response = await Chapters.update(data, {where: {id}})
  return response
}

const deleteChapter = async (id) => {
  const data = await Chapters.destroy({where: {id}})
  return data
}

module.exports = {
  getAllChapters,
  getChapterById,
  createChapter,
  updateChapter,
  deleteChapter
}