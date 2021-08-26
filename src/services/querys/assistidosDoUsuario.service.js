const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { querysRepository } = require("../../repositories")

module.exports.assistidosDoUsuario = async (inscricao) => {
    const consulta = await querysRepository.assistidosDoUsuario(inscricao)

    if(!consulta) {
        throw{
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            message: messages.internalError()
        }
    }

    return consulta
}