const router = require('express').Router()
const topicsServices = require('./topics.services')

router.route('/')
  .get(topicsServices.getAllTopics)
  .post(topicsServices.postTopic)

router.route('/:id')
  .get(topicsServices.getTopicById)
  .patch(topicsServices.patchTopic)
  .delete(topicsServices.deleteTopic)

module.exports = router
