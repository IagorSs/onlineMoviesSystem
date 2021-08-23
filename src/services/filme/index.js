const novoFilmeService = require("./novo.service")
const getFilmeService = require("./get.service")
const atualizarFilmeService = require("./atualizar.service")
const deletarFilmeService = require("./deletar.service")

module.exports = {
    novoFilmeService,
    getFilmeService,
    atualizarFilmeService,
    deletarFilmeService
}