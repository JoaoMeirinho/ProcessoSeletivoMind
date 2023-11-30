import Sequelize from "sequelize";
import databaseConfig from "./config/databaseConfig";
// import Usuario from "../../src/models/Usuario";

export const connection = new Sequelize(databaseConfig);
// export const connection = new Sequelize(db, user, pass, {
//   host: host,
//   port: parseInt(port),
//   dialect: "postgres",
// });

// const models = [Usuario];

// models.forEach((model) => model.init(connection));
// models.forEach(
//   (model) => model.associate && model.associate(connection.models)
// );
