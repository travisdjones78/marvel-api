const express = require('express')
const router = express.Router()
const eventController = require('../controllers/event-controller')

router.get('/allEvents',eventController.get_all_Events)

module.exports = router