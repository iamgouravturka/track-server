const mongoose = require('mongoose')

const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        heading: Number,
        speed: Number
    }
})

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        reg: 'User'
    },
    name: {
        type: String,
        default: ''
    },
    locations: [pointSchema]
})

mongoose.model('Track', trackSchema)

