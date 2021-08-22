const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Ator extends Model {};

    Ator.init({
            cpf: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            nome: DataTypes.STRING,
            nastimento: DataTypes.DATE,
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
    });
    return Ator;
}