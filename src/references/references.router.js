const router = require('express').Router()
const referencesServices = require('./references.services')

router.route('/')
  .get(referencesServices.getAllReferences)
  .post(referencesServices.postReference)

router.route('/:id')
  .get(referencesServices.getReferenceById)
  .patch(referencesServices.patchReference)
  .delete(referencesServices.deleteReference)

module.exports = router