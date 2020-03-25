const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        // required: 'Prénom obligatoire'
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
        type: String
    },
    profilePic: {
        type: String
    },
    city: {
        type: String
    },
    experience: {
        type: String
    },
    status: {
        type: String
    },
    needHelp: {
        type: String
    },
    canHelp: {
        type: String
    },
    createdDate: {
        type: String
    },
    updatedDate: {
        type: String
    },
    // skillsId: {
    // },
    // interestsId: {}
});

module.exports = mongoose.model('User', userSchema);