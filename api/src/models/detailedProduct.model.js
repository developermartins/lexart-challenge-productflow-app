const { Sequelize, DataTypes } = require("sequelize");
const db = require('../config/config.js');

const DetailedProduct = db.define('DetailedProduct', {
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
  details: {
    type: DataTypes.JSONB,
    allowNull: false,

    get() {
      return JSON.parse(this.getDataValue("details"));
    },

    set(value) {
      return this.setDataValue("details", JSON.stringify(value));
    },
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
}, {

});

module.exports = DetailedProduct;
