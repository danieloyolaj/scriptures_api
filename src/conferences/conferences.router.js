const router = require('express').Router()
const conferencesServices = require('./conferences.services')

router.route('/')
  .get(conferencesServices.getAllConferences)
  .post(conferencesServices.createConference)

router.route('/:id')
  .get(conferencesServices.getConferenceById)
  .patch(conferencesServices.patchConference)
  .delete(conferencesServices.deleteConference)

module.exports = router