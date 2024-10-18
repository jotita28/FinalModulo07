const User = require("../models/user.model");

const createUser = async (user) => {
    const createdUser = await User.create(user);
    return createdUser;
};

const findUserById = async (id) => {
    const foundUser = await User.findByPk(id, {
        include: ["bootcamps"]
    });
    return foundUser;
};

const findAll = async () => {
    const allUsers = await User.findAll({
        include: ["bootcamps"]
    });
    return allUsers;
};

const updateUserById = async (id, newInfo) => {
    
    const user = await User.findByPk(id);
    await User.update(newInfo, {
        where: {
            id
        },
    });

    const foundUser = await User.findByPk(parseInt(id));
    return {
        NewData: foundUser.dataValues,
        PrevData: user.dataValues,
    }
};

const deleteUserById = async (id) => {

    const foundUser = await User.findByPk(parseInt(id));
    await User.destroy({
        where: {
            id
        }
    });

    return {
        UserDeleted: foundUser.dataValues
    }
};

module.exports = {
    createUser,
    findUserById,
    findAll,
    updateUserById,
    deleteUserById,
}

