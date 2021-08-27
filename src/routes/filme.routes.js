const router = require("express").Router()
const { novoFilmeController, 
        getFilmeController,
        atualizarFilmeController,
        deletarFilmeController,
        getPelaCategoriaController } 
        = require("../controllers")

router.post("/novo", novoFilmeController.novo)
router.get("/get/:id", getFilmeController.get)
router.put("/atualizar", atualizarFilmeController.atualizar)
router.delete("/deletar/:id", deletarFilmeController.deletar)
router.get("/getCategoria/:categoria", getPelaCategoriaController.getPelaCategoria)

module.exports.filme = router