// Récuperation du model
const Interest = require('../models/interest');
bcrypt = require ('bcrypt');
jwt = require('jsonwebtoken'),
jwt_secret = process.env.JWT_SECRET_KEY;

