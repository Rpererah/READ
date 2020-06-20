const express = require('express');
const app = express();

// CARREGANDO E EXPORTANDO AS ROTAS DA APLICAÇÃO \\

const logicRoute = require('./logicRoute')
app.use('/', logicRoute)

module.exports = app