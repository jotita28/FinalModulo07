const userController = require("../controllers/user.controller");
const bootcampController = require("../controllers/bootcamp.controller");

const createQuery = async () => {
    const query1 = await bootcampController.findById(1);
        console.log("************Consulta 1***************");
        console.log(JSON.stringify(query1, null, 4));

        const query2 = await bootcampController.findAll();
        console.log("************Consulta 2***************");
        console.log(JSON.stringify(query2, null, 4));

        const query3 = await userController.findUserById(1);
        console.log("************Consulta 3***************");
        console.log(JSON.stringify(query3, null, 4));

        const query4 = await userController.findAll();
        console.log("************Consulta 4***************");
        console.log(JSON.stringify(query4, null, 4));

        const query5 = await userController.updateUserById(1, {firstName: "Pedro", lastName: "Sanchez"});
        console.log("************Consulta 5***************");
        console.log(JSON.stringify(query5, null, 4));

        console.log("************Consulta 6***************");
        console.log(await userController.deleteUserById(1));
};

module.exports = createQuery;