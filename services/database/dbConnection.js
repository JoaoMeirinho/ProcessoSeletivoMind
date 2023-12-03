import Sequelize from "sequelize";
import databaseConfig from "./config/databaseConfig";

export const connection = new Sequelize(databaseConfig);
