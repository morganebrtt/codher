// Récuperation du model
const Message = require('../models/message');
bcrypt = require ('bcrypt');
jwt = require('jsonwebtoken'),
jwt_secret = process.env.JWT_SECRET_KEY;

//créer un message (user)

exports.createMessage = function(req, res) {
    jwt.verify(req.headers["x-access-token"], jwt_secret, function(err, decoded){
        if (err){
            console.log (err)
            res.status(401).json('not allowed');
        }   
        else if(decoded.id){
            Message.create(req.body, function(err, newMessage){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(newMessage)
                });
        };
    });
};