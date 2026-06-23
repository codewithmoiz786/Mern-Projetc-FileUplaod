const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    uri: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    }
})


const file = mongoose.model("file", fileSchema)

module.exports = file