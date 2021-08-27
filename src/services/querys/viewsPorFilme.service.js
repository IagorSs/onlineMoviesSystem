const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { querysRepository } = require("../../repositories")

module.exports.viewsPorFilme = async (id) => {
    const consulta = await querysRepository.viewsPorFilme(id)

    if(!consulta) {
        throw{
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            message: messages.internalError()
        }
    }

    return consulta
}