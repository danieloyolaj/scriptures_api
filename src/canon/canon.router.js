const router = require('express').Router()
const canonServices = require('./canon.services')

//Root route
router.route('/')
  .get(canonServices.getAllCanons)
  .post(canonServices.createCanon)

router.route('/:id')
  .get(canonServices.getCanonById)
  .patch(canonServices.patchCanon)
  .delete(canonServices.deleteCanon)

module.exports = router