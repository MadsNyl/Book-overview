require('dotenv').config()
const express = require('express')
const cors = require('cors')

// init app
app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

// start server
app.listen(process.env.PORT, console.log(`Server started at http://localhost:${PORT}`))

