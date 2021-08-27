const novoCategoriaFilmeService = require("./novo.service")
const getCategoriaFilmeService = require("./get.service")
const atualizarCategoriaFilmeService = require("./atualizar.service")
const deletarCategoriaFilmeService = require("./deletar.service")
const getAllCategoriaFilmeService = require("./getAll.service")

module.exports = {
    novoCategoriaFilmeService,
    getCategoriaFilmeService,
    atualizarCategoriaFilmeService,
    deletarCategoriaFilmeService,
    getAllCategoriaFilmeService
}