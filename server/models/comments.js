// Require mongoose
var mongoose = require('mongoose');
// Create the schema
var Schema = mongoose.Schema
var commentSchema = new mongoose.Schema({
    name: {type: String, required:[true, "You must have a name of at least 4 characters"], minlength: 4},
    text: {type: String, required: [true, "Comment must have at least 5 characters"], minlength: 5},
    _post: {type: Schema.Types.ObjectId, ref: 'Post'},
}, { timestamps: true });

mongoose.model('Comment', commentSchema);
var Comment = mongoose.model('Comment');
