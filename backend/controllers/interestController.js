// Récuperation du model
const Interest = require('../models/interest');
bcrypt = require ('bcrypt');
jwt = require('jsonwebtoken'),
jwt_secret = process.env.JWT_SECRET_KEY;

//créer une compétence (admin)

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