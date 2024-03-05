const { Sequelize, DataTypes } = require("sequelize");
const db = require('../config/config.js');

const Product = db.define('Product', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {

});

module.exports = Product;
