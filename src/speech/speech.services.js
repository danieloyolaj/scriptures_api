const speechController = require('./speech.controller')

const getAllSpeech = (req, res) => {
  speechController.getAllSpeech()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getSpeechById = (req, res) => {
  const id = req.params.id
  speechController.getSpeechById(id)
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

const postSpeech = (req, res) => {
  const {id, title, topicId, speakerId} = req.body
  if(id && title && topicId && speakerId){
    speechController.createSpeech({id, title, topicId, speakerId})
      .then(data => {res.status(201).json(data)})
      .catch(err =>{res.status(400).json({message: err.message})})
  }else{
    res.status(400).json({
      message: 'Incomplete data:',
      fields: {
        id: 'int',
        title: 'string',
        topicId: 'int',
        speakerId: 'int'
      }
    })
  }
}

const patchSpeech = (req, res) => {
  const id = req.params.id
  const {title, topicId, speakerId} = req.body
  speechController.updateSpeech(id, {title, topicId, speakerId})
    .then(data => {
      if(data[0]){
        res.status(200).json({message: 'Speech updated successfully!'})
      }else{
        res.status(400).json({message: 'Invalid id.'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteSpeech = (req, res) => {
  const id = req.params.id
  speechController.deleteSpeech(id)
    .then(data => {
      if(data){
        res.status(204).json()
      }else{
        res.status(404).json({message: 'Invalid id.'})
      }
    })
    .catch(err => {
      res.status(404).json({message: err.message})
    })
}

module.exports = {
  getAllSpeech,
  getSpeechById,
  postSpeech, 
  patchSpeech,
  deleteSpeech
}