const Speakers = require('../models/speakers.model')

const getAllSpeakers = async () => {
  const data = await Speakers.findAll()
  return data
}

const getSpeakerById = async (id) => {
  const data = await Speakers.findOne({where: {id}})
  return data
}

const createSpeaker = async (data) => {
  const response = await Speakers.create({
    id: data.id,
    name: data.name
  })
  return response
}

const updateSpeaker = async (id, data) => {
  const response = await Speakers.update({
    data, where: {id}
  })
  return response
}

const deleteSpeaker = async (id) => {
  const data = await Speakers.destroy({ where: {id}})
  return data
}

module.exports = {
  getAllSpeakers,
  getSpeakerById,
  createSpeaker,
  updateSpeaker,
  deleteSpeaker
}