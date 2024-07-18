const {error} = require('console');
const mongoose = require('mongoose');
 const local_URL = 'mongodb://127.0.0.1:27017/ResumeProject'
const ATLAS_URL = 'mongodb+srv://Muskan:muskan2004@cluster0.2uxhbwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = () => {
    return mongoose.connect(ATLAS_URL)
    .then(() => {
        console.log('connect database successfully');
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = connectDB;