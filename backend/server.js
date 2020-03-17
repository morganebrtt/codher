// Dépendances
const express = require('express');
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Initialisation de la connexion à la base de données
mongoose.connect('mongodb://localhost/codher', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

// // Récuperation des models
// let User = require('./models/user');

// Récuperation des controllers
let AuthController = require('./controllers/auth');

// Déclaration des routes de notre application
app.route('/register').post(AuthController.register);
