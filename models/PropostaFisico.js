module.exports = (sequelize, DataTypes) => {
    const PropostaFisico = sequelize.define('proposta_fisico', {
        id_proposta: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

            proposta:DataTypes.STRING, 
            cpf:DataTypes.STRING, 
            nome:DataTypes.STRING, 
            data_cadastro:DataTypes.STRING, 
            data_base:DataTypes.STRING, 
            valor_solicitado:DataTypes.STRING, 
            valor_refin:DataTypes.STRING, 
            valor_liberado:DataTypes.STRING, 
            prazo_contrato:DataTypes.STRING, 
            mes:DataTypes.STRING, 
            contrato:DataTypes.STRING, 
            portabilidade:DataTypes.STRING, 
            convenio:DataTypes.STRING, 
            atividade:DataTypes.STRING, 
            produto:DataTypes.STRING, 
            tipo:DataTypes.STRING, 
            regra:DataTypes.STRING, 
            cpf_promotor:DataTypes.STRING, 
            siglae:DataTypes.STRING, 
            siglae_corrigida:DataTypes.STRING, 
            status:DataTypes.STRING, 
            parceiro:DataTypes.STRING, 
            cnpj:DataTypes.STRING, 
            empresa:DataTypes.STRING, 
            nome_promotor:DataTypes.STRING, 
            parceiro_esteira:DataTypes.STRING, 
            correntista:DataTypes.STRING, 
            taxa:DataTypes.STRING, 
            banco:DataTypes.STRING, 
            classificacao:DataTypes.STRING, 
            data_vigencia:DataTypes.STRING, 
            taxa2:DataTypes.STRING,
    }, {
        tableName: 'proposta_fisico',
        timestamps: false
    })
    return PropostaFisico;
};