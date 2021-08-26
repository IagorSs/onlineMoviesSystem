const router = require("express").Router()
const { quantidadeAssistidaDosUsuariosController } = require("../controllers")

router.get("/", quantidadeAssistidaDosUsuariosController.quantidadeAssistidaDosUsuarios)

module.exports.quantidadeAssistidaDosUsuarios = router