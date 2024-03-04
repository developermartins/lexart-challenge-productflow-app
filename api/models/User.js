import { Sequelize } from "sequelize";
import db from '../config/connection.js';

const User = db.define('user', {
  username: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
});

export default User;
