const novoPlanoSerice = require("./novo.service")
const getPlanoService = require("./get.service")
const atualizarPlanoService = require("./atualizar.service")
const deletarPlanoService = require("./deletar.service")
const getPlanosService = require("./getPlanos.service")

module.exports = {
    novoPlanoSerice,
    getPlanoService,
    atualizarPlanoService,
    deletarPlanoService,
    getPlanosService
}