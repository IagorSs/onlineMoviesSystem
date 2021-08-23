const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { filmeAssistidoRepository } = require("../../repositories")

module.exports.get = async (id_filme, inscricao_usuario) => {
    const assistidoPor = await filmeAssistidoRepository.get({id_filme, inscricao_usuario})

    if(!assistidoPor){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("registro")
        }
    }

    return {
        id_filme: id_filme,
        inscricao_usuario: inscricao_usuario,
        createdAt: assistidoPor.createdAt,
        updatedAt: assistidoPor.updatedAt
    }
}