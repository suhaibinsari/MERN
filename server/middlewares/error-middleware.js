const errorMiddleware = (err, req, res, next) => {


    const status = err.status || 500;

    const message = err.message || "Backened Error";

    const extraError = err.extraError || "Extra Backend Error";


    return res.status(status).json({ message, extraError })

}


module.exports = errorMiddleware