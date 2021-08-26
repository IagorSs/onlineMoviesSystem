const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { querysRepository } = require("../../repositories")

module.exports.filmeAssistidoPor = async (id) => {
    const consulta = await querysRepository.filmeAssistidoPor(id)

    if(!consulta) {
        throw{
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            message: messages.internalError()
        }
    }

    return consulta
}