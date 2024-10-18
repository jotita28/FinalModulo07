const Bootcamp = require("../models/bootcamp.model");
const User = require("../models/user.model");

const createBootcamp = async (bootcamp) => {
    const createdBootcamp = await Bootcamp.create(bootcamp);
    return createdBootcamp;
};

const addUser = async (IdUser, idBootcamp) => {
    const foundBootcamp = await Bootcamp.findByPk(idBootcamp);
    const foundUser = await User.findByPk(IdUser);
    foundBootcamp.addUser(foundUser);
    return {foundBootcamp, foundUser};
};

const findById = async (id) => {
    const foundBootcamp = await Bootcamp.findByPk(id, {
        include: ["users"]
    });
    return foundBootcamp;
};

const findAll = async () => {
    const AllBootcamp = await Bootcamp.findAll({
        include: ["users"]
    });
    return AllBootcamp;
};

module.exports = {
    createBootcamp,
    addUser,
    findById,
    findAll,
}