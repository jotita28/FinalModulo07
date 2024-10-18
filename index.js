const sequelize = require("./app/database");
const createData = require("./app/utils/createdata");
const createQuery = require("./app/utils/queries");

const main = async () => {

    console.log("Realizando la migracion...")
    await sequelize.sync({ force: true });
    console.log("...Sincronizacion exitosa");
    
        await createData();
        
        await createQuery();

    };

main()

