const router = require("express").Router()
const { novoCategoriaFilmeController,
        getCategoriaFilmeController,
        atualizarCategoriaFilmeController,
        deletarCategoriaFilmeController } 
        = require("../controllers")

router.post("/novo", novoCategoriaFilmeController.novo)
router.get("/get/:categoria", getCategoriaFilmeController.get)
router.put("/atualizar", atualizarCategoriaFilmeController.atualizar)
router.delete("/deletar/:categoria", deletarCategoriaFilmeController.deletar)

module.exports.categoria_filme = router