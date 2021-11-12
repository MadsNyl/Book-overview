const express = require('express')
const router = express.Router()
const controller = require('../controllers/books.controller')

// create book
router.post('/new', controller.createBook)

module.exports = router