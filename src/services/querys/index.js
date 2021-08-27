const assistidosService = require("./assistidos.service")
const filmesViewsService = require("./filmesViews.service")
const quantidadeAssistidaDosUsuariosService = require("./quantidadeAssistidaDosUsuarios.service")
const assistidosDoUsuarioService = require("./assistidosDoUsuario.service")
const filmeAssistidoPorService = require("./filmeAssistidoPor.service")
const viewsPorFilmeService = require("./viewsPorFilme.service")
const planosAtivosService = require("./planosAtivos.service")

module.exports = {
    assistidosService,
    filmesViewsService,
    quantidadeAssistidaDosUsuariosService,
    assistidosDoUsuarioService,
    filmeAssistidoPorService,
    viewsPorFilmeService,
    planosAtivosService,
}