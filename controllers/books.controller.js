const express = require('express')
const pool = require('../db/books.db')

exports.createBook = async (req, res) => {
    try {  
        const title = req.body.title
        const author = req.body.author
        const pages = req.body.pages
        const rating = req.body.rating
        const book = await pool.query('INSERT INTO books (title, author, pages, rating) VALUES ($1, $2, $3, $4) RETURNING *', [title, author, pages, rating])
        res.status(200).json(book)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}