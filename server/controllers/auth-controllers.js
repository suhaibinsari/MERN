const User = require("../models/user-model")
// const bcrypt = require('bcryptjs')


// home logic


const home = async (req, res) => {

    try {
        res
            .status(200)
            .send("I am from controller")

    } catch (error) {
        console.log('error', error)
    }

}


// register logic


// const Register = async (req, res) => {
//     try {
//         console.log('request body',req.body)
//         const data = req.body
//         res.status(200).json({data})
//     } catch (error) {
//         res.status(500).json({error: "internel server"})
//         console.log(error)
//     }
// }


const register = async (req, res) => {
    try {
        console.log('request body', req.body)
        const { username, email, phone, password } = req.body

        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(400).json({ msg: "email already exists" })
        }

        const userCreated = await User.create({ username, email, phone, password })

        // implementing json web token after userCreated token: ......
        // userCreated shows all the data message: userCreated

        res.status(201).json({ message: 'registered sucessful', token: await userCreated.generateToken(), userId: userCreated.id.toString() })
    } catch (error) {
        res.status(500).json({ error: "internel server" })
        console.log(error)
    }
}




// const Register = async (req, res) => {
//     try {
//         res
//         .status(200).json({message:"Register from controller"})
//     } catch (error) {
//         res.status(500).json({error: "internel server"})
//         console.log(error)
//     }
// }


// const Register = async (req, res) => {
//     try {
//         res
//             .status(200)
//             .send('Register from controller')
//     } catch (error) {
//         console.log('error', error)
//     }
// }





// login logic

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        //email valid or not

        const userExist = await User.findOne({ email })
        console.log(userExist)

        if(!userExist){
            return res.status(400).json({message: "invalid credentials"})
        }

      // method 1 => const isPasswordValid = await bcrypt.compare(password, userExist.password)
      // method 2
        const isPasswordValid = await userExist.comparePassword(password)

        if(isPasswordValid){
            res.status(200).json({
                msg: 'Login sucessful',
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            })
        }else{
            res.status(401).json({message: 'Invalid email or password'})
        }

    } catch (error) {


        const status = 401
        const message = "Invalid Email or Password"
        const extraError = err.errors[0].message

        const err = {
            status,
            message,
            extraError
        }

        res.status(500).json("internel server error")
    }
}





module.exports = { home, register, login }

