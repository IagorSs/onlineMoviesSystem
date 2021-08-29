const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { atorRepository } = require("../../repositories");

module.exports.getAll = async () => {
    const ator = await atorRepository.getAll()

    if(!ator){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("ator")
        }
    }

    return ator
}