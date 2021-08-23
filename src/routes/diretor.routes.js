const router = require("express").Router()
const { novoDiretorController,
        getDiretorController,
        atualizarDiretorController,
        deletarDiretorController} 
        = require("../controllers")

router.post("/novo", novoDiretorController.novo)
router.get("/get/:id", getDiretorController.get)
router.put("/atualizar", atualizarDiretorController.aualizar)
router.delete("/deletar/:id", deletarDiretorController.deletar)

module.exports.diretor = router