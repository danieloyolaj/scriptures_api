const versesController = require('./verses.controller')

const getAllVerses = (req, res) => {
  versesController.getAllVerses()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getVerseById = (req, res) => {
  const id = req.params.id
  versesController.getVerseById(id)
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

const postVerse = (req, res) => {
  const {id, verse, chapterId} = req.body
  if(id && verse && chapterId){
    versesController.createVerse({id, verse, chapterId})
      .then(data => {res.status(201).json(data)})
      .catch(err => {res.status(400).json({message: err.messasge})})
  }else{
    res.status(400).json({
      message: 'Incomplete data:',
      fields: {
        id: 'int',
        verse: 'string',
        chapterId: 'int'
      }
    })
  }
}

const patchVerse = (req, res) => {
  const id = req.params.id
  const {verse, chapterId} = req.body
  versesController.updateVerse({id, verse, chapterId})
    .then(data => {
      if(data[0]){
        res.status(200).json({message: 'Verse updatade successfully!'})
      }else{
        res.status(400).json({message: 'Invalid id.'})
      }
    })
    .catch(err =>{
      res.status(400).json({message: err.message})
    })
}

const deleteVerse = (req, res) => {
  const id = req.params.id
  versesController.deleteVerse(id)
    .then(data=> {
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
  getAllVerses,
  getVerseById,
  postVerse,
  patchVerse,
  deleteVerse
}