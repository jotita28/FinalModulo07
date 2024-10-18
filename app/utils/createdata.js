const userController = require("../controllers/user.controller");
const bootcampController = require("../controllers/bootcamp.controller");

const createData = async () => {
    const user1 = await userController.createUser({
        firstName: "Mateo",
        lastName: "Diaz",
        email: "mateo.diaz@correo.com",
    });
    
    console.log("Se ha creado al usuario:", JSON.stringify(user1, null, 4));
    
    const user2 = await userController.createUser({
        firstName: "Santiago",
        lastName: "Mejias",
        email: "santiago.mejias@correo.com",
    });
    
    console.log("Se ha creado al usuario:", JSON.stringify(user2, null, 4));
    
    const user3 = await userController.createUser({
        firstName: "Lucas",
        lastName: "Rojas",
        email: "lucas.rojas@correo.com",
    });
    
    console.log("Se ha creado al usuario:", JSON.stringify(user3, null, 4));
    
    const user4 = await userController.createUser({
        firstName: "Facundo",
        lastName: "Fernandez",
        email: "facundo.fernandez@correo.com",
    });
    
    console.log("Se ha creado al usuario:", JSON.stringify(user4, null, 4));
    
    const bootcamp1 = await bootcampController.createBootcamp({
        title: "Introduciendo El Bootcamp De React",
        cue: 9,
        description: "React es la librería más usada en JavaScript para el desarrollo de interfaces",
    });
    
    console.log("Creado el bootcamp:", JSON.stringify(bootcamp1, null, 4));
    
    
    const bootcamp2 = await bootcampController.createBootcamp({
        title: "Bootcamp Desarrollo Web Full Stack",
        cue: 8,
        description: "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS",
    });
    
    console.log("Creado el bootcamp:", JSON.stringify(bootcamp2, null, 4));
    
    const bootcamp3 = await bootcampController.createBootcamp({
        title: "Bootcamp Big Data, Inteligencia Artificial & Machine Learning",
        cue: 7,
        description: "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados",
    });
    
    console.log("Creado el bootcamp:", JSON.stringify(bootcamp3, null, 4));
    
        const asign1 = await bootcampController.addUser(1,1);
        console.log("***************************");
        console.log(`Agregando el usuario id=${asign1.foundBootcamp.dataValues.id} al bootcamp con id=${asign1.foundUser.dataValues.id}`);
    
        const asign2 = await bootcampController.addUser(2,1);
        console.log("***************************");
        console.log(`Agregando el usuario id=${asign2.foundBootcamp.dataValues.id} al bootcamp con id=${asign2.foundUser.dataValues.id}`);
    
        const asign3 = await bootcampController.addUser(1,2);
        console.log("***************************");
        console.log(`Agregando el usuario id=${asign3.foundBootcamp.dataValues.id} al bootcamp con id=${asign3.foundUser.dataValues.id}`);
    
        const asign4 = await bootcampController.addUser(1,3);
        console.log("***************************");
        console.log(`Agregando el usuario id=${asign4.foundBootcamp.dataValues.id} al bootcamp con id=${asign4.foundUser.dataValues.id}`);
    
        const asign5 = await bootcampController.addUser(2,3);
        console.log("***************************");
        console.log(`Agregando el usuario id=${asign5.foundBootcamp.dataValues.id} al bootcamp con id=${asign5.foundUser.dataValues.id}`);
    
        const asign6 = await bootcampController.addUser(3,3);
        console.log("***************************");
        console.log(`Agregando el usuario id=${asign6.foundBootcamp.dataValues.id} al bootcamp con id=${asign6.foundUser.dataValues.id}`);
        console.log("");
};

module.exports = createData;