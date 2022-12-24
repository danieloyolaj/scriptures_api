const router = require('express').Router()
const chaptersServices = require('./chapters.services')

router.route('/')
  .get(chaptersServices.getAllChapters)
  .post(chaptersServices.createChapter)

router.route('/:id')
  .get(chaptersServices.getChapterById)
  .patch(chaptersServices.patchChapter)
  .delete(chaptersServices.deleteChapter)

module.exports = router


