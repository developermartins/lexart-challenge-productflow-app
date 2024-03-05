const User = require('../models/user.model');
const db = require('../config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const invalidEmail = {
  err: {
    status: 400,
    message: '"email" must be a valid email',
  },
};

const requiredEmail = {
  err: {
    status: 400,
    message: '"email" is required',
  },
};

const invalidPassword = {
  err: {
    status: 400,
    message: 'The password must be at least 8 characters long',
  },
};

const passwordDontMatch = {
  err: {
    status: 400,
    message: 'Invalid user password',
  },
};

const passwordIsRequired = {
  err: {
    status: 400,
    message: '"password" is required',
  },
};

const uniqueUser = {
  err: {
    status: 409,
    message: 'User already registered',
  },
};

const userDoesNotExist = {
  err: {
    status: 404,
    message: 'User does not exist',
  },
};

const tokenError = {
  invalidErr: {
    status: 400,
    message: 'Invalid token.',
  },

  expiredErr: {
    status: 400,
    message: 'Token expired, generate a new one.',
  },
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (email) => {
  if (!email) return requiredEmail;

  if (emailRegex.test(email) === false) return invalidEmail;
};

const validatePassword = (password) => {
  if (!password) return passwordIsRequired;

  if (password.length < 8) return invalidPassword;
};

const registerUser = async (username, email, registerPassword) => {
  const userEmail = validateEmail(email);
  const userPassword = validatePassword(registerPassword);

  await db.sync();

  if (userEmail) return userEmail.err;
  if (userPassword) return userPassword.err;
  if (await User.findOne({ where: { email: email } })) return uniqueUser.err;

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(registerPassword, salt);

  const createdUser = await User.create({ username, email, password: hashedPass })

  const token = jwt.sign({ id: createdUser.id }, process.env.JWT);

  const { password, ...others } = createdUser.dataValues;

  if (createdUser) return { others, token };
};

const loginUser = async (username, loginPassword) => {
  const userPassword = validatePassword(loginPassword);

  if (userPassword) return userPassword.err;

  const user = await User.findOne({ where: { username: username } })

  if (!user) return userDoesNotExist.err;

  const compareSavedPassword = await bcrypt.compare(loginPassword, user.password);

  if (!compareSavedPassword) return passwordDontMatch.err;

  const token = jwt.sign({ id: user.id }, process.env.JWT);

  const { password, ...others } = user.dataValues;

  if (user) return { others, token };
};

module.exports = {
  registerUser,
  loginUser,
};
