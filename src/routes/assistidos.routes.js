const route = require("express").Router()
const { assistidosController } = require("../controllers")

route.get("/", assistidosController.assistidos)

module.exports.assistidos = route