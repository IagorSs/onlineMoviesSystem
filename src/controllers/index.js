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
}