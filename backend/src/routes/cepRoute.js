const express = require('express');
const router = express.Router();

// Controller
const cepController = require('../controllers/cepController')

// rotas
router.get('/:cep', cepController.getCep);

module.exports = router;