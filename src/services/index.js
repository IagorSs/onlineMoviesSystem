const { novoUsuarioService, 
        getUsuarioService, 
        atualizarUsuarioService, 
        deletarUsuarioService } 
        = require("./usuario")
const { novoAtorService, 
        getAtorService, 
        atualizarAtorService, 
        deletarAtorService } 
        = require("./ator")
const { novoCategoriaFilmeService,
        getCategoriaFilmeService,
        atualizarCategoriaFilmeService,
        deletarCategoriaFilmeService,
        getAllCategoriaFilmeService } 
        = require("./categoria_filme")
const { novoDiretorService,
        getDiretorService,
        atualizarDiretorService,
        deletarDiretorService} 
        = require("./diretor")
const { novoFilmeAssistidoService,
        getFilmeAssistidoService,
        atualizarFilmeAssistidoService,
        deletarFilmeAssistidoService } 
        = require("./filme_assitido")
const { novoFilmeService,
        getFilmeService,
        atualizarFilmeService,
        deletarFilmeService,
        getPelaCategoriaService } 
        = require("./filme")
const { novoPlanoSerice,
        getPlanoService,
        atualizarPlanoService,
        deletarPlanoService,
        getPlanosService } 
        = require("./plano")
const { assistidosService,
        filmesViewsService,
        quantidadeAssistidaDosUsuariosService,
        assistidosDoUsuarioService,
        filmeAssistidoPorService,
        viewsPorFilmeService,
        planosAtivosService,
        catalogoUsuarioService } 
        = require("./querys")
        
module.exports = {
    novoUsuarioService,
    getUsuarioService,
    atualizarUsuarioService,
    deletarUsuarioService,
    novoAtorService,
    getAtorService,
    atualizarAtorService,
    deletarAtorService,
    novoCategoriaFilmeService,
    getCategoriaFilmeService,
    atualizarCategoriaFilmeService,
    deletarCategoriaFilmeService,
    getAllCategoriaFilmeService,
    novoDiretorService,
    getDiretorService,
    atualizarDiretorService,
    deletarDiretorService,
    novoFilmeAssistidoService,
    getFilmeAssistidoService,
    atualizarFilmeAssistidoService,
    deletarFilmeAssistidoService,
    novoFilmeService,
    getFilmeService,
    atualizarFilmeService,
    deletarFilmeService,
    getPelaCategoriaService,
    novoPlanoSerice,
    getPlanoService,
    atualizarPlanoService,
    deletarPlanoService,
    getPlanosService,
    assistidosService,
    filmesViewsService,
    quantidadeAssistidaDosUsuariosService,
    assistidosDoUsuarioService,
    filmeAssistidoPorService,
    viewsPorFilmeService,
    planosAtivosService,
    catalogoUsuarioService
}