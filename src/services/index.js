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
        deletarCategoriaFilmeService } 
        = require("./categoria_filme")
const { novoDiretorService,
        getDiretorService,
        atualizarDiretorService,
        deletarDiretorService} 
        = require("./diretor")

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
    novoDiretorService,
    getDiretorService,
    atualizarDiretorService,
    deletarDiretorService,
}