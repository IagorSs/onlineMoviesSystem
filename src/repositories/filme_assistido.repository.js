const { filme_assistido } = require("../models")

module.exports = {
    list: (query) => filme_assistido.findAndCountAll(query),
    getById: (id) => filme_assistido.findByPk(id),
    get: (params) => filme_assistido.findOne({ where: params }),
    create: (params) => filme_assistido.create(params),
    update: (filmeAssistido) => filmeAssistido.save(),
    destroy: (id_filme, inscricao_usuario) => filme_assistido.destroy({ where: { inscricao_usuario, id_filme } }),
    getAll: () => filme_assistido.findAll({raw: true})
}