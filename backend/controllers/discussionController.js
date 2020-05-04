// Récuperation du model
const Discussion = require('../models/discussion');
bcrypt = require ('bcrypt');
jwt = require('jsonwebtoken'),
jwt_secret = process.env.JWT_SECRET_KEY;

//créer une discussion (user)

exports.createDiscussion = function(req, res) {
    jwt.verify(req.headers["x-access-token"], jwt_secret, function(err, decoded){
        if (err){
            console.log (err)
            res.status(401).json('not allowed');
        }   
        else if(decoded.id){
            Discussion.create(req.body, function(err, newDiscussion){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(newDiscussion)
                });
        };
    });
};

// obtenir toutes les discussions (user)

exports.getAllDiscussions = function(req, res) {
    jwt.verify(req.headers["x-access-token"], jwt_secret, function (err, decoded){
        if (err){
            console.log (err)
            res.status(401).json('not allowed');
        }      
        else if(decoded.id){
            Discussion.find({$or: [{userId: decoded.id}, {likedUserId: decoded.id}]}, function(err, discussions){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(discussions)
            });
        };
    });
};