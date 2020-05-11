// Récuperation du model
const Skill = require('../models/skill');
bcrypt = require ('bcrypt');
jwt = require('jsonwebtoken'),
jwt_secret = process.env.JWT_SECRET_KEY;

//créer une compétence (admin)

exports.createSkill = function(req, res) {
    jwt.verify(req.headers["x-access-token"], jwt_secret, function(err, decoded){
        if (err){
            console.log (err)
            res.status(401).json('not an admin');
        }   
        else if(decoded.admin){
            Skill.create(req.body, function(err, newSkill){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(newSkill)
                });
        };
    });
};

//supprimer une compétence (admin)

exports.deleteSkill = function(req, res) {
    jwt.verify(req.headers["x-access-token"], jwt_secret, function(err, decoded){
        if (err){
            console.log (err)
            res.status(401).json('not an admin');
        }   
        else if(decoded.admin && req.body.id){
            Skill.deleteOne({_id: req.body.id}, function(err, skill) {
                if(err)
                    res.status(400).json(err)
                else
                    res.status(200).json(skill);
            });
        };
    });
};

// obtenir toutes les compétences

exports.getAllskills = function(req, res) {
    jwt.verify(req.headers["x-access-token"], jwt_secret, function (err, decoded){
        if (err){
            console.log (err)
            res.status(401).json('not allowed');
        }      
        else if(decoded.id){
            Skill.find({}, function(err, skills){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(skills)
            });
        };
    });
};

// obtenir une compétence avec son Id 

exports.getSkillById = function(req, res) {
    jwt.verify(req.headers["x-access-token"], jwt_secret, function(err, decoded){
        if (err) {
            console.log(err); 
            res.status(401).json('No token provided'); 
        }
        else {
            Skill.findOne({_id: req.body.id}, function(err, skill){
                if (err)
                    res.status(400).json(err);
                else
                    res.status(200).json(skill);
            });
        };
    });
}; 