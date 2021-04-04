const express = require('express');
const router = express.Router();

const ComissaoController =require('../controllers/ComissaoController');
const IncluirPropostaController =require('../controllers/IncluirPropostaController');
const AlterarController =require('../controllers/AlterarController');
const CodigoController = require('../controllers/CodigoController');


router.get('/teste',(req,res) => {res.send({'sucesso':'ok'})})
router.post('/tabelas', ComissaoController.create);
router.post('/inclusao',IncluirPropostaController.Create);
router.post('/alterar',AlterarController.Update);
router.post('/codigo',CodigoController.Update);

module.exports = router;


