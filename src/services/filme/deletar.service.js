const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { filmeRepository } = require("../../repositories")

module.exports.deletar = async (id) => {
    const filme = await filmeRepository.get({id})

    if(!filme){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("filme")
        }
    }

    await filmeRepository.destroy(id)

    return "filme deletado"
}