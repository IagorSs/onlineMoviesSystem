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
const { Op, col, fn} = require("sequelize")

module.exports = {
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
      }),
    filmesViews: () => filme_assistido.findAll({
        raw: true,
        attributes: ['id_filme', [fn('COUNT', col('id_filme')), 'views']],
        includes: {
            model: filme,
            right: true,
            where: {
                filme: {[Op.eq]: col('filme_assistido.id_filme')}
            }
        },
        group: 'id_filme'
     }),
    quantidadeAssistidaDosUsuarios: () => filme_assistido.findAll({
        raw: true,
        attributes: ['inscricao_usuario', [fn('COUNT', col('id_filme')), 'n_assistidos']],
        includes: {
            model: usuario,
            duplicating: true,
            where: {
                inscricao: {[Op.eq]: col('filme_assistido.inscricao_usuario')}
            }
        },
        group: 'inscricao_usuario'    
    }),
    assistidosDoUsuario: (inscricao) => filme_assistido.findAll({
        raw: true,
        attributes: ['id_filme'],
        includes: {
            model: usuario,
            duplicating: true,
            where: {
                inscricao: {[Op.eq]: col('filme_assistido.inscricao_usuario')}
            }
        },
        group: ['id_filme', 'inscricao_usuario'],
        having: { inscricao_usuario: inscricao}
    })
}

//select usuario.nome, usuario.inscricao, count(filme_assistido.id_filme) from usuario 
//	join filme_assistido on usuario.inscricao = filme_assistido.inscricao_usuario
//	group by usuario.inscricao;