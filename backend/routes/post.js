const express = require("express")

const postRouter = express.Router()

const { getPosts, getPost, createPost, updatePost, deletePost } = require("../controllers/post")
const { controlAuth } = require("../middleware/authController")

postRouter.use(controlAuth)

postRouter.get("/", getPosts)
postRouter.get("/:id", getPost)
postRouter.post("/", createPost)
postRouter.patch("/:id", updatePost)
postRouter.delete("/:id", deletePost)

module.exports = { postRouter }