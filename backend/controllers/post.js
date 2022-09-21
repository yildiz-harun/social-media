const { Post } = require("../models/post.js")

const getPosts = async (req, res) => {
    const user_id = req.user

    const posts = await Post.find({ user_id }).sort({ createdAt: -1 })
    res.json(posts)
}

const getPost = async (req, res) => {
    const { id } = req.params
    const post = await Post.findById(id)
    res.json(post)
}

const createPost = async (req, res) => {
    const user_id = req.user
    console.log(req.user);
    const { value } = req.body
    if (!value) {
        return
    }
    console.log("1");
    const post = await Post.create({ value, user_id })
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
    console.log("delete in backend");
    const post = await Post.findOneAndDelete({ _id: id })
    res.json(post)
}

module.exports = { getPosts, getPost, createPost, updatePost, deletePost }