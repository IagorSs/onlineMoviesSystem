const { Model, Deferrable } = require('sequelize');
const usuario = require('./usuario');
module.exports = (sequelize, DataTypes) => {
    class filmeAssistido extends Model {};

    filmeAssistido.init({
            idFilme: {
                type: DataTypes.INTEGER,
                field: "id_filme",
                primaryKey: true,
                references: {
                    model: usuario,
                    key: "id",
                    deferrable: Deferrable.INITIALLY_IMMEDIATE,
                }
            },
            inscricaoUsuario: {
                type: DataTypes.INTEGER,
                field: "inscricao_usuario",
                primaryKey: true,
                references: {
                    model: usuario,
                    key: "inscricao",
                    deferrable: Deferrable.INITIALLY_IMMEDIATE,
                }
            },
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
            modelName: "filme_assistido",
            tableName: "filme_assistido"
    });
    return filmeAssistido;
}