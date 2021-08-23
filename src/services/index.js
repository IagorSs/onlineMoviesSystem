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
        deletarCategoriaFilmeService
        } = require("./categoria_filme")
        
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
}