const { usuario } = require("./usuario.routes")
const { ator } = require("./ator.routes")
const { categoria_filme } = require("./categoria_filme.routes")
const { diretor } = require("./diretor.routes")

module.exports = {
    usuario,
    ator,
    categoria_filme,
    diretor,
}