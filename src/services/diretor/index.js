const novoDiretorService = require("./novo.service")
const getDiretorService = require("./get.service")
const atualizarDiretorService = require("./atualizar.service")
const deletarDiretorService = require("./deletar.service")
const getAllDiretorService = require("./getAll.service")

module.exports = {
    novoDiretorService,
    getDiretorService,
    atualizarDiretorService,
    deletarDiretorService,
    getAllDiretorService
}