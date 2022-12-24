const chaptersController = require('./chapters.controller')

const getAllChapters = (req, res) => {
  chaptersController.getAllChapters()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getChapterById = (req, res) => {
  const id = req.params.id
  chaptersController.getChapterById(id)
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

const createChapter = (req, res) => {
  const { id, chapter, bookId } = req.body
  if(id && chapter && bookId){
    chaptersController.createChapter({id, chapter, bookId})
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(400).json(err.message)
      })
  }else{
    res.status(400).json({message: 'All the info is necessary',
      fields: {
        id: 'int',
        chapter: 'string',
        bookId: 'int'
      }
    })
  }
}

const patchChapter = (req, res) => {
  const id = req.params.id
  const { chapter, bookId } = req.body
  chaptersController.updateChapter(id, {chapter, bookId})
    .then(data => {
      if(data[0]){
        res.status(200).json({message: 'Chapter updated successfully'})
      }else{
        res.status(400).json({message: 'Invalid id'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteChapter = (req, res) => {
  const id = req.params.id
  chaptersController.deleteChapter(id)
    .then(data => {
      if(data){
        res.status(204).json()
      }else{
        res.status(400).json({message: 'Invalid id'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  getAllChapters,
  getChapterById,
  createChapter,
  patchChapter,
  deleteChapter
}