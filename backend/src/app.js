
const express = require('express')
const fileRoute = require('./routes/file.route')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use("/post", fileRoute)





module.exports = app