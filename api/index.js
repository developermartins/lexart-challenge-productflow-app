import StatusCodes from 'http-status-codes';
import cookieParser from 'cookie-parser';
import express from 'express';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

const app = express();
const PORT = 8000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
  extended: true,
}));

const db = new Sequelize(process.env.POSTGRES_DATABASE, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true
    }
  }
});

db.authenticate()
  .then(() => console.log('DB Connected...'))
  .catch((err) => console.log('Error: ' +  err))

app.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('👌');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
