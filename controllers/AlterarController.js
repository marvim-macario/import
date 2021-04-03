const { proposta_comissao } = require('../models');

const AlterarController ={
    
    Update: async(req, res) =>{

        const{ responsavel } = req.query;
        const{element:{
            proposta,
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
            quaternario

        }}=req.body;
        const now= new Date;
        const data_alteracao = `${now.getDay()}/${now.getMonth()}/${now.getFullYear ()}`;

        // taxa = `${taxa}`
        // if(taxa[0] != '0' && taxa[1] != '.' && taxa[2] != ' 0 ')
        //     return res.json({'proposta':proposta, 'ok':false, 'message':'formato da cedula taxa incorreto ex:0.0123'});

        try {

            const consulta = await proposta_comissao.findOne({
                where: {
                    proposta:proposta
                }
            })

            if(!consulta)
                return res.json({'proposta':proposta,'inclusa':false, 'message':'proposta não encontrada no banco de dados'});
            
            if(consulta.status_pagamento === 'PAGO' && cosulta.valor_liberado > 0)
                return res.json({'proposta':proposta,'inclusa':false, 'message':'proposta com status "PAGO" não pode ser alterada'});
            
            if(consulta.status_pagamento === 'EM PROCESSO DE PAGTO' && consulta.valor_liberado > 0)
                return res.json({'proposta':proposta,'inclusa':false, 'message':'proposta com status "EM PROCESSO DE PAGTO" não pode ser alterada'});

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
            consulta.data_alteracao = data_alteracao;
            consulta.responsavel = responsavel;

            consulta.save();
            res.status(200).json({'inclusa':true});
        } catch (error) {

            console.log(error);
            res.send({'proposta':proposta,'inclusa':false,"message":"erro interno do servidor"})
        }
    }
}

module.exports = AlterarController;