const StatusCodes = require('http-status-codes');
const cookieParser = require( 'cookie-parser');
const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
  extended: true,
}));


//   const User = sequelize.define('User', {
//     // Model attributes are defined here
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING
//       // allowNull defaults to true
//     },
//     password: {
//       type: DataTypes.STRING
//       // allowNull defaults to true
//     }
//   }, {
//     // Other model options go here
//   });
  


app.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('👌');
});


// app.post('/register', async (req, res) => {
  
//   const { username, email, password } = req.body

//   await sequelize.sync();

//   const createdUser = await User.create({ username, email, password })

//   console.log(createdUser)

// })


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
