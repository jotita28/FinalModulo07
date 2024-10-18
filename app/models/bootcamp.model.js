const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./user.model");

const Bootcamp = sequelize.define("bootcamp", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cue: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 5,
            max: 10,
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Bootcamp.belongsToMany(User, {
    through: "user_bootcamp",
});

User.belongsToMany(Bootcamp, {
    through: "user_bootcamp",
});

module.exports = Bootcamp;