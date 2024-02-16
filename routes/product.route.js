const app = require('express');
const Product = require('../models/product.model.js');
const router = app.Router();
const { getProducts, getProductById, createProd, updateProd, deleteProd } = require('../controllers/product.controller.js');

router.get('/', getProducts);

router.get('/:id', getProductById);

router.post('/', createProd);

router.put('/:id', updateProd);

router.delete('/:id', deleteProd);

module.exports = router;