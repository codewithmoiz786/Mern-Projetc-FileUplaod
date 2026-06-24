const mongoose = require('mongoose')



async function connectDB() {
    await mongoose.connect("mongodb+srv://abdulmoiz:abdulmoiz9279@cluster0.csbesk7.mongodb.net/?appName=Cluster0")
        .then(() => {
            console.log("Connected");
        }).catch((err) => {
            console.log(err);

        })
}


module.exports = connectDB