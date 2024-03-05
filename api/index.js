import StatusCodes from 'http-status-codes';
import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('👌');
});

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  console.log(username, email, password)

})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
