const route = require("express").Router()
const { novoPlanoController,
        getPlanoController,
        atualizarPlanoController,
        deletarPlanoController,
        getPlanosController } 
        = require("../controllers")

route.post("/novo", novoPlanoController.novo)
route.get("/get/:inscricao/:categoria", getPlanoController.get)
route.put("/atualizar", atualizarPlanoController.atualizar)
route.delete("/deletar/:inscricao/:categoria", deletarPlanoController.deletar)
route.get("get/:inscricao", getPlanosController.getPlanos)

module.exports.plano = route