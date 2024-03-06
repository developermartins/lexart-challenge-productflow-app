const { Sequelize, DataTypes } = require("sequelize");
const db = require('../config/config.js');

const Product = db.define('Product', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING,
  },
  model: {
    type: DataTypes.STRING,
  },
  details: {
    type: DataTypes.JSONB,

    get() {
      return JSON.parse(this.getDataValue("details"));
    },

    set(value) {
      return this.setDataValue("details", JSON.stringify(value));
    },
  },
  data: {
    type: DataTypes.JSONB,

    get() {
      return JSON.parse(this.getDataValue("data"));
    },

    set(value) {
      return this.setDataValue("data", JSON.stringify(value));
    },
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
  },
}, {

});

module.exports = Product;
