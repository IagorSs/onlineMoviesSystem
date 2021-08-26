const { usuario } = require("./usuario.routes")
const { ator } = require("./ator.routes")
const { categoria_filme } = require("./categoria_filme.routes")
const { diretor } = require("./diretor.routes")
const { filme_assistido } = require("./filme_assistido.routes")
const { filme } = require("./filme.routes")
const { plano } = require("./plano.routes")
const { assistidos } = require("./assistidos.routes")
const { filmesViews } = require = require("./filmesViews.routes")

module.exports = {
    usuario,
    ator,
    categoria_filme,
    diretor,
    filme_assistido,
    filme,
    plano,
    assistidos,
    filmesViews,
}