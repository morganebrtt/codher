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
let SkillController = require('./controllers/skillController');
let InterestController = require('./controllers/interestController');

// Déclaration des routes de notre application
app.route('/auth/register').post(AuthController.register);
app.route('/auth/login').post(AuthController.login);
app.route('/auth/admlogin').post(AuthController.admLogin);

app.route('/user/getall').get(UserController.getAllUsers);
app.route('/user/getById').get(UserController.getUserById);
app.route('/user/updateone').put(UserController.updateUser);
app.route('/user/deleteone').delete(UserController.deleteUser);

app.route('/skill/create').post(SkillController.createSkill);
app.route('/skill/delete').delete(SkillController.deleteSkill);

app.route('/interest/create').post(InterestController.createInterest);

app.listen(port);