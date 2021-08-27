const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { filmeRepository } = require("../../repositories")

module.exports.getPelaCategoria = async (categoria) => {
    const filme = await filmeRepository.getByCategory(categoria)

    if(!filme){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("filme")
        }
    }

    return filme
}