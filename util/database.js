const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'SDFwer741!', {
  dialect: 'mysql',
  host: 'localhost',
  port:3308
});
module.exports = sequelize;
