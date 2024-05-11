const jwt = require("jsonwebtoken")

const authMiddleware = async (req, res, next) => {
// import user from models

const User = require('../models/user-model')

const token = req.header('Authorization')

if(!token){

    return (
        res
        .status(401)
        .json({message:"Unauthorized HTTP, token not provided"})
    )
}

// to remove the Bearer and space
const jwtToken = token.replace('Bearer', "").trim()
console.log('token from auth middleware', jwtToken)


try{

    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRECT_KEY)

    const  userData = await User.findOne({email: isVerified.email}).select({
        password: 0
    })
    console.log(userData)

//custom properties through this we can pass information between middleware functions

    req.user = userData
    req.token = token
    req.userID = userData._id

}catch(error){
    console.log('Error from Token Auth Middle-ware',error)
    res.status(401).json({message: "Unauthorized, Invalid Token Middelware auth"})
}

next()
}

module.exports = authMiddleware