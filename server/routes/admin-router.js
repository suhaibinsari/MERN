const express = require("express")
const adminControllers = require("../controllers/admin-controllers")
const authMiddleware = require("../middlewares/auth-Middleware")
const adminMiddleware = require("../middlewares/admin-middlewar")
const router = express.Router()


router.route('/users').get(authMiddleware, adminMiddleware, adminControllers.getAllUsers)
router.route('/users/:id').get(authMiddleware, adminMiddleware, adminControllers.getUserById)
router.route('/users/update/:id').patch(authMiddleware, adminMiddleware, adminControllers.updateUserById)
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, adminControllers.deleteUserById)
router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, adminControllers.deleteContactsById)
router.route('/contacts').get(authMiddleware,adminMiddleware, adminControllers.getAllContacts)

module.exports = router