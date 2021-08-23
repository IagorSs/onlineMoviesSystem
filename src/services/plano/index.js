const novoPlanoSerice = require("./novo.service")
const getPlanoService = require("./get.service")
const atualizarPlanoService = require("./atualizar.service")
const deletarPlanoService = require("./deletar.service")

module.exports = {
    novoPlanoSerice,
    getPlanoService,
    atualizarPlanoService,
    deletarPlanoService
}