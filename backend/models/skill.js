const mongoose = require('mongoose');

let skillSchema = new mongoose.Schema({
    name: {
        type: String
    }
});

module.exports = mongoose.model('Skill', skillSchema);