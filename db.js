const path = require('path');
const { Sequelize } = require('sequelize');

// TODO - connect to db via sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: false
  });
module.exports = {
    sequelize
};
