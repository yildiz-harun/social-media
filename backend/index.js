require("dotenv").config({ path: './config/.env' })
const cors = require("cors")

const { connectDB } = require("./config/db")//function for connection to the database
const express = require("express")
const app = express()
app.use(express.json())
app.use(cors())

app.listen("5000", () => {
    console.log("Server started listening on port: 5000");
    connectDB()
})

const { userRouter } = require("./routes/user")
const { postRouter } = require("./routes/post")

app.use("/api/user", userRouter)
app.use("/api/posts", postRouter)