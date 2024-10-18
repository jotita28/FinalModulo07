const { Sequelize } = require("sequelize");
const configDB = require("../config/db.config");
const sequelize = new Sequelize(configDB);


module.exports = sequelize;
