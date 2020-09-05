const crypto = require('crypto');
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//===== ROTA DE LOGIN =====//
routes.post('/sessions',SessionController.create)

//===== ROTA DE PERFIL =====//
routes.get('/profile',ProfileController.index);

//===== ROTAS DAS ONGS =====//
routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

//===== ROTAS DOS CASOS =====//
routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;