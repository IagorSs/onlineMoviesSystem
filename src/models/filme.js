const { Model, Deferrable} = require('sequelize');
const ator = require('./ator');
const diretor = require('./diretor');
const categoria_filme = require('./categoria_filme');
module.exports = (sequelize, DataTypes) => {
    class Filme extends Model {};

    Filme.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            categoria: {
                type: DataTypes.STRING,
                references: {
                    model: categoria_filme,
                    key: "categoria",
                    deferrable: Deferrable.INITIALLY_IMMEDIATE,
                }
            },
            duracao: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            produtora: DataTypes.STRING,
            arquivo: DataTypes.BLOB,
            descricao: DataTypes.STRING,
            cpfAtorPrincipal: {
                type: DataTypes.STRING,
                field: "cpf_ator_principal",
                references: {
                    model: ator,
                    key: "cpf",
                    deferrable: Deferrable.INITIALLY_IMMEDIATE,
                }
            },
            cpfDiretor: {
                type: DataTypes.STRING,
                field: "cpf_diretor",
                references: {
                    model: diretor,
                    key: "cpf",
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
            modelName: "filme",
            tableName: "filme",
    });
    return Filme;
}