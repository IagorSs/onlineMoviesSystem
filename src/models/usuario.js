const { Model, Deferrable } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {};
  
    Usuario.init({
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
        sequelize,
        modelName: "usuario",
        tableName: "usuario",
    });
    return Usuario;
};
