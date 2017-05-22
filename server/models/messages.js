// Require mongoose
var mongoose = require('mongoose');
// Create the schema
var Schema = mongoose.Schema
var postSchema = new mongoose.Schema({
    name: {type: String, required: [true, "You must have a name of at least 4 characters"], minlength: 4},
    message: {type: String, required: [true, "Message must have at least 5 characters"], minlength: 5},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamp: true });

mongoose.model('Post', postSchema);
var Post = mongoose.model('Post');
