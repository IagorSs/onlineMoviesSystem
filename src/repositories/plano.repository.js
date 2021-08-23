const { plano } = require("../models")

module.exports = {
    list: (query) => plano.findAndCountAll(query),
    getById: (id) => plano.findByPk(id),
    get: (params) => plano.findOne({ where: params }),
    create: (params) => plano.create(params),
    update: (Plano) => Plano.save(),
    destroy: (id) => plano.destroy({ where: { id } }),
}