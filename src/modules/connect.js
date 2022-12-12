
const mongoose = require('mongoose'); // importing mongoose
const URI = "mongodb+srv://kebba:Howareyoudoing1@rentalapp.9p5ry7s.mongodb.net/?retryWrites=true&w=majority" // link to my database at atlass
const connect = () => { // function that connect my app to the server
    return mongoose.connect(URI, { // inside mongoose there is a function calle connect which take a paramater, in the paramater am passing the URI
        useNewUrlParser: true, // no idea for now
        useUnifiedTopology: true, // no idea for now
        autoIndex: false, // no idea for now
    })
};


module.exports = connect // exporting the connect function