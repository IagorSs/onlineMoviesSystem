const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { atorRepository } = require("../../repositories");

module.exports.atualizar = async (id, nome, nascimento) => {
    const ator = await atorRepository.get({id})

    if(!ator){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("ator")
        }
    }

    ator.nome = nome
    if(nascimento != null){
        ator.nascimento = nascimento
    }
    ator.updatedAt = new Date()

    await atorRepository.update(ator)

    return {
        id: ator.id,
        nome: ator.nome,
        nascimento: ator.nascimento,
        createdAt: ator.createdAt,
        updatedAt: ator.updatedAt
    }
}