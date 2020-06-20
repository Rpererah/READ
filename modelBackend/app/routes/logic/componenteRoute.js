// CONFIG TO EXPRESS AND ROUTER \\

const express = require('express')
const router = express.Router()

// CONFIG UTILS TO BANCO AND MODELS \\

const BancoUtils = require('../../config/bancoUtils')
const component = require('../../models/component')
const componentDAO = require('../../data/componentDAO');

// Rota para Listagem das componente por Clientes \\

router.get('/read/:id', (req, res) => {
    componentDAO.buscaComponentePorClient(req.params.id, (component) => {
        res.json(component);
    })
})

// EXPORTANDO ROTAS DE Componentes PARA O INDEXROUTE \\
module.exports = router