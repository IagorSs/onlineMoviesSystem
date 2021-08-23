const router = require("express").Router()
const { novoAtorController, 
        getAtorController, 
        atualizarAtorController, 
        deletarAtorController } 
        = require("../controllers")

router.post("/novo", novoAtorController.novo)
router.get("/get/:id", getAtorController.get)
router.put("/atualizar", atualizarAtorController.atualizar)
router.delete("/deletar/:id", deletarAtorController.deletar)

module.exports.ator = router