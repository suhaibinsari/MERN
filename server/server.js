
require("dotenv").config(); // required to get env file
const express = require("express");
const app = express();
const router = require('./routes/auth-router')
const connectDb = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json()) // requuired to show json formate


app.use('/api/auth', router)

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