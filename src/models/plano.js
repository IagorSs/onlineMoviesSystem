const { Model, Deferrable } = require('sequelize');
const categoria_filme = require('./categoria_filme');
const usuario = require('./usuario');
module.exports = (sequelize, DataTypes) => {
    class Plano extends Model {};

    Plano.init({
            inscricao: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: usuario,
                    key: "inscricao",
                    deferrable: Deferrable.INITIALLY_IMMEDIATE,
                }
            },
            categoria: {
                type: DataTypes.STRING,
                references: {
                    model: categoria_filme,
                    key: "categoria",
                    deferrable: Deferrable.INITIALLY_IMMEDIATE,
                }
            },
            nTelas: {
                type: DataTypes.INTEGER,
                field: "n_telas",
            },
            pagamento: DataTypes.STRING,
            expiracao: DataTypes.DATE,
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
            modelName: "plano",
            tableName: "plano",
    });
    return Plano;
}