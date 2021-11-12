require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bookRouter = require('./routes/books.route')

// init app
app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// routes
app.use('/books', bookRouter)

// start server
app.listen(process.env.PORT, console.log(`Server started at http://localhost:${PORT}`))

