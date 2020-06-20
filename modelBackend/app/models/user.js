const db = require('../config/connectionFactory') // Importando as configs de conexão \\

//Criando Model (Tabela no banco de dados) \\
const User = db.database.define('usuario', {
    USER_NOME: {
        type: db.Sequelize.STRING,
        unique: false,
        allowNull: false
    },
    USER_TIPO: {
        type: db.Sequelize.BOOLEAN,
        unique: false,
        allowNull: false
    },
    USER_DEFICIENCIA: {
        type: db.Sequelize.STRING,
        unique: false,
        allowNull: true
    },
    USER_IDADE: {
        type: db.Sequelize.STRING,
        unique: false,
        allowNull: true
    },
    RUA: {
        type: db.Sequelize.STRING,
        unique: false,
        allowNull: true
    },
    BAIRRO: {
        type: db.Sequelize.STRING,
        unique: false,
        allowNull: true
    },
    CIDADE: {
        type: db.Sequelize.STRING,
        unique: false,
        allowNull: true
    },
    UF: {
        type: db.Sequelize.CHAR,
        unique: false,
        allowNull: true
    },


})

// FORÇANDO A CRIAÇÃO DA TABELA ( DATABASE ) \\
//  User.sync({
//     force: true
//  })

module.exports = User //exportando o Model \\