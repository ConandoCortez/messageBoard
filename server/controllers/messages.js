var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = {
    show: function(req,res){
        Post.find({}).populate('comments').exec(function(err, posts){
            if(err){
                console.log("There is an error in our post");
            }
            else{
                res.render('index', {post: posts})
            }
        })
    },
    createPost: function(req, res){
        var post = new Post({name: req.body.name, message: req.body.message});
        post.save(function(err){
            if(err){
                console.log("There is an error!");
                res.render('index', {errors: post.errors});
            }
            else{
                res.redirect('/')
            }
        });
    },
    createComment: function(req, res){
        Post.findOne({_id: req.params.id}, function(err, post){
            console.log(req.body.name)
            var comment = new Comment({name: req.body.name, text: req.body.text});
            // Set the reference to the post
            comment._post = post._id;
            // Save both into the database
            comment.save(function(err){
                post.comments.push(comment);
                post.save(function(err){
                    if(err){
                        console.log("There is an error with saving comments into database");
                    }
                    else{
                        res.redirect('/');
                    }
                });
            });
        });
    }
}
