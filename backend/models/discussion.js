const mongoose = require('mongoose');

let discussionSchema = new.mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    likedUserId : {
        type : mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
});

module.exports = mongoose.model('Discussion', discussionSchema);