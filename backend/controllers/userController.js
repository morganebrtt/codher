// Récuperation du model
const User = require('../models/user');
bcrypt = require ('bcrypt');
jwt = require('jsonwebtoken'),
jwt_secret = process.env.JWT_SECRET_KEY;

// obtenir tous les users (admin)

exports.getAllUsers = function(req, res) {
    jwt.verify(req.headers["x-access-token"], jwt_secret, function (err, decoded){
        if (err){
            console.log (err)
            return ('Not an admin')
        }      
        else if(decoded.admin){
            User.find({}, function(err, users){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(users)
                })
            }
        })
}

// obtenir un user avec son Id 

exports.getUserById = function(req, res) {
    jwt.verify(req.headers["x-access-token"], jwt_secret, function(err, decoded){
        if (err) {
            console.log(err); 
            res.status(401).json('No token provided'); 
        }
        else if ({_id : decoded.id}){
            User.findOne({_id: decoded.id}, function(err, user){
                if (err)
                    res.status(400).json(err);
                else
                    res.status(200).json(user);
            });
        };
    });
}; 

// supprimer un user (en tant qu'user ou en tant qu'admin)

exports.deleteUser = function(req, res){
    jwt.verify(req.headers["x-access-token"], jwt_secret, function(err, decoded){
        if (err) {
            console.log(err);
            res.status(401).json('No token provided'); 
        }
        else if ({_id : decoded.id}){
            User.deleteOne({_id: decoded.id}, function(err) {
                if(err)
                    res.status(400).json(err)
                else
                    res.status(200).json('user has been deleted');
            });
        }
        else if (decoded.admin){
            User.deleteOne({_id: req.params.id}, function(err) {
                if(err)
                    res.status(400).json(err)
                else
                    res.status(200).json('user has been deleted');
            });
        };
    });
};
