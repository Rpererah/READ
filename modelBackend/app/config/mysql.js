const mysql = require('mysql')
// Importando Config .Env \\
require('dotenv').config()

// Conectando com o Banco de Dados \\
const con = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'house'
})

// Exporting Connection \\
module.exports = con