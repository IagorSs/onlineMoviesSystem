const novoFilmeAssistidoService = require("./novo.service")
const getFilmeAssistidoService = require("./get.service")
const atualizarFilmeAssistidoService = require("./atualizar.service")
const deletarFilmeAssistidoService = require("./deletar.service")

module.exports = {
    novoFilmeAssistidoService,
    getFilmeAssistidoService,
    atualizarFilmeAssistidoService,
    deletarFilmeAssistidoService
}