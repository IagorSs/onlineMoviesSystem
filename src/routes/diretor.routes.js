const router = require("express").Router()
const { novoDiretorController,
        getDiretorController,
        atualizarDiretorController,
        deletarDiretorController,
        getAllDiretorController } 
        = require("../controllers")

router.post("/novo", novoDiretorController.novo)
router.get("/get/:id", getDiretorController.get)
router.put("/atualizar", atualizarDiretorController.aualizar)
router.delete("/deletar/:id", deletarDiretorController.deletar)
router.get("/getAll", getAllDiretorController.getAll)

module.exports.diretor = router