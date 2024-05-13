const Service = require('../models/service-model')



const services = async (req, res) => {
    try {
        const response = await Service.find()

        console.log('res_ser', response)
        if (!response) {
            res.status(500).json({ msg: "No Service service" })
            return
        }
        res.status(200).json({ response })
    } catch (error) {
        res.status(500).json(`services: ${error}`)
    }
}


module.exports = services