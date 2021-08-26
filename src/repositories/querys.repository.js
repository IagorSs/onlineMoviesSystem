const {
    ator,
    categoria_filme,
    diretor,
    filme_assistido,
    filme,
    index,
    plano,
    usuario
} = require("../models")
const { Op, col } = require("sequelize")

module.exports = {
    usarios: () => usuario.findAll({
        raw: true,
        attributes: ['inscricao', 'nome']
    }),
    assistidos: () => filme_assistido.findAll({
            raw: true,
            attributes: ['id_filme', 'inscricao_usuario'],
            includes: {
                model: usuario, 
                duplicating: true,
                where: {
                    inscricaoUsuario: {[Op.eq]: col('usuario.inscricao')}
                }
            }
      })  
}