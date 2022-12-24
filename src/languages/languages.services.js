const languagesController = require('./languages.controller')

const getAllLanguages = (req, res) => {
  languagesController.getAllLanguages()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getLanguageById = (req, res) => {
  const id = req.params.id
  languagesController.getLanguageById(id)
   .then(data => {
    if(data){
      res.status(200).json(data)
    }else{
      res.status(400).json({message: 'Invalid id'})
    }
   })
   .catch(err => {
     res.status(400).json({message: err.message})
   })
}

const createLanguage = (req, res) => {
  const { id, language } = req.body
  if(id && language){
    languagesController.createLanguage({id, language})
     .then(data => {
        res.status(200).json(data) 
      })
     .catch(err => {
       res.status(400).json({message: err.message})
     })
  }else{
    res.status(400).json({message: 'Invalid data',
    fields: {
      id: 'int',
      language:'string'
    }
  })
  }
}

const patchLanguage = (req, res) => {
  const id = req.params.id
  const { language } = req.body
  languagesController.updateLanguage(id, {language})
    .then(data => {
      if(data[0]){
        res.status(200).json({message: 'User updated successfully'})
      }else{
        res.status(400).json({message: 'Invalid id'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteLanguage = (req, res) => {
  const id = req.params.id
  languagesController.deleteLanguage(id)
   .then(data => {
      if(data){
        res.status(204).json()
      }else{
        res.status(404).json({message: 'Invalid id'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  getAllLanguages,
  getLanguageById,
  createLanguage,
  patchLanguage,
  deleteLanguage
}