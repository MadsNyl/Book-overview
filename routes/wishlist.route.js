const express = require('express')
const router = express.Router()
const controller = require('../controllers/wishlist.controller')


// get all books from wishlist
router.get('/', controller.getAllWishlistBooks)

// get number of books from wishlst
router.get('/count', controller.getNumberOfWishlistBooks)

// create wishlist book
router.post('/new', controller.createWishlistBook)

// delete wishlist book
router.delete('/delete/:id', controller.deleteWishlistBook)


module.exports = router
