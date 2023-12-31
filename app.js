require("dotenv").config();
const express = require('express');
const products_route = require('./routes/products');
const app = express();
const connectDB = require('./db/connect');

const PORT = process.env.PORT;

app.use('/products', products_route);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();