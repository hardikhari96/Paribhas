require('dotenv').config();
const { Sequelize,DataTypes ,Model} = require("sequelize");
module.exports.Model = Model;
module.exports.DataTypes = DataTypes;

/* module.exports.sequelize  = new Sequelize(process.env.DB_NAME, process.env.DB_USER_NAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DISELECT,
    pool: {
      max: 1,
      min: 0,
      idle: 10000
    },
    //logging: true
});
 */
// sqlite

module.exports.sequelize  = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

// console.log(process.env);