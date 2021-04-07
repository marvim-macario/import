const { proposta_comissao } = require('../models');

const CodigoController = { 

    Update: async (req, res) =>{
        const{ responsavel } = req.query;
        const { element:{ proposta, id_calculo } } = req.body;
    
        const data_alteracao = moment().format('DD/MM/YYYY');

        try {

            const consulta = await proposta_comissao.findOne({
                where: {
                    proposta:proposta
                }
            })

            if(!consulta)
                return res.json({'proposta':proposta,'inclusa':false, 'message':'proposta não encontrada no banco de dados'});
            

            consulta.id_calculo = id_calculo;
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
module.exports = CodigoController;