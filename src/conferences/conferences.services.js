const conferencesController = require('./conferences.controller')

const getAllConferences = (req, res) => {
  conferencesController.getAllConferences()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getConferenceById = (req, res) => {
  const id = req.params.id
  conferencesController.getConferenceById(id)
    .then(data => {
      if(data){
        res.status(200).json(data)
      }else{
        res.status(400).json({message: 'Invalid id!'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const createConference = (req, res) => {
  const { id, month, year, languageId } = req.body
  if(id && month && year && languageId){
    conferencesController.createConference({id, month, year, languageId})
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(400).json({message: err.message})
      })
  }else{
    res.status(400).json({
      message: 'Incomplete data:',
      fields:{
        id: 'int',
        month:'string',
        year: 'string',
        languageId: 'int'
      }
    })
  }
}

const patchConference = (req, res) => {
  const id = req.params.id
  const { month, year, languageId } = req.body
  conferencesController.updateCanon(id, {month, year, languageId})
    .then(data => {
      if(data[0]){
        res.status(200).json({
          message: 'Conference updated successfully!'
        })
      }else{
        res.status(404).json({message: 'Invalid id'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteConference = (req, res) => {
  const id = req.params.id
  conferencesController.deleteConference(id)
    .then(data => {
      if(data){
        res.status(204).json()
      }else{
        res.status(404).json({message: 'Invalid id.'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  getAllConferences,
  getConferenceById,
  createConference,
  patchConference,
  deleteConference
}