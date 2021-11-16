const express = require('express')
const pool = require('../db/books.db')

// create book
exports.createBook = async (req, res) => {
    try {  
        const title = req.body.title
        const author = req.body.author
        const pages = req.body.pages
        const book = await pool.query('INSERT INTO book (title, author, pages) VALUES ($1, $2, $3) RETURNING *', [title, author, pages])
        res.status(200).json(book)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// get all books
exports.getAllBooks = async (req, res) => {
    const page = req.query.page * 6
    try {
        const books = await pool.query('SELECT * FROM book ORDER BY title LIMIT 6 OFFSET $1', [page])
        res.status(200).json(books.rows)
    } catch(error) {    
        res.status(500).json({ message: error.message })
    }
}

// get number of books
exports.getNumberOfBooks = async (req, res) => {
    try {
        const count = await pool.query('SELECT COUNT(*) FROM book')
        res.status(200).json(count.rows[0])
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// get number of read books
exports.getNumberOfReadBooks = async (req, res) => {
    try {
        const count = await pool.query('SELECT COUNT(*) FROM book WHERE status = TRUE')
        res.status(200).json(count.rows[0])
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// update book
exports.updateBook = async (req, res) => {
    const id = req.params.id
    try {
        const title = req.body.title
        const author = req.body.author
        const pages = req.body.pages
        const status = req.body.status
        const updated = await pool.query('UPDATE book SET title = $1, author = $2, pages = $3, status = $4 WHERE id = $5', [title, author, pages, status, id])
        res.status(200).json(updated)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

// delete book
exports.deleteBook = async (req, res) => {
    const id = req.params.id
    try {
        const deleted = await pool.query('DELETE FROM book WHERE id = $1', [id])
        res.status(200).json(deleted)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}