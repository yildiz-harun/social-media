require("dotenv").config({ path: './config/.env' })

const { connectDB } = require("./config/db")//function for connection to the database
const express = require("express")
const app = express()

app.listen("5000", () => {
    console.log("Server started listening on port: 5000");
    connectDB()
})

app.get("/", (req, res) => {
    res.send("/")
})

const { userRouter } = require("./routes/user")
app.use("/api/user", userRouter)