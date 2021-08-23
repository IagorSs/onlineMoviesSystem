const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { atorRepository } = require("../../repositories");

module.exports.deletar = async (id) => {
    const ator = await atorRepository.get({id})

    if(!ator){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("ator")
        }
    }

    await atorRepository.destroy(id)

    return "ator deletado"
}