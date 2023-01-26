const router = require('express').Router()
const speechServices = require('./speech.services')

router.route('/')
  .get(speechServices.getAllSpeech)
  .post(speechServices.postSpeech)

router.route('/:id')
  .get(speechServices.getSpeechById)
  .patch(speechServices.patchSpeech)
  .delete(speechServices.deleteSpeech)

module.exports = router