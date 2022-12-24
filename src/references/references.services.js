const referencesController = require('./references.controller')

const getAllReferences = (req, res) => {
  referencesController.getAllReferences()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getReferenceById = (req, res) => {
  const id = req.params.id
  referencesController.getReferenceById(id)
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

const postReference = (req, res) => {
  const { id, subIndex, verseId } = req.body
  if(id && subIndex && verseId){
    referencesController.createReference({id, subIndex, verseId})
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(400).json({message: err.message})
      })
  }else{
    res.status(400).json({
      message: 'Incomplete data:',
      fields: {
        id: 'int',
        subIndex: 'string',
        verseId: 'int'
      }
    })
  }
}

const patchReference = (req, res) => {
  const id = req.params.id
  const { subIndex, verseId } = req.body
  referencesController.updateReference(id, {subIndex, verseId})
    .then(data => {
      if(data[0]){
        res.status(200).json({
          message: 'Conference updated successfully!'
        })
      }else{
        res.status(400).json({message: 'Invalid id.'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })

}

const deleteReference = (req, res) => {
  const id = req.params.id
  referencesController.deleteReference(id)
    .then(data => {
      if(data){
        res.status(200).json()
      }else{
        res.status(404).json({message: 'Invalid id.'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  getAllReferences,
  getReferenceById,
  postReference,
  patchReference,
  deleteReference
}