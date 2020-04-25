// // Récuperation du model
const User = require('../models/user');
bcrypt = require ('bcrypt');
jwt = require('jsonwebtoken'),
jwt_secret = process.env.JWT_SECRET_KEY;
adm_login = process.env.ADM_LOGIN; 
adm_password = process.env.ADM_PASSWORD;  

// user register

exports.register = function(req,res) {
    var hash = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hash;
    req.body.admin = false; 
    User.create(req.body, function(err, newUser) {
        if(err)
            res.status(400).json(err);
        else
            res.status(200).json(newUser);
    });
};

// user login

exports.login = function(req, res) {
    User.findOne({email : req.body.email}, function(err, user) {
        if(err)
            res.status(400).json({auth: false, message: err});
        else if (!user)
            res.status(201).json({auth: false, message: "no user finded"});
        else {
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if(result)
                {
                    let token = jwt.sign({ id: user._id, admin: false }, jwt_secret);
                    res.status(200).json({auth: true, token: token})
                }
                else
                    res.status(201).json({auth: false, message: "password don't match"});
            });
        };
    });
};

// admin login

exports.admLogin = function(req, res) {
    if (req.body.name == adm_login && req.body.password == adm_password) {
        let token = jwt.sign({id: null, admin: true}, jwt_secret); 
        res.status(200).json({auth: true, token: token});
    }

    else {
        res.status (400).json ({auth: false, message: "Wrong name or password"});
    }
};