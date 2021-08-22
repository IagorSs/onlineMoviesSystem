const { Plano } = require("../models")

module.exports = {
    list: (query) => Plano.findAndCountAll(query),
    getById: (id) => Plano.findByPk(id),
    get: (params) => Plano.findOne({ where: params }),
    create: (params) => Plano.create(params),
    update: (plano) => plano.save(),
    destroy: (id) => Plano.destroy({ where: { id } }),
}