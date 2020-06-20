const express = require('express');
const app = express();

// CARREGANDO E EXPORTANDO AS ROTAS DE LOGICA DA APLICAÇÃO \\

const userRoute = require('./logic/userRoute')
app.use('/user', userRoute)

const componenteRoute = require('./logic/componenteRoute')
app.use('/componente', componenteRoute)

module.exports = app