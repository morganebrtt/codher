// Dépendances
const express = require('express');
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    app = express();

// Initialisation de la connexion à la base de données
mongoose.connect('mongodb://localhost/codher', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));