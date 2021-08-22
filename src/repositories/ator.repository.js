const { Ator } = require("../models")

module.exports = {
    list: (query) => Ator.findAndCountAll(query),
    getById: (id) => Ator.findByPk(id),
    get: (params) => Ator.findOne({ where: params }),
    create: (params) => Ator.create(params),
    update: (ator) => ator.save(),
    destroy: (id) => Ator.destroy({ where: { id } }),
}