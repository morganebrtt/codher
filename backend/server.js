// Dépendances
const express = require('express');
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    app = express();
    require('dotenv').config();
    port = 3050;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialisation de la connexion à la base de données
mongoose.connect('mongodb://localhost/codher', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

// Récuperation des controllers
let AuthController = require('./controllers/authController');
let UserController = require('./controllers/userController');

// Déclaration des routes de notre application
app.route('/auth/register').post(AuthController.register);
app.route('/auth/login').post(AuthController.login);
app.route('/user/getall').get(UserController.getAllUsers);


app.listen(port);