const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Ator extends Model {};

    Ator.init({
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            nome: DataTypes.STRING,
            nascimento: DataTypes.DATE,
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
            modelName: "ator",
            tableName: "ator"
    });
    return Ator;
}