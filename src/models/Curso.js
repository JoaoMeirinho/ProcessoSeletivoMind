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
      validate:  {
        notEmpty: {
          args: true,
          msg: "O nome do curso deve ser fornecido",
        },
      },
    },
    professor_responsavel: {
      type: Sequelize.STRING,
      allowNull: false,
      validate:  {
        notEmpty: {
          args: true,
          msg: "O nome de um professor deve ser fornecido",
        },
      },
    },
    categoria: {
      type: Sequelize.STRING,
      allowNull: false,
      validate:  {
        notEmpty: {
          args: true,
          msg: "Uma categoria deve ser fornecida",
        },
      },
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
      validate:  {
        notEmpty: {
          args: true,
          msg: "Uma descrição deve ser fornecida",
        },
      },
    },
    imagem: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Uma imagem deve ser fornecida",
        },
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Curso",
    tableName: 'curso',
  }
);

await Curso.sync();
