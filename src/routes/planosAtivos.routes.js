const route = require("express").Router()
const { planosAtivosController } = require("../controllers")

route.get("/", planosAtivosController.planosAtivos)

module.exports.planosAtivos = route