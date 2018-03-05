const Sequelize = require('sequelize');

const sequelize = new Sequelize('vuetest', 'root', 'aziz', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

exports.sequelize = sequelize;
exports.Sequelize = Sequelize;