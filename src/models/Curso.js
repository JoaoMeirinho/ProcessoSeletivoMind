import { Sequelize, Model } from "sequelize";
import { connection } from "../../services/database/dbConnection";

export default class Curso extends Model {}

Curso.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    professor_responsavel: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    categoria: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imagem: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    sequelize: connection,
    modelName: "Curso",
    tableName: 'curso',
  }
);

await Curso.sync();
