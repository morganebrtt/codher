const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    email: {
        type: String,
        required: 'Email obligatoire',
        unique: true
    },
    password: {
        type: String,
        required: 'Mot de passe obligatoire'
    },
    bio: {
        type: String,
    },
    profilePic: {
        type: String,
    },
    city: {
        type: String,
    },
    experience: {
        type: String,
    },
    status: {
        type: String,
    },
    needHelp: {
        type: String,
    },
    canHelp: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    updatedDate: {
        type: Date, 
        default: Date.now,
    },
    // skillsId: {
    // },
    // interestsId: {}
    admin: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('User', userSchema);