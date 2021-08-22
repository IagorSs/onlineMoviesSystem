const { Filme } = require("../models");

module.exports = {
    list: (query) => Filme.findAndCountAll(query),
    getById: (id) => Filme.findByPk(id),
    get: (params) => Filme.findOne({ where: params }),
    create: (params) => Filme.create(params),
    update: (filme) => filme.save(),
    destroy: (id) => Filme.destroy({ where: { id } })
};