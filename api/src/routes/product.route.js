const router = require('express').Router();
const product = require('../controllers/product.controller');

router.get('/products', product.getAllProducts);

router.get('/product/:id', product.getProductById);

router.get('/products/others', product.getProductByOthers);

router.post('/product/new', product.addProduct);

router.put('/products', product.getProducts);

// router.delete('/products', product.getProducts);

module.exports = router;
