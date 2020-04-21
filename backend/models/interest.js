const mongoose = require('mongoose');

let interestSchema = new mongoose.Schema({
    name: {
        type: String
    }
});

module.exports = mongoose.model('Interest', interestSchema);