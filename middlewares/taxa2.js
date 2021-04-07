

const ConfirmTaxa2 = (req,res, next)=>{

    const taxa2 = req.body.element.taxa2;
    const proposta = req.body.element.proposta;
    if(typeof taxa2 === 'number')
    return res.json({'proposta':proposta,'inclusa':false, 'message':'formato da cedula taxa incorreto ex:0.0123'});
    next();
}

module.exports = ConfirmTaxa2;