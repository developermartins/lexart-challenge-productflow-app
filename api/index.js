import StatusCodes from 'http-status-codes';
import cookieParser from 'cookie-parser';
import express from 'express';
import db from './config/connection.js';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
  extended: true,
}));

db.authenticate()
  .then(() => console.log('DB Connected...'))
  .catch((err) => console.log('Error: ' +  err))

app.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('👌');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
