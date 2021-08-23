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
            videoYoutubeId: {
                type: DataTypes.STRING,
                field: "video_youtube_id"
            },
            descricao: DataTypes.STRING,
            idAtorPrincipal: {
                type: DataTypes.STRING,
                field: "id_ator_principal",
                references: {
                    model: ator,
                    key: "id",
                    deferrable: Deferrable.INITIALLY_IMMEDIATE,
                }
            },
            idDiretor: {
                type: DataTypes.STRING,
                field: "id_diretor",
                references: {
                    model: diretor,
                    key: "id",
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