const express = require('express');
const router = express.Router();

const app = express();
const ComissaoController =require('../controllers/ComissaoController');
const IncluirPropostaController =require('../controllers/IncluirPropostaController');
const AlterarController =require('../controllers/AlterarController');
const CodigoController = require('../controllers/CodigoController');

// const{ logger } = require('../middlewares/taxa')
const ConfirmTaxa = require('../middlewares/taxa');
const ConfirmTaxa2 = require('../middlewares/taxa2');

app.use(ConfirmTaxa);
app.use(ConfirmTaxa);

router.get('/teste',(req,res) => {
    res.send({'sucesso':'ok'})
})

router.post('/tabelas',ConfirmTaxa,ConfirmTaxa2, ComissaoController.create);
router.post('/inclusao',ConfirmTaxa,IncluirPropostaController.Create);
router.post('/alterar',AlterarController.Update);
router.post('/codigo',CodigoController.Update);

module.exports = router;


