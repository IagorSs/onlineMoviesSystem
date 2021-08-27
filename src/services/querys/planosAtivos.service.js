const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { querysRepository } = require("../../repositories")

module.exports.planosAtivos = async () => {
    const consulta = await querysRepository.planosAtivos()

    if(!consulta) {
        throw{
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            message: messages.internalError()
        }
    }

    return consulta
}