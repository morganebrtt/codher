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
let DiscussionController = require('./controllers/discussionController');

// Déclaration des routes de notre application
app.route('/auth/register').post(AuthController.register);
app.route('/auth/login').post(AuthController.login);
app.route('/auth/admlogin').post(AuthController.admLogin);

app.route('/user/getall').get(UserController.getAllUsers);
app.route('/user/getbyid').get(UserController.getUserById);
app.route('/user/updateone').put(UserController.updateUser);
app.route('/user/deleteone').delete(UserController.deleteUser);

app.route('/skill/create').post(SkillController.createSkill);
app.route('/skill/delete').delete(SkillController.deleteSkill);
app.route('/skill/getall').get(SkillController.getAllskills);
app.route('/skill/getbyid').get(SkillController.getSkillById);

app.route('/interest/create').post(InterestController.createInterest);
app.route('/interest/delete').delete(InterestController.deleteInterest);
app.route('/interest/getall').get(InterestController.getAllInterests);
app.route('/interest/getbyid').get(InterestController.getInterestById);

app.route('/discussion/create').post(DiscussionController.createDiscussion);
app.route('/discussion/getall').get(DiscussionController.getAllDiscussions);
app.route('/discussion/getbyId').get(DiscussionController.getDiscussionById);

app.listen(port);