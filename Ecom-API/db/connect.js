const mongoose = require('mongoose');

const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected !");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;