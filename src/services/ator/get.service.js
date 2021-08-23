const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { atorRepository } = require("../../repositories");

module.exports.get = async (id) => {
    const ator = await atorRepository.get({id})

    if(!ator){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("ator")
        }
    }

    return {
        id: ator.id,
        nome: ator.nome,
        nascimento: ator.nascimento,
        createdAt: ator.createdAt,
        updatedAt: ator.updatedAt
    }
}