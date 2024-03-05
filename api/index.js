const ErrorMiddleware = require('./src/middlewares/errorMiddleware');
const StatusCodes = require('http-status-codes');
const cookieParser = require( 'cookie-parser');
const express = require('express');
const authRoutes = require('./src/routes/auth.route');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
  extended: true,
}));

app.use(authRoutes);
app.use(ErrorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
