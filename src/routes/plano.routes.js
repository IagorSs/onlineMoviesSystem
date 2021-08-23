const route = require("express").Router()
const { novoPlanoController,
        getPlanoController,
        atualizarPlanoController,
        deletarPlanoController } 
        = require("../controllers")

route.post("/novo", novoPlanoController.novo)
route.get("/get/:inscricao/:categoria", getPlanoController.get)
route.put("/atualizar", atualizarPlanoController.atualizar)
route.delete("/deletar/:inscricao/:categoria", deletarPlanoController.deletar)

module.exports.plano = route