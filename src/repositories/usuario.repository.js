const { usuario } = require("../models")
module.exports = {
    list: (query) => usuario.findAndCountAll(query),
    getById: (inscricao) => usuario.findByPk(inscricao),
    get: (params) => usuario.findOne({ where: params }),
    create: (params) => usuario.create(params),
    update: (user) => user.save(),
    destroy: (inscricao) => usuario.destroy({ where: { inscricao } }),
}