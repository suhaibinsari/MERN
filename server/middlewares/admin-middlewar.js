const adminMiddleware = async (req, res, next) => {
    try {

        const adminRole = req.user.isAdmin
        if (!adminRole) {
            res.status(404).json({ messsage: "Access Denied: User is not a Admin" })
        }
        // res.status(200).json({ msg: req.user  }) type 1 to show all users
        // res.status(200).json({ msg: req.user.isAdmin }) tyype 2 to show only admin field
        // console.log(req.user.isAdmin)
        
        // if user is admin proceed to the next middleware
        next()

    } catch (error) {
        next(error)
    }

}

module.exports = adminMiddleware