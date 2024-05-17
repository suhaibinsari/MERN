

const express = require("express");
const router = express.Router();

//import using this if controllers a singuler

const {home, register, login} = require('../controllers/auth-controllers')

//import using name if controllers are in bulk

const authControllers = require('../controllers/auth-controllers')


// adding schema from zod which we have created




const {signupSchema, loginSchema} = require('../validators/auth-validator')


// adding validate from zod which we have created

const validate = require('../middlewares/validate-middleware')


const authMiddleware = require('../middlewares/auth-Middleware')

// method 1

// router.get("/",(req, res) => {
//     res.status(200).send("app rouuter");
// })


// method 2 useful

// router.route('/').get((req, res) => {
//     res
//     .status(200)
//     .send('appppppp')
// })


// router.route('/register').get((req, res) =>{
//     res
//     .status(200)
//     .send('register')
// })


//data getting from controller

router.route('/').get(authControllers.home)
router.route('/register').post(validate(signupSchema), authControllers.register)
router.route('/login').post(validate(loginSchema), authControllers.login)
// jwt token verification
router.route('/user').get(authMiddleware, authControllers.user)

module.exports = router