require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')

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


app.get('/', (req, res) => {

})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
