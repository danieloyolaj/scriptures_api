const Topics = require('../models/topics.model')

const getAllTopics = async () => {
  const data = await Topics.findAll()
  return data
}

const getTopicById = async (id) => {
  const data = await Topics.findOne({where:{id}})
  return data
}

const createTopic = async (data) => {
  const response = await Topics.create({
    id: data.id,
    topic: data.topic
  })
  return response
}

const updateTopic = async (id, data) => {
  const response = await Topics.update(
    data, {where: {id} })
  return response
}

const deleteTopic = async (id) => {
  const data = await Topics.destroy({where:{id}})
  return data
}

module.exports = {
  getAllTopics,
  getTopicById,
  createTopic,
  updateTopic,
  deleteTopic
}