const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { diretorRepository } = require("../../repositories");

module.exports.getAll = async () => {
    const diretor = await diretorRepository.getAll()

    if(!diretor){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("diretor")
        }
    }

    return diretor
}