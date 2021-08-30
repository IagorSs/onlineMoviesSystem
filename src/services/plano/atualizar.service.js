const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { planoRepository } = require("../../repositories")

module.exports.atualizar = async(inscricao, categoria, n_telas, pagamento, expiracao) => {
    const plano = await planoRepository.get({inscricao, categoria})
    
    if(!plano){
        throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("plano"),
        }
    }

    plano.nTelas = n_telas
    plano.pagamento = pagamento
    plano.expiracao = expiracao
    plano.updatedAt = new Date()

    await planoRepository.destroy({inscricao, categoria})

    await planoRepository.create({
        inscricao: plano.inscricao,
        categoria: plano.categoria,
        nTelas: plano.nTelas,
        pagamento: plano.pagamento,
        expiracao: plano.expiracao,
        createdAt: plano.createdAt,
        updatedAt: plano.updatedAt
    })

    return { 
        inscricao: plano.inscricao, 
        categoria: plano.categoria, 
        n_telas: plano.nTelas, 
        pagamento: plano.pagamento, 
        expiracao: plano.expiracao,
        createdAt: plano.createdAt,
        updatedAt: plano.updatedAt
    }
}
