const express = require('express')
const pool = require('../db/books.db')


// get all books
exports.getAllWishlistBooks = async (req, res) => {
    const page = req.query.page * 6
    try {
        const books = await pool.query('SELECT * FROM wishlist LIMIT 6 OFFSET $1', [page])
        res.status(200).json(books.rows)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// create book
exports.createWishlistBook = async (req, res) => {
    try {
        const title = req.body.title
        const author = req.body.author
        const pages = req.body.pages
        const link = req.body.link
        const price = req.body.price
        const book = await pool.query('INSERT INTO wishlist (title, author, pages, link, price) VALUES ($1, $2, $3, $4, $5)', [title, author, pages, link, price])
        res.status(200).json(book)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
} 

// delete book
exports.deleteWishlistBook = async (req, res) => {
    const id = req.params.id
    try {
        const deleted = await pool.query('DELETE FROM wishlist WHERE id = $1', [id])
        res.status(200).json(deleted)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// get number of books from wishlist
exports.getNumberOfWishlistBooks = async (req, res) => {
    try {
        const books = await pool.query('SELECT COUNT(*) FROM wishlist')
        res.status(200).json(books.rows[0])
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}