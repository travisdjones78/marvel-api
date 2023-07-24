const express = require('express')
const router = express.Router()
const charController = require('../controllers/character-controller')

router.get('/allChars',charController.get_all_Characters)
router.get('/test',charController.test)

module.exports = router