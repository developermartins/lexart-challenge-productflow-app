const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'dev', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
