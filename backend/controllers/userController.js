// // Récuperation du model
const User = require('../models/user');
bcrypt = require ('bcrypt');
jwt = require('jsonwebtoken'),
jwt_secret = process.env.JWT_SECRET_KEY;

exports.getAllUsers = function(req, res) {
    let isAdmin = function(token) {
        jwt.verify(token, jwt_secret, function(err, decoded) {
            if (err)
                return false;
            else if (decoded.admin)
                return true;
            else
                return false;
        });
    };
    if (!isAdmin)
        res.status(401).json('no token provided');
    else {
        User.find({}, function(err, users) {
            if (err)
                res.status(400).json(err);
            else
                res.status(200).json(users);
        });
    }
}

exports.getUserById = function(req, res) {
    let checkToken = function(token) {
        jwt.verify(token, jwt_secret, function(err, decoded) {
            if (err)
                return false;
            else
                return true;
        });
    };
    let dataToken = function(token) {
        jwt.verify(token, jwt_secret, function(err, decoded) {
            if (err)
                return false;
            else
                return decoded;
        });
    }
    if (!checkToken)
        res.status(401).json('no token provided');
    else {
        User.find({_id: dataToken.id}, function(err, user) {
            if (err)
                res.status(400).json(err);
            else
                res.status(200).json(user);
        });
    }
}
