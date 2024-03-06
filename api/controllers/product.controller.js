const rescue = require('express-rescue');
const StatusCodes = require('http-status-codes');
const product = require('../services/product.service');

const getAllProducts = rescue(async (_req, res, _next) => {
  const products = await product.getAllProducts();

  return res.status(StatusCodes.OK).json(products);
});

const getProductById = rescue(async (req, res, _next) => {
  const { id } = req.params;

  const requestedProduct = await product.getProductById(id);

  return res.status(StatusCodes.OK).json(requestedProduct);
});

const getProductByOthers = rescue(async (req, res, _next) => {
  const { others } = req.body;

  const requestedProduct = await product.getProductByOthers(others);

  return res.status(StatusCodes.OK).json(requestedProduct);
});

const addProduct = rescue(async (req, res, _next) => {

  const { name, details, data, brand, model, price, color } = req.body;

  const newProduct = await product.addNewProduct(name, details, data, brand, model, price, color);

  return res.status(StatusCodes.OK).json(newProduct);
});

const updateProduct = rescue(async (req, res, _next) => {

  const { id } = req.params;
  const { name, brand, model, price, color } = req.body;

  const newProduct = await product.updateProduct(id, name, brand, model, price, color);

  return res.status(StatusCodes.OK).json(newProduct);
});

const deleteProduct = rescue(async (req, res, _next) => {
  const { id } = req.params;

  await product.deleteProduct(id);

  return res.status(StatusCodes.OK).json('Product has been deleted...');
});

module.exports = {
  getAllProducts,
  getProductById,
  getProductByOthers,
  addProduct,
  updateProduct,
  deleteProduct,
};
