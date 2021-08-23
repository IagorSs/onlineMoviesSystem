const router = require("express").Router()
const { novoFilmeAssistidoController,
        getFilmeAssistidoController,
        atualizarFilmeAssistidoController,
        deletarFilmeAssistidoController} 
        = require("../controllers")

router.post("/novo", novoFilmeAssistidoController.novo)
router.get("/get/:id/:inscricao", getFilmeAssistidoController.get)
router.put("/atualizar", atualizarFilmeAssistidoController.atualizar)
router.delete("/deletar/:id/:inscricao", deletarFilmeAssistidoController.deletar)

module.exports.filme_assistido = router