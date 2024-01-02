const mongoose = require('mongoose')

const pointSchema = new mongoose.Schema({
  coords: {
    accuracy: Number,
    altitude: Number,
    heading: Number,
    latitude: Number,
    longitude: Number,
    speed: Number,
  },
  timestamp: Number,
})

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    default: '',
  },
  locations: [pointSchema]
})

mongoose.model('Track', trackSchema)
