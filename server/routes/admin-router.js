const express = require("express")
const adminControllers = require("../controllers/admin-controllers")
const authMiddleware = require("../middlewares/auth-Middleware")
const adminMiddleware = require("../middlewares/admin-middlewar")
const router = express.Router()


router.route('/users').get(authMiddleware, adminMiddleware, adminControllers.getAllUsers)
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, adminControllers.deleteUserById)
router.route('/contacts').get(authMiddleware,adminMiddleware, adminControllers.getAllContacts)

module.exports = router