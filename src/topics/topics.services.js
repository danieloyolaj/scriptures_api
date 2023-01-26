const topicsController = require('./topics.controller')

const getAllTopics = (req, res) => {
  topicsController.getAllTopics()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getTopicById = (req, res) => {
  const id = req.params.id
  topicsController.getTopicById(id)
    .then(data => {
      if(data){
        res.status(200).json(data)
      }
      else{
        res.status(400).json({message: 'Invalid id.'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const postTopic = (req, res) => {
  const {id, topic} = req.body
  if(id && topic){
    topicsController.createTopic({id, topic})
      .then(data => {res.status(201).json(data)})
      .catch(err => {res.status(400).json({message: err.message})})
  }else{
    res.status(400).json({
      message: 'Incomplete data:',
      fields: {
        id: 'int',
        topic: 'string'
      }
    })
  }
}

const patchTopic = (req, res) => {
  const id = req.params.id
  const topic = req.body
  topicsController.updateTopic({id, topic})
    .then(data => {
      if(data[0]){
        res.status(200).json({message: 'Topic updated successfully!'})
      }else{
        res.status(400).json({message: 'Invalid id.'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteTopic = (req, res) => {
  const id = req.params.id
  topicsController.deleteTopic(id)
    .then(data => {
      if(data){
        res.status(200).json()
      }else{
        res.status(404).json({message: 'Invalid id.'})
      }
    })
    .catch(err => {
      res.status(404).json({message: err.message})
    })
}

module.exports = {
  getAllTopics,
  getTopicById,
  postTopic,
  patchTopic,
  deleteTopic
}