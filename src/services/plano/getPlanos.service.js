const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { planoRepository } = require("../../repositories")

module.exports.getPlanos = async(inscricao) => {
    const plano = await planoRepository.list({
        raw: true,
        where: {
            inscricao: inscricao
        }
    })
    
    if(!plano){
        throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("plano"),
        }
    }

    return plano.rows
}