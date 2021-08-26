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
const { novoFilmeAssistidoService,
        getFilmeAssistidoService,
        atualizarFilmeAssistidoService,
        deletarFilmeAssistidoService } 
        = require("./filme_assitido")
const { novoFilmeService,
        getFilmeService,
        atualizarFilmeService,
        deletarFilmeService } 
        = require("./filme")
const { novoPlanoSerice,
        getPlanoService,
        atualizarPlanoService,
        deletarPlanoService } 
        = require("./plano")
const { assistidosService,
        } 
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
    novoPlanoSerice,
    getPlanoService,
    atualizarPlanoService,
    deletarPlanoService,
    assistidosService,
}