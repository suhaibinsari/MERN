const { z } = require('zod')

// creating object schema

const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be of 3 character" })
        .max(255, { message: "Name must not be more than 255 characters" }),

    email: z
        .string({ required_error: "Email is reequired" })
        .trim()
        .email({ message: "Invalid Email" })
        .min(3, { message: "Email must be valid" })
        .max(255, { message: "Email is not more than 255 Chars" }),

    phone: z
        .string({ required_error: "Phone is reequired" })
        .trim()
        .min(10, { message: "Phone must be valid of 10 Chars" })
        .max(20, { message: "Phone is not more than 20 Chars" }),

    password: z
        .string({ required_error: "Password is reequired" })
        .trim()
        .min(8, { message: "Password must be valid of 8 Chars" })
        .max(1024, { message: "Password is not more than 1024 Chars" }),
})


module.exports = signupSchema


