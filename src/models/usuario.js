const { encryptor } = require("../helpers");

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "usuario",
    {
        inscricao: {
          type: DataTypes.INTEGER,
          primaryKey: true,
      },
        email: DataTypes.STRING,
        nome: DataTypes.STRING,
        login: DataTypes.STRING,
        senha: DataTypes.STRING,
        createdAt: {
          type: DataTypes.DATE,
          field: "created_at",
        },
        updatedAt: {
          type: DataTypes.DATE,
          field: "updated_at",
        },
    },
    {
      tableName: "usuario",
    }
  );

  //Usuario.beforeSave(async (Usuario, options) => {
  //  const senha = await encryptor.hashPassword(Usuario.senha);
  //  if (Usuario.changed("senha")) {
  //    Object.assign(Usuario, { senha });
  //  }
  //  return Usuario;
  //});

  Usuario.prototype.toJSON = function () {
    const Usuario = { ...this.get() };
    return Object.fromEntries(
      Object.entries(Usuario).filter(([key]) => !["senha"].includes(key))
    );
  };

  return Usuario;
};
