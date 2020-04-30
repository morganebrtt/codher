// Récuperation du model
const Interest = require('../models/interest');
bcrypt = require ('bcrypt');
jwt = require('jsonwebtoken'),
jwt_secret = process.env.JWT_SECRET_KEY;

//créer un intérêt (admin)

exports.createInterest = function(req, res) {
    jwt.verify(req.headers["x-access-token"], jwt_secret, function(err, decoded){
        if (err){
            console.log (err)
            res.status(401).json('not an admin');
        }   
        else if(decoded.admin){
            Interest.create(req.body, function(err, newInterest){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(newInterest)
                });
        };
    });
};

//supprimer un intérêt (admin)

exports.deleteInterest = function(req, res) {
    jwt.verify(req.headers["x-access-token"], jwt_secret, function(err, decoded){
        if (err){
            console.log (err)
            res.status(401).json('not an admin');
        }   
        else if(decoded.admin && req.body.id){
            Interest.deleteOne({_id: req.body.id}, function(err, interest) {
                if(err)
                    res.status(400).json(err)
                else
                    res.status(200).json(interest);
            });
        };
    });
};

// obtenir tous les intérêts

exports.getAllInterests = function(req, res) {
    jwt.verify(req.headers["x-access-token"], jwt_secret, function (err, decoded){
        if (err){
            console.log (err)
            res.status(401).json('not allowed');
        }      
        else if(decoded.id){
            Interest.find({}, function(err, interests){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(interests)
            });
        };
    });
};