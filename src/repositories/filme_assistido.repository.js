const { filme_assistido } = require("../models")

module.exports = {
    list: (query) => filme_assistido.findAndCountAll(query),
    getById: (id) => filme_assistido.findByPk(id),
    get: (params) => filme_assistido.findOne({ where: params }),
    create: (params) => filme_assistido.create(params),
    update: (filmeAssistido) => filmeAssistido.save(),
    destroy: (id) => filme_assistido.destroy({ where: { id } }),
}