const speakersController = require('./speakers.controller')

const getAllSpeakers = (req, res) => {
  speakersController.getAllSpeakers()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getSpeakerById = (req, res) => {
  const id = req.params.id
  speakersController.getSpeakerById(id)
    .then(data => {
      if(data){
        res.status(200).json(data)
      }else{
        res.status(400).json({message: 'Invalid id.'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const postSpeaker = (req, res) => {
  const {id, name} = req.body
  if(id && name){
    speakersController.createSpeaker({id, name})
      .then(data => {res.status(201).json(data)})
      .catch(err => {res.status(400).json({
        message: err.message
      })})
  }else{
    res.status(400).json({
      message: 'Incomplete data:',
      fields: {
        id: 'int',
        name: 'string'
      }
    })
  }
}

const patchSpeaker = (req, res) => {
  const id = req.params.id
  const name = req.body
  speakersController.updateSpeaker(id, name) //use {name} if there's an error
    .then(data => {
      if(data[0]){
        res.status(200).json({message: 'Speaker updated successfully!'})
      }else{
        res.status(400).json({message: 'Invalid id.'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteSpeaker = (req, res) => {
  const id = req.params.id
  speakersController.deleteSpeaker(id)
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
  getAllSpeakers,
  getSpeakerById,
  postSpeaker,
  patchSpeaker,
  deleteSpeaker
}