const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { planoRepository } = require("../../repositories")

module.exports.novo = async(inscricao, categoria, n_telas, pagamento, expiracao) => {
    const plano = await planoRepository.get({inscricao, categoria})
    
    if(plano){
        throw {
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("plano"),
        }
    }

    const novo = {
        inscricao,
        categoria,
        nTelas: n_telas,
        pagamento,
        expiracao,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    await planoRepository.create(novo)

    return { inscricao, categoria, n_telas, pagamento, expiracao }
}
