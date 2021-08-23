const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class categoriaFilme extends Model {};

    categoriaFilme.init({
            categoria: {
                type: DataTypes.STRING,
                primaryKey: true,
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
            modelName: "categoria_filme",
            tableName: "categoria_filme"
    });
    return categoriaFilme;
}