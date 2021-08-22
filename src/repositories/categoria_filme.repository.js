const { categoriaFilme } = require("../models")

module.exports = {
    list: (query) => categoriaFilme.findAndCountAll(query),
    getById: (id) => categoriaFilme.findByPk(id),
    get: (params) => categoriaFilme.findOne({ where: params }),
    create: (params) => categoriaFilme.create(params),
    update: (categoria_filme) => categoria_filme.save(),
    destroy: (id) => categoriaFilme.destroy({ where: { id } }),
}