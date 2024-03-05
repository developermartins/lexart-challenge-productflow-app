const rescue = require('express-rescue');
const StatusCodes = require('http-status-codes');
const Auth = require('../services/auth.services');

const registerUser = rescue(async (req, res, next) => {
  const { username, email, password } = req.body;

  const registeredUser = await Auth.registerUser(username, email, password);

  if (registeredUser.message) return next(registeredUser);

  res.status(StatusCodes.CREATED).send(registeredUser);
});

const loginUser = rescue(async (req, res, next) => {
  const { username, password } = req.body;

  const userLogged = await Auth.loginUser(username, password);

  if (userLogged.message) return next(userLogged);

  res.status(StatusCodes.CREATED).json(userLogged);
});

module.exports = {
  registerUser,
  loginUser,
};
