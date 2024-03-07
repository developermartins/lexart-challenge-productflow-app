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
    allowNull: true,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  details: {
    type: DataTypes.JSONB,
    allowNull: true,

    get() {

      if(this.getDataValue("details") !== undefined) {
        return JSON.parse(this.getDataValue("details"));
      }

    },

    set(value) {
      
      if(value !== undefined) {
        return this.setDataValue("details", JSON.stringify(value));
      }

    },
  },
  data: {
    type: DataTypes.JSONB,
    allowNull: true,

    get() {

      if(this.getDataValue("data") !== undefined) {
        return JSON.parse(this.getDataValue("data"));
      }

    },

    set(value) {
      
      if(value !== undefined) {
        return this.setDataValue("data", JSON.stringify(value));
      }

    },
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {

});

module.exports = Product;
