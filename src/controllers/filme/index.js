const novoFilmeController = require("./novo.controller")
const getFilmeController = require("./get.controller")
const atualizarFilmeController = require("./atualizar.controller")
const deletarFilmeController = require("./deletar.controller")
const getPelaCategoriaController = require("./getPelaCategoria.controller")

module.exports = {
    novoFilmeController,
    getFilmeController,
    atualizarFilmeController,
    deletarFilmeController,
    getPelaCategoriaController
}