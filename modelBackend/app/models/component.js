class Componente {
    static get tabela() {
        return 'componentes'
    }
    constructor(objcomponente) {
        this.COMP_ID = ''
        this.COMP_DESCRICAO = ''
        this.COMP_VALOR  = ''
        this.COMP_DATA_INST = ''
        this.COMP_NOME = ''
        this.COMP_DATA_GARANTIA= ''
        this.CASA_ID  = ''
        Object.assign(this, objcomponente)
    }

}

module.exports = Componente