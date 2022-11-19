
const mongoose = require('mongoose');
const URI = "mongodb+srv://kebba:Howareyoudoing1@rentalapp.9p5ry7s.mongodb.net/?retryWrites=true&w=majority"
const connect = () => {
    return mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false,
    })
};


module.exports = connect