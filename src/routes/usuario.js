const router = require("express").Router()
const { novoUsuarioController, getUsuarioController, atualizarUsuarioController, deletarUsuarioController } = require("../controllers")

router.post("/novo", novoUsuarioController.novo)
router.post("/login", getUsuarioController.get)
router.put("/atualizar", atualizarUsuarioController.atualizar)
router.delete("/deletar/:id", deletarUsuarioController.deletar)

module.exports.usuario = router