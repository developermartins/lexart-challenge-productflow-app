import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const db = new Sequelize(process.env.POSTGRES_DATABASE, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true
    }
  }
});

export default db;
