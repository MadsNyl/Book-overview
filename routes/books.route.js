const express = require('express')
const router = express.Router()
const controller = require('../controllers/books.controller')

// create book
router.post('/new', controller.createBook)

// get all books
router.get('/', controller.getAllBooks)

// get number of books
router.get('/count', controller.getNumberOfBooks)

// get number of read books
router.get('/read', controller.getNumberOfReadBooks)

// update book
router.put('/update/:id', controller.updateBook)

// delete book
router.delete('/delete/:id', controller.deleteBook)

module.exports = router