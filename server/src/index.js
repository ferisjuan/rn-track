require('dotenv').config()
require('./models/User')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express()
app.use(bodyParser.json())
app.use(authRoutes)

const mongoURI = process.env.MONGO_URI
mongoose.connect(mongoURI, {
  retryWrites: true,
})
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance')
})
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to mongo', err)
})


app.get('/', [requireAuth], (req, res) => {
  console.log(req.user)
  res.send(`You email: ${req.user.email}`)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
