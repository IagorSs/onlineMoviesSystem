const route = require("express").Router()
const { catalogoUsuarioController } = require("../controllers")

route.get("/:inscricao", catalogoUsuarioController.catalogoUsuario)

module.exports.catalogoUsuario = route