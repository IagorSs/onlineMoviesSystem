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
}