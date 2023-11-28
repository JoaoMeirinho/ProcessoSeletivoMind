import { Sequelize } from "sequelize";
import Usuario from "../../src/models/Usuario";

const db = process.env.DATABASE;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

const models = [Usuario];

export const connection = new Sequelize(db, user, pass, {
  host: host,
  port: parseInt(port),
  dialect: "postgres",
});

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
