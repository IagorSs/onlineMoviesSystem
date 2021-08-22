const novoUsuarioService = require("./novo.service")
const getUsuarioService = require("./get.service")
const atualizarUsuario = require("./atualizar.service")
const deletarUsuario = require("./deletar.service")

module.exports = {
    novoUsuarioService,
    getUsuarioService,
    atualizarUsuario,
    deletarUsuario,
}