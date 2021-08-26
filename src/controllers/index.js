const { novoUsuarioController, 
        getUsuarioController, 
        atualizarUsuarioController, 
        deletarUsuarioController } 
        = require("./usuario")
const { novoAtorController, 
        getAtorController, 
        atualizarAtorController, 
        deletarAtorController } 
        = require("./ator")
const { novoCategoriaFilmeController,
        getCategoriaFilmeController,
        atualizarCategoriaFilmeController,
        deletarCategoriaFilmeController } 
        = require("./categoria_filme")
const { novoDiretorController,
        getDiretorController,
        atualizarDiretorController,
        deletarDiretorController } 
        = require("./diretor")
const { novoFilmeAssistidoController,
        getFilmeAssistidoController,
        atualizarFilmeAssistidoController,
        deletarFilmeAssistidoController } 
        = require("./filme_assistido")
const { novoFilmeController, 
        getFilmeController,
        atualizarFilmeController,
        deletarFilmeController } 
        = require("./filme")
const { novoPlanoController,
        getPlanoController,
        atualizarPlanoController,
        deletarPlanoController }
        = require("./plano")
const { assistidosController,
        filmesViewsController,
        }
        = require("./querys")

module.exports = {
    novoUsuarioController,
    getUsuarioController,
    atualizarUsuarioController,
    deletarUsuarioController,
    novoAtorController,
    getAtorController,
    atualizarAtorController,
    deletarAtorController,
    novoCategoriaFilmeController,
    getCategoriaFilmeController,
    atualizarCategoriaFilmeController,
    deletarCategoriaFilmeController,
    novoDiretorController,
    getDiretorController,
    atualizarDiretorController,
    deletarDiretorController,
    novoFilmeAssistidoController,
    getFilmeAssistidoController,
    atualizarFilmeAssistidoController,
    deletarFilmeAssistidoController,
    novoFilmeController,
    getFilmeController,
    atualizarFilmeController,
    deletarFilmeController,
    novoPlanoController,
    getPlanoController,
    atualizarPlanoController,
    deletarPlanoController,
    assistidosController,
    filmesViewsController,
}