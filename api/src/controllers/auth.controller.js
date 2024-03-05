const rescue = require('express-rescue');
const StatusCodes = require('http-status-codes');
const Auth = require('../services/auth.services');

const registerUser = rescue(async (req, res, next) => {
  const { username, email, password } = req.body;

  const registeredUser = await Auth.registerUser(username, email, password);

  if (registeredUser.message) return next(registeredUser);

  res.status(StatusCodes.CREATED).send(registeredUser);
});

module.exports = {
  registerUser,
};
