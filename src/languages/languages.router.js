const router = require('express').Router()
const languagesServices = require('./languages.services')

router.route('/')
  .get(languagesServices.getAllLanguages)
  .post(languagesServices.createLanguage)

router.route('/:id')
  .get(languagesServices.getLanguageById)
  .patch(languagesServices.patchLanguage)
  .delete(languagesServices.deleteLanguage)

module.exports = router