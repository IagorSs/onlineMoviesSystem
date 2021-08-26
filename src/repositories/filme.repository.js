const { filme } = require("../models");

module.exports = {
    list: (query) => filme.findAndCountAll(query),
    getById: (id) => filme.findByPk(id),
    get: (params) => filme.findOne({ where: params }),
    create: (params) => filme.create(params),
    update: (Filme) => Filme.save(),
    destroy: (id) => filme.destroy({ where: { id } }),
    getAll: () => filme.findAll({raw: true})
};