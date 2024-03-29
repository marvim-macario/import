const { proposta_fisico } =require("../models");
const Sequelize = require('sequelize');
const moment = require('moment');

const ComissaoController ={
    create: async (req, res) =>{

        var { element:{
            proposta,cpf,nome,data_cadastro,data_base,
            valor_solicitado,valor_refin,valor_liberado,prazo_contrato,
            mês,portabilidade,contrato,convenio,atividade,produto,tipo,
            regra,nome_promotor,cpf_promotor,siglae_corrigida,siglae,
            empresa,correntista,taxa,pontos_campanha,banco,taxa2
        } } = req.body;

        
        try {

            const consulta = await proposta_fisico.findOne({
                where: {
                    proposta:proposta
                }
            })

            if(consulta)
                return res.json({'proposta':proposta,'inclusa':false, 'message':'proposta já existe no banco de dados'});

            
            const inclusao =  await proposta_fisico.create({

                proposta:proposta,
                cpf:cpf,
                nome:nome,
                data_cadastro:data_cadastro,
                data_base:data_base,
                valor_solicitado:valor_solicitado,
                valor_refin:valor_refin,
                valor_liberado:valor_liberado,
                prazo_contrato:prazo_contrato,
                mês:mês,
                portabilidade:portabilidade,
                contrato:contrato,
                convenio:convenio,
                atividade:atividade,
                produto:produto,
                tipo:tipo,
                regra:regra,
                nome_promotor:nome_promotor,
                cpf_promotor:cpf_promotor,
                siglae_corrigida:siglae_corrigida,
                siglae:siglae,
                empresa:empresa,
                correntista:correntista,
                taxa:taxa,
                pontos_campanha:pontos_campanha,
                banco:banco,
                taxa2:taxa2,
                // responsavel:responsavel,
                // data_alteracao:data_alteracao

            });

            res.status(200).json({'inclusa':true});

            

        } catch (error) {
            console.log(error);
            res.send({'proposta':proposta,'inclusa':false,"message":"erro interno do servidor"})
        }
    }
}
module.exports = ComissaoController;