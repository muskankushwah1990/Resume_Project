const {error} = require('console');
const mongoose = require('mongoose');
 const local_URL = 'mongodb://127.0.0.1:27017/ResumeProject'


const connectDB = () => {
    return mongoose.connect(local_URL)
    .then(() => {
        console.log('connect database successfully');
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = connectDB;