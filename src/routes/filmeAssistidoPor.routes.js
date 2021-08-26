const route = require("express").Router()
const { filmeAssistidoPorController } = require("../controllers")

route.get("/:id", filmeAssistidoPorController.filmeAssistidoPor)

module.exports.filmeAssistidoPor = route