const { ator } = require("../models")

module.exports = {
    list: (query) => ator.findAndCountAll(query),
    getById: (id) => ator.findByPk(id),
    get: (params) => ator.findOne({ where: params }),
    create: (params) => ator.create(params),
    update: (Ator) => Ator.save(),
    destroy: (id) => ator.destroy({ where: { id } }),
    getAll: () => ator.findAll({raw: true})
}