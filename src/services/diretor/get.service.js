const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { diretorRepository } = require("../../repositories")

module.exports.get = async (id) => {
    const diretor = await diretorRepository.get({id})

    if(!diretor){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("diretor")
        }
    }

    return{
        id: diretor.id,
        nome: diretor.nome,
        nascimento: diretor.nascimento,
        createdAt: diretor.createdAt,
        updatedAt: diretor.updatedAt
    }
}