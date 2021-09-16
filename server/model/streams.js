const { Schema, model } = require('mongoose')

const streamsSchema =  new Schema({
    title:String,
    description:String,
    userId:String
},{
    timestamps:true
})

module.exports = model('Stream', streamsSchema, 'streams')
