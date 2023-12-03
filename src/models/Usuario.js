import { Sequelize, Model } from "sequelize";
import bcryptjs from "bcryptjs";
import { connection } from "../../services/database/dbConnection";

export default class Usuario extends Model {
  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}

Usuario.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Um nome deve ser fornecida",
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: {
        msg: "Este email já está sendo utilizado",
      },
      validate: {
        isEmail: {
          msg: "Email inválido!",
        },
      },
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.VIRTUAL,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Uma senha deve ser fornecida",
        },
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Usuario",
    tableName: "usuario",
  }
);

Usuario.beforeValidate(async (user) => {
  if (user.password) {
    user.password_hash = await bcryptjs.hash(user.password, 8);
  }
});

// Usuario.beforeValidate
await Usuario.sync();
