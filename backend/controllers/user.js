const { User } = require("../models/user")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    const { username, password } = req.body

    const userExists = await User.findOne({ username })
    if (userExists) {
        return
    }
    const salt = await bcryptjs.genSalt(10)
    const hashed = await bcryptjs.hash(password, salt)
    const user = await User.create({ username, password: hashed })

    const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: '3d' })

    res.json({ username, token })
}

module.exports = { register }

