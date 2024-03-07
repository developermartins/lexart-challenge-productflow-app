const { Op, } = require('sequelize');
const Product = require('../models/product.model');

const removeNull = (object) => {
  for (var key in object) {
      if (object[key] === null) {
          delete object[key];
      };
  };
  return object;
};

function isJson(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
};

const convertJson = (object) => {
  for (var key in object) {
    if (isJson(object[key])) {
        JSON.parse(object[key]);
    };
  };
    return object;
};


const getAllProducts = async () => {
  const products = (await Product.findAll()).reverse();

  const productList = products.map((product) => removeNull(product.dataValues));

  const formatedData = productList.map((product) => convertJson(product));

  return formatedData;
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
  const productFound = await Product.findOne({ where: { id } });

  const product = removeNull(productFound.dataValues);

  return product;
};

const addNewProduct = async (name, details, data, brand, model, price, color) => {

  await Product.sync();

  const newProduct = await Product.create({ name, details, data, brand, model, price, color });

  const product = removeNull(newProduct.dataValues);

  return product;
};

const updateProduct = async (id, name, details, data, brand, model, price, color) => {

  const updatedProduct = await Product.update({ name, details, data, brand, model, price, color }, {
    where: {
      id
    },
    returning: true,
    plain: true
  });

  return updatedProduct;
};

const deleteProduct = async (id) => {

  await Product.destroy({ where: { id } });

  return;
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductByOthers,
  addNewProduct,
  updateProduct,
  deleteProduct,
};
