const router = require('express').Router();
const product = require('../controllers/product.controller');
const verifyToken = require('../middlewares/tokenMiddleware');

router.get('/products', verifyToken, product.getAllProducts);

router.get('/product/:id', verifyToken, product.getProductById);

router.get('/products/:others', verifyToken, product.getProductByOthers);

router.post('/product/new', verifyToken, product.addProduct);

router.put('/product/update/:id', verifyToken, product.updateProduct);

router.delete('/product/delete/:id', verifyToken, product.deleteProduct);

module.exports = router;
