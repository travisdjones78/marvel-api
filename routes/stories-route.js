const express = require('express')
const router = express.Router()

router.get('/v1/public/stories/')
router.get('/v1/public/stories/:storyId')
router.get('/v1/public/stories/:storyId/characters')
router.get('/v1/public/stories/:storyId/comics')
router.get('/v1/public/stories/:storyId/creators')
router.get('/v1/public/stories/:storyId/events')
router.get('/v1/public/stories/:storyId/series')

module.exports = router