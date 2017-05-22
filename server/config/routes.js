var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var messages = require('../controllers/messages.js')

module.exports = function(app){
    app.get('/', function(req, res){
        messages.show(req, res);
    })
    // Save a new post message into the database, and redirect back to the homepage
    app.post('/message',function(req,res){
        messages.createPost(req,res);
    });
    // Post a comment based off individual post.
    app.post('/comment/:id', function(req, res){
        messages.createComment(req,res);
    });
}
