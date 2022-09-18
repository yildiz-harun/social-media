const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database is now connected.");
}

module.exports = { connectDB }