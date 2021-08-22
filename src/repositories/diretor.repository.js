const { Diretor } = require("../models")

module.exports = {
    list: (query) => Diretor.findAndCountAll(query),
    getById: (id) => Diretor.findByPk(id),
    get: (params) => Diretor.findOne({ where: params }),
    create: (params) => Diretor.create(params),
    update: (diretor) => diretor.save(),
    destroy: (id) => Diretor.destroy({ where: { id } }),
}