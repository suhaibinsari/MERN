

// await schema.parseAsync(req.body) by default method of zod

// schema is what we have created in validators => auth-validators.js


// Schema Defined for Register

const validate = (schema) => async (req, res, next) => {
    try {

        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()

    } catch (err) {

        const status = 422
        const message = "Fill input properly......"
        const extraError = err.errors[0].message

        const error = {
            status,
            message,
            extraError
        }


        console.log(error)
        // res.status(400).json({ mess: message })
        next(error)
    }
}

module.exports = validate