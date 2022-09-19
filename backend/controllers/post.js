const { Post } = require("../models/post.js")

const getPosts = async (req, res) => {
    const posts = await Post.find({}).sort({ createdAt: -1 })
    res.json(posts)
}

const getPost = async (req, res) => {
    const { id } = req.params
    const post = await Post.findById(id)
    res.json(post)
}

const createPost = async (req, res) => {
    const { value } = req.body
    const post = await Post.create({ value })
    res.json(post)
}

const updatePost = async (req, res) => {
    const { id } = req.params
    const { value } = req.body
    const post = await Post.findOneAndUpdate({ _id: id }, { value })
    res.json(post)
}

const deletePost = async (req, res) => {
    const { id } = req.params
    const post = await Post.findOneAndDelete({ _id: id })
    res.json(post)
}

module.exports = { getPosts, getPost, createPost, updatePost, deletePost }