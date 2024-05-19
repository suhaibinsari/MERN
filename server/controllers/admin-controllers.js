const User = require("../models/user-model")
const Contact = require('../models/contact-model')


const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 })
        console.log('USers from controller', users)
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users Found" })
        }
        return res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}



const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find()
        if (!contacts || contacts === 0) {
            return res.status(404).json({ message: "No Contacts Found" })
        }
        return res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}

//single User Logic

const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 })
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}



const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id
        await User.deleteOne({ _id: id })
        return res.status(200).json({ message: "User Deleted Successfully" })
    } catch (error) {
        // next(error)
        next(error)
    }
}


const updateUserById = async (req, res, next) => {
    try {
        const id = req.params.id
        const updateUserData = req.body
        const updatedUser = await User.updateOne({ _id: id }, {
            $set: updateUserData
        })
        return res.status(200).json(updatedUser)
    } catch (error) {
        // next(error)
        console.log('123 erreo', error)
    }
}


const deleteContactsById = async (req, res, next) => {
    try {
        const id = req.params.id
        await Contact.deleteOne({ _id: id })
        return res.status(200).json({ message: "Contact Deleted Successfully" })
    } catch (error) {
        // next(error)
        // next(error)
        res.status(404).json({message: error})
    }
}



module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactsById }