const mongoose = require('mongoose');

let messageSchema = new mongoose.Schema({
    content: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    senderId: {
        type : mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    discussionId : {
        type : mongoose.Schema.Types.ObjectId, 
        ref: 'Discussion'
    },
});

module.exports = mongoose.model('Message', messageSchema);