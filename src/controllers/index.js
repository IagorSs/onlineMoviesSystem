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
        deletarCategoriaFilmeController,
        getAllCategoriaFilmeController } 
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
        deletarFilmeController,
        getPelaCategoriaController } 
        = require("./filme")
const { novoPlanoController,
        getPlanoController,
        atualizarPlanoController,
        deletarPlanoController,
        getPlanosController }
        = require("./plano")
const { assistidosController,
        filmesViewsController,
        quantidadeAssistidaDosUsuariosController,
        assistidosDoUsuarioController,
        filmeAssistidoPorController,
        viewsPorFilmeController,
        planosAtivosController,
        catalogoUsuarioController }
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
    getAllCategoriaFilmeController,
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
    getPelaCategoriaController,
    novoPlanoController,
    getPlanoController,
    atualizarPlanoController,
    deletarPlanoController,
    getPlanosController,
    assistidosController,
    filmesViewsController,
    quantidadeAssistidaDosUsuariosController,
    assistidosDoUsuarioController,
    filmeAssistidoPorController,
    viewsPorFilmeController,
    planosAtivosController,
    catalogoUsuarioController
}