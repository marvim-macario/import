const { proposta_comissao } = require('../models');
const moment = require('moment');

const AlterarController ={
    
    Update: async(req, res) =>{

        const{ responsavel } = req.query;
   
        const{element:{
            id_proposta,
            status_pagamento,
            calculo,
            movimentacao,
            data_pagamento,
            valor_sup,
            data_sup,
            valor_ger,
            data_ger,
            cnpj,
            parceiro,
            supervisor,
            gerente,
            quaternario,
            data_quat

        }}=req.body;
       
        const data_alteracao = moment().format('DD/MM/YYYY');

    
        try {

            const consulta = await proposta_comissao.findOne({
                where: {
                    id_proposta:id_proposta
                }
            })

            if(!consulta)
                return res.json({'id_proposta':id_proposta,'inclusa':false, 'message':'proposta não encontrada no banco de dados'});
            
            if(consulta.status_pagamento === 'PAGO' )
                return res.json({'id_proposta':id_proposta,'inclusa':false, 'message':'proposta com status "PAGO" não pode ser alterada'});
            
            if(consulta.status_pagamento === 'EM PROCESSO DE PAGTO' )
                return res.json({'id_proposta':id_proposta,'inclusa':false, 'message':'proposta com status "EM PROCESSO DE PAGTO" não pode ser alterada'});

            if(status_pagamento)consulta.status_pagamento = status_pagamento;
            if(calculo)consulta.calculo = calculo;
            if(movimentacao)consulta.movimentacao = movimentacao;
            if(data_pagamento)consulta.data_pagamento = data_pagamento;
            if(valor_sup)consulta.valor_sup = valor_sup;
            if(data_sup)consulta.data_sup = data_sup;
            if(valor_ger)consulta.valor_ger = valor_ger;
            if(data_ger)consulta.data_ger = data_ger;
            if(cnpj)consulta.cnpj = cnpj;
            if(parceiro)consulta.parceiro = parceiro;
            if(supervisor)consulta.supervisor = supervisor;
            if(gerente)consulta.gerente = gerente;
            if(quaternario)consulta.quaternario = quaternario;
            if(data_quat)consulta.data_quat = data_quat;
            consulta.data_alteracao = data_alteracao;
            consulta.responsavel = responsavel;

            consulta.save();
            res.status(200).json({'inclusa':true});
        } catch (error) {

            console.log(error);
            res.send({'id_proposta':id_proposta,'inclusa':false,"message":"erro interno do servidor"})
        }
    }
}

module.exports = AlterarController;