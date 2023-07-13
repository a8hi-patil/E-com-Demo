const mongoose  = require("mongoose")

const connectDB = async() => {
    try {
        const connect = await mongoose.connect('mongodb://0.0.0.0:27017/VintechSoftwareTestRound')
        console.log("DB Connection Succesful")
        console.log("Connected to database :", connect.connection.name)
    } catch(err) {
        console.log(err) 
    }
}
module.exports = connectDB 