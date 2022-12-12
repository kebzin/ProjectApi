const express = require('express'); // importing express
const app = express(); // naming express to app
const connect = require('./modules/connect'); // importing connect file from modul
const routes = require('./routes/router'); // importing router from the routes module
app.use(express.json()); // telling our app to used the json server for formating 
app.use(express.urlencoded({ extended: true })); // for this i don't know yet
// Connect to Database
void (async () => { // void function does not return any value , it mean that the function does cannot be stored in a variable 
  try {
    await connect(); // this is a function from connect
    console.log('connected to database'); // if connect is true then succesfully connected
  } catch (error) {
    console.log('error connecting to database:', error.message); // else if connect is false then cnot connected
  }
})();

app.use('/api', routes); // using the routes
module.exports = app // exporting the app

