// // Récuperation des models
const User = require('../models/user');

bcrypt = require ('bcrypt');

exports.register = function(req,res) {
    var hash = bcrypt.hashSync(req.body.password, 10);
    User.create({email: req.body.email, password: hash }, function(err, data) {
        if(err)
            res.send(err)
        else
            res.send(data);
    });
};

