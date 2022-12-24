const Languages = require('../models/languages.model')

const getAllLanguages = async () => {
  const data = await Languages.findAll()
  return data
}

const getLanguageById = async (id) => {
  const data = await Languages.findOne({ where: {id}})
  return data
}

const createLanguage = async (data) => {
  const response = await Languages.create({
    id: data.id,
    language: data.language
  })
  return response
}

const updateLanguage = async (id, data) => {
  const response = await Languages.update( data, {
    where: {id}
  })
  return response
}

const deleteLanguage = async (id) => {
  const data = await Languages.destroy({ where: {id}})
  return data
}

module.exports = {
  getAllLanguages,
  getLanguageById,
  createLanguage,
  updateLanguage,
  deleteLanguage
}