
   const ConfirmTaxa = (req, res, next)=>{
        const taxa = req.body.element.taxa;
        const proposta = req.body.element.proposta;
       
        
        
        if(typeof taxa === 'number')
            return res.json({'proposta':proposta, 'inclusa':false, 'message':'formato da cedula taxa incorreto ex:0.0123'});
        next();
}
    module.exports = ConfirmTaxa;