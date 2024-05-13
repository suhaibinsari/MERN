
require("dotenv").config(); // required to get env file
const express = require("express");
// CORS is a security feature implemented in web browsers to prevent unauthorized access to resources hosted on a different domain
const cors = require('cors');

const app = express();
const authRoute = require('./routes/auth-router')
const contactRoute = require('./routes/contact-router')
const serviceRoute = require('./routes/service-router')
const connectDb = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");


// let tackle cors/ unauutohorized access

const corsOptions = {
    origin: "http://localhost:5173",
    method:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOptions))


app.use(express.json()) // required to show json formate

//auth route - login/signup
app.use('/api/auth', authRoute)
//contact route
app.use('/api/form', contactRoute)
//contact route
app.use('/api/data', serviceRoute)


app.get('/', (req, res) => {
    res.status(200).send('hello world')
})
app.get('/about', (req, res) => {
    res.status(200).send('hello world')
})
app.get('/abc', (req, res) => {
    res.status(200).send('hello moon')
})

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// import errorMiddleware.js here

app.use(errorMiddleware)

const port = 3000;
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`server is ruunning on port ${port}`)
    })
})