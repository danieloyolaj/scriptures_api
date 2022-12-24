const Conferences = require('../models/conferences.model')

const getAllConferences = async () => {
  const data = await Conferences.findAll()
  return data
}

const getConferenceById = async (id) => {
  const data = await Conferences.findOne({where:{id}})
  return data
}

const createConference = async (data) => {
  const response = await Conferences.create({
    id: data.id,
    month: data.month,
    year: data.year,
    languageId: data.languageId
  })
  return response
}

const updateConference = async (id, data) => {
  const response = await Conferences.update(data, {where:{id}})
  return response
}

const deleteConference = async (id) => {
  const data = await Conferences.destroy({where:{id}})
  return data
}

module.exports = {
  getAllConferences,
  getConferenceById,
  createConference,
  updateConference,
  deleteConference
}