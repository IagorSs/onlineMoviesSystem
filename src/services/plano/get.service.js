const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { planoRepository } = require("../../repositories")

module.exports.get = async(inscricao, categoria) => {
    const plano = await planoRepository.get({inscricao, categoria})
    
    if(!plano){
        throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("plano"),
        }
    }

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
