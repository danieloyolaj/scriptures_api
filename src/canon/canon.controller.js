const Canon = require('../models/canon.model')

//Get all canons
const getAllCanons = async () => {
  const data = await Canon.findAll()
  return data
}

const getCanonById = async (id) => {
  const data = await Canon.findOne({
    where:{id}
  })
  return data
} 

const createCanon = async (data) => {
  const response = await Canon.create({
    id: data.id,
    canonName: data.canonName,
    languageId: data.languageId
  })
  return response
}

const updateCanon = async(id, data) => {
  const response = await Canon.update(data, {where: {id}})
  return response
}

const deleteCanon = async(id) => {
  const data = await Canon.destroy({where: {id}})
  return data
}

module.exports = {
  getAllCanons,
  getCanonById,
  createCanon,
  updateCanon,
  deleteCanon
}