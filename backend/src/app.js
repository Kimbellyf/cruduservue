'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Carrega as rotas
const indexRoute = require('./routes/index-route');
const userRoute = require('/routes/user-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/', indexRoute);
app.use('/users', userRoute);


module.exports = app;
//200 - 201- create        400 - erro,bad request  401 - n autenticado 403 - acesso negado 500 - erro na aplicacao