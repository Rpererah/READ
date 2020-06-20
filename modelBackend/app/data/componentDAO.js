const con = require('../config/mysql')

class ComponenteDAO {
    static buscaComponentePorClient(id, cb) {
        const sql = `SELECT COMP_NOME,COMP_DESCRICAO
            FROM componente INNER JOIN casa
            ON componente.CASA_ID = casa.CASA_ID
            INNER JOIN usuarios ON casa.USER_ID = usuarios.id
            WHERE usuarios.id = ${id}
            ORDER BY usuarios.USER_NOME;`
        con.query(sql, [], (err, res) => {
            if (err) throw err
            else cb(res)
        })
    }

}

module.exports = ComponenteDAO