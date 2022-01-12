const { proposta_comissao } = require('../models');
const moment = require('moment');
const IncluirPropostaController = {
    
    Create: async (req,res) =>{
        const{ responsavel } = req.query;
        
        var {element:{
            proposta,parceiro,
            cnpj,supervisor,
            valor_liberado,
            tipo,convenio,
            comissao_inss,
            comissao_port,
            comissao_novo,status,
            calculo,status_pagamento,
            data_pagamento,
            movimentacao,
            data_liberacao,
            status_calculo,
            contrato,conversor,
            data_inclusao,
            receita_liquida,cpf_sup,cpf_ger,
            gerente,cpf_quat,
            quaternario,valor_sup,
            valor_ger,valor_quat,
            pct_sup,pct_ger,pct_quat,
            cpf,nome,data_proposta,
            parceiro_esteira,produto,
            regra,tipo_func,siglae_corrigida,
            valor_solicitado,valor_refin,
            data_cadastro,data_base,mês,data_sup,
            data_ger,
            data_quat,
            projeto,
            Correntista,
            Prazo,taxa,
            banco, 
            classificacao, 
            id_calculo, 
            pontuacao, 
            valor_pontuacao, 
            semana, 
            pct_tabela, 
            saldo_devedor, 
            parcela_total, 
            parcela_vencida, 
            parcela_vencer, 
            portabilidade, 
            data_vigencia, 
            competencia,        
        }} =req.body;

   
        const data_alteracao = moment().format('DD/MM/YYYY');


        try {

            const consulta = await proposta_comissao.findOne({
                where: {
                    proposta:proposta
                }
            })
            if(consulta)
                return res.json({'proposta':proposta,'inclusa':false, 'message':'proposta já existe no banco de dados'});


            const inclusao =  await proposta_comissao.create({
                proposta:proposta,
                parceiro:parceiro,
                cnpj:cnpj,
                supervisor:supervisor, 
                valor_liberado:valor_liberado,
                tipo:tipo, 
                convenio:convenio,
                comissao_inss:comissao_inss, 
                comissao_port:comissao_port, 
                comissao_novo:comissao_novo, 
                status:status, 
                calculo:calculo, 
                status_pagamento:status_pagamento, 
                data_pagamento:data_pagamento, 
                movimentacao:movimentacao, 
                data_liberacao:data_liberacao, 
                status_calculo:status_calculo, 
                contrato:contrato,
                conversor:conversor, 
                data_inclusao:data_inclusao, 
                receita_liquida:receita_liquida, 
                cpf_sup:cpf_sup, 
                cpf_ger:cpf_ger, 
                gerente:gerente, 
                cpf_quat:cpf_quat, 
                quaternario:quaternario, 
                valor_sup:valor_sup, 
                valor_ger:valor_ger, 
                valor_quat:valor_quat, 
                pct_sup:pct_sup, 
                pct_ger:pct_ger, 
                pct_quat:pct_quat, 
                cpf:cpf, 
                nome:nome, 
                data_proposta:data_proposta, 
                parceiro_esteira: parceiro_esteira,
                produto:produto, 
                regra:regra, 
                tipo_func:tipo_func, 
                siglae_corrigida:siglae_corrigida, 
                valor_solicitado:valor_solicitado, 
                valor_refin:valor_refin, 
                data_cadastro:data_cadastro, 
                data_base:data_base, 
                mes:mês, 
                data_sup:data_sup, 
                data_ger:data_ger, 
                data_quat:data_quat, 
                projeto:projeto, 
                correntista:Correntista, 
                prazo_contrato:Prazo,
                taxa:taxa, 
                banco:banco, 
                classificacao:classificacao, 
                id_calculo: id_calculo,
                pontuacao: pontuacao,
                valor_pontuacao: valor_pontuacao,
                semana:semana,
                pct_tabela:pct_tabela,
                saldo_devedor:saldo_devedor,
                parcela_total:parcela_total,
                parcela_vencida:parcela_vencida,
                parcela_vencer:parcela_vencer,
                portabilidade:portabilidade,
                data_vigencia:data_vigencia,
                competencia:competencia, 
                data_alteracao:data_alteracao,
                responsavel:responsavel,
                
            })
                res.status(200).json({'inclusa':true});

        } catch (error) {
            console.log(error);
            res.send({"inclusa":false,"message":"erro interno do servidor"})
        }
    }
}

module.exports = IncluirPropostaController;