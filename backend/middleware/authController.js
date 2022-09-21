const jwt = require("jsonwebtoken")
const { User } = require("../models/user.js")

const controlAuth = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return
    }
    const token = authorization.split(" ")[1]
    const { id } = jwt.verify(token, process.env.SECRET)

    console.log("Id: " + id);
    //req.user = await User.findOne({ _id: id }).select("_id")
    req.user = id
    next()
}

module.exports = { controlAuth }