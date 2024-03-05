const StatusCodes = require('http-status-codes');
const cookieParser = require( 'cookie-parser');
const express = require('express');
const db = require('./src/config/config');
const User = require('./src/models/user.model');
const authRoutes = require('./src/routes/auth.route');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
  extended: true,
}));

app.post('/register', async (req, res) => {
  
  const { username, email, password } = req.body

  await db.sync();

  const createdUser = await User.create({ username, email, password })

  console.log(createdUser)
})

app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
