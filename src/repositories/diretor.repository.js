const { diretor } = require("../models")

module.exports = {
    list: (query) => diretor.findAndCountAll(query),
    getById: (id) => diretor.findByPk(id),
    get: (params) => diretor.findOne({ where: params }),
    create: (params) => diretor.create(params),
    update: (Diretor) => Diretor.save(),
    destroy: (id) => diretor.destroy({ where: { id } }),
    getAll: () => diretor.findAll({raw: true})
}