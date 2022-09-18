const express = require("express")
const userRouter = express.Router()

//const { signup, login } = require("../controllers/user")

userRouter.post("/register", (req, res) => {
    res.json({ "username": "harun" })
})

module.exports = { userRouter }