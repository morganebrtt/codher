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
    needHelp: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Skill"
        }
    ],
    canHelp: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Skill"
        }
    ],
    createdDate: {
        type: Date,
        default: Date.now,
    },
    updatedDate: {
        type: Date, 
        default: Date.now,
    },
    skillsId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Skill"
        }
    ],
    interestsId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Interest"
        }
    ],
    admin: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('User', userSchema);