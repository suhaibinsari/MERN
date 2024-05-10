// method 2 to get mongoose
const {Schema, model} = require('mongoose');
//


//defining schema
const contactSchema = new Schema({

    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    subject:{
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
})

// create a model or a collection

const Contact = new model("Contact", contactSchema)

module.exports = Contact