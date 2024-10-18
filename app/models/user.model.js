const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("user", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
        unique: true,
    },
});

module.exports = User;