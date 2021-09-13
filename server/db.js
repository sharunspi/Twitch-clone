const mongoose = require('mongoose')
const DATABASE = 'twitchdb'
const PORT ='27017'


const db = mongoose.connect(`mongodb://localhost:${PORT}/${DATABASE}`)

module.exports = db