import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";
import { connection } from "../../services/database/dbConnection";

export default class Usuario extends Model {
  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}

Usuario.init(
  {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
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
    },
  },
  {
    connection,
    modelName: "Usuario",
    tableName: "usuarios",
  }
);

Usuario.beforeSave(async (user) => {
  if (user.password) {
    user.password_hash = await bcryptjs.hash(
      user.password,
      process.env.BCRYPT_HASH
    );
  }
});
