var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
mongoose.Promise = global.Promise

// Create express app
var app = express();
// Connect mongoose with database
mongoose.connect('mongodb://localhost/messageBoard');
// Require the mongoose configuration file which doe sthe rest for us
require('./server/config/mongoose.js')

// Integrate body-parser with the App
app.use(bodyParser.urlencoded({extended: true}));
// Require path
var path = require('path');
console.log(path)
// Set where the static folder directory is
app.use(express.static(path.join(__dirname, './client/static')));
// app.use(express.static(path.join(__dirname, './bower_components')))

// Setting up Views folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting view engine to be ejs
app.set('view engine', 'ejs');
// Store the routes into a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

// Start the server
app.listen(8000, function(){
    console.log("Listening on port 8000");
})
