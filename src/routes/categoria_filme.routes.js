const router = require("express").Router()
const { novoCategoriaFilmeController,
        getCategoriaFilmeController,
        atualizarCategoriaFilmeController,
        deletarCategoriaFilmeController,
        getAllCategoriaFilmeController } 
        = require("../controllers")

router.post("/novo", novoCategoriaFilmeController.novo)
router.get("/get/:categoria", getCategoriaFilmeController.get)
router.put("/atualizar", atualizarCategoriaFilmeController.atualizar)
router.delete("/deletar/:categoria", deletarCategoriaFilmeController.deletar)
router.get("/getAll", getAllCategoriaFilmeController.getAll)

module.exports.categoria_filme = router