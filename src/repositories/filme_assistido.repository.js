const { filmeAssistido } = require("../models")

module.exports = {
    list: (query) => filmeAssistido.findAndCountAll(query),
    getById: (id) => filmeAssistido.findByPk(id),
    get: (params) => filmeAssistido.findOne({ where: params }),
    create: (params) => filmeAssistido.create(params),
    update: (filme_assistido) => filme_assistido.save(),
    destroy: (id) => filmeAssistido.destroy({ where: { id } }),
}