const { Op } = require('sequelize');
const Product = require('../models/product.model');

const getAllProducts = async () => {
  const products = (await Product.findAll()).reverse();

  return products;
};

const getProductByOthers = async (others) => {
  const product = await Product.findAll({ 
      where: {
        [Op.or]: {
          name: others,
          brand: others,
          model: others,
        },
      }
  });

  return product;
};

const getProductById = async (id) => {
  const product = await Product.findOne({ where: { id } });

  return product;
};

const addNewProduct = async (name, brand, model, price, color) => {

  await Product.sync();

  const newProduct = await Product.create({ name, brand, model, price, color });

  return newProduct;
};

const updateProduct = async (id, name, brand, model, price, color) => {

  const updatedProduct = await Product.update({ name, brand, model, price, color }, {
    where: {
      id
    },
    returning: true,
    plain: true
  });

  return updatedProduct;
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductByOthers,
  addNewProduct,
  updateProduct,
};
