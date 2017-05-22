// Require mongoose
var mongoose = require('mongoose');
// Require the fs module for loading model files
var fs = require('fs');
// Require path for getting the models path
var path = require('path');
// Connect to mongoose!
mongoose.connect('mongodb://localhost/messageBoard');
// Create a variable that points to the path where all the models are
var models_path = path.join(__dirname, './../models');
// Read all of the files in the models_path and require(run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >=0 ){
        //require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
})
