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
const { Op, col, fn, Sequelize } = require("sequelize")

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
    }),
    filmeAssistidoPor: (id) => filme_assistido.findAll({
        attributes: ['inscricao_usuario'],
        includes: {
            model: filme_assistido,
            attributes: ['id_filme', 'inscricao_usuario'],
            includes: {
                model: usuario, 
                duplicating: true,
                where: {
                    inscricaoUsuario: {[Op.eq]: col('usuario.inscricao')}
                }
            },
        },
        where: { idFilme: id }
    }),
    viewsPorFilme: (id) => filme_assistido.findAll({
        attributes: [[fn('COUNT', col('inscricao_usuario')), 'views']],
        includes: {
            model: filme_assistido,
            attributes: ['id_filme', [fn('COUNT', col('id_filme')), 'views']],
            includes: {
                model: filme,
                right: true,
                where: {
                    filme: {[Op.eq]: col('filme_assistido.id_filme')}
                }
            },
            group: 'id_filme'            
        },
        where: { idFilme: id }
    }),
    planosAtivos: () => plano.findAll({
        attributes: ['inscricao', 'pagamento'],
        includes: {
            model: [filme_assistido, 'assistidos'],
            attributes: ['inscricao_usuario', [fn('COUNT', col('id_filme')), 'n_assistidos']],
            includes: {
                model: usuario,
                duplicating: true,
                where: {
                    inscricao: {[Op.eq]: col('filme_assistido.inscricao_usuario')}
                }
            },
            where:{
                inscricaoUsuario: {[Op.eq]: col('plano.inscricao')}
            },
            group: 'inscricao_usuario'  
        },
        group: ['pagamento', 'inscricao'],
        order: ['inscricao']
    }),
    assistidosDoUsuarioSub: (inscricao) => filme_assistido.findAll({
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
    }),
    catalogoUsuario: (model) => filme.findAll({
        attributes: ['id', 'nome', 'categoria'],
        where:{
            id:{[Op.in]: model}
        }
    })
}
//select filme.id, filme.nome, assistidos_do_usuario.nome from (select usuario.nome, filme_assistido.id_filme from usuario 
//	join filme_assistido on usuario.inscricao = filme_assistido.inscricao_usuario
//	group by usuario.nome,filme_assistido.id_filme,usuario.inscricao
//	having usuario.inscricao = 3) as assistidos_do_usuario
//	right join filme on filme.id = assistidos_do_usuario.id_filme;
