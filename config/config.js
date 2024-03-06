const { Sequelize } = require('sequelize');
const pg = require('pg');
require('dotenv').config();

const db = new Sequelize(process.env.POSTGRES_DATABASE, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

db.authenticate()
  .then(() => console.log('DB connected'))
  .catch(err => console.log('Error ' + err))

module.exports = db;
