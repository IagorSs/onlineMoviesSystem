const route = require("express").Router()
const { assistidosDoUsuarioController } = require("../controllers")

route.get("/:inscricao", assistidosDoUsuarioController.assistidosDoUsuario)

module.exports.assistidosDoUsuario = route