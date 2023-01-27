const router = require('express').Router()
const versesServices = require('./verses.services')

router.route('/')
  .get(versesServices.getAllVerses)
  .post(versesServices.postVerse)

router.route('/:id')
  .get(versesServices.getVerseById)
  .patch(versesServices.patchVerse)
  .delete(versesServices.deleteVerse)

module.exports = router