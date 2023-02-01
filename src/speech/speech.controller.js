const Speech = require('../models/speech.model')

const getAllSpeech = async () => {
  const data = await Speech.findAll()
  return data
}

const getSpeechById = async (id) => {
  const data = await Speech.findOne({where: {id}})
  return data
}

const createSpeech = async (data) => {
  const response = await Speech.create({
    id: data.id,
    title: data.title,
    topicId: data.topicId,
    speakerId: data.speakerId
  })
  return response
}

const updateSpeech = async (id, data) => {
  const response = await Speech.update(
    data, {where: {id}
  })
  return response
}

const deleteSpeech = async (id) => {
  const data = await Speech.destroy({where:{id}})
  return data
}

module.exports = {
  getAllSpeech,
  getSpeechById,
  createSpeech,
  updateSpeech,
  deleteSpeech
}