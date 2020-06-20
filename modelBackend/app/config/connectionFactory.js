const Sequelize = require('sequelize'); //Importando biblioteca sequelize
require('dotenv').config();

const database = new Sequelize(
    process.env.DB_DATABASE || 'house',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || '', {
        //configuranco conexão com banco
        port: process.env.DB_PORT || '3306',
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_CONNECTION || 'mysql'
    }
);

module.exports = {
    Sequelize: Sequelize,
    database: database
}; //exportando