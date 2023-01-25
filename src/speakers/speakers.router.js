const router = require('express').Router()
const speakersServices = require('./speakers.services')

router.route('/')
  .get(speakersServices.getAllSpeakers)
  .post(speakersServices.postSpeaker)

router.route('/:id')
  .get(speakersServices.getSpeakerById)
  .patch(speakersServices.patchSpeaker)
  .delete(speakersServices.deleteSpeaker)

module.exports = router