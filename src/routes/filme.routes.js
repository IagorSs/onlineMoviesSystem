const router = require("express").Router()
const { novoFilmeController, 
        getFilmeController,
        atualizarFilmeController,
        deletarFilmeController } 
        = require("../controllers")

router.post("/novo", novoFilmeController.novo)
router.get("/get/:id", getFilmeController.get)
router.put("/atualizar", atualizarFilmeController.atualizar)
router.delete("/deletar/:id", deletarFilmeController.deletar)

module.exports.filme = router