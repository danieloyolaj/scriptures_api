const References = require('../models/references.model')

const getAllReferences = async () => {
  const data = await References.findAll()
  return data
}

const getReferenceById = async (id) => {
  const data = await References.findOne({where: {id}})
  return data
}

const createReference = async (data) => {
  const response = await References.create({
    id: data.id,
    subIndex: data.subIndex,
    verseId: data.verseId
  })
  return response
}

const updateReference = async (id, data) => {
  const response = await References.update({data, where:{id} })
  return response
}

const deleteReference = async (id) => {
  const data = await References.destroy({where: {id}})
  return data
}

module.exports = {
  getAllReferences,
  getReferenceById,
  createReference,
  updateReference,
  deleteReference
}