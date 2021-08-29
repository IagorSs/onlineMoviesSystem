const router = require("express").Router()
const { novoAtorController, 
        getAtorController, 
        atualizarAtorController, 
        deletarAtorController,
        getAllAtorController } 
        = require("../controllers")

router.post("/novo", novoAtorController.novo)
router.get("/get/:id", getAtorController.get)
router.put("/atualizar", atualizarAtorController.atualizar)
router.delete("/deletar/:id", deletarAtorController.deletar)
router.get("/getAll", getAllAtorController.getAll)

module.exports.ator = router