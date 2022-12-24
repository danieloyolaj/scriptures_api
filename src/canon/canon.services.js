const canonController = require('./canon.controller')

const getAllCanons = (req, res) => {
  canonController.getAllCanons()
   .then(data => {
      res.status(200).json(data)
   })
   .catch(err => {
    res.status(400).json({message: err.message})
   })
}

const getCanonById = (req, res) => {
  const id = req.params.id
  canonController.getCanonById(id)
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

const createCanon = (req, res) => {
  const { id, canonName, languageId } = req.body
  if(id && canonName && languageId){
    canonController.createCanon({id, canonName, languageId})
     .then(data => {
        res.status(201).json(data)
      })
     .catch(err => {
      res.status(400).json(err.message)
     })
  }else{
    //This will show if they didn't send all data necessary to create the canon
    res.status(400).json({
      message: 'All the info is necessary:',
      fields: {
        id: 'int',
        canonName:'string',
        languageId:'int'
      }
    })
  }
}

const patchCanon = (req, res) => {
  const id = req.params.id
  const { canonName, languageId } = req.body
  canonController.updateCanon(id, {canonName, languageId})
    .then(data => {
      if(data[0]){
        res.status(200).json({
          message: 'Canon updated successfully!'})
      }else{
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteCanon = (req, res) => {
  const id = req.params.id
  canonController.deleteCanon(id)
   .then(data => {
      if(data){
        res.status(204).json()
      }else {
        res.status(404).json({message: 'Invalid ID'})
      }
      })
   .catch(err => {
      res.status(400).json({message: err.message})
   })
}

module.exports = {
  getAllCanons,
  getCanonById,
  createCanon,
  patchCanon,
  deleteCanon
}