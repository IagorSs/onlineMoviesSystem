const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { filmeAssistidoRepository } = require("../../repositories")

module.exports.novo = async (id_filme, inscricao_usuario) => {
    const assistidoPor = await filmeAssistidoRepository.get({id_filme, inscricao_usuario})
    
    if(assistidoPor){
        throw{
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("registro")
        }
    }

    const novo = {
        idFilme: id_filme,
        inscricaoUsuario: inscricao_usuario,
        createdAt: new Date(),
        deletedAt: new Date()
    }

    await filmeAssistidoRepository.create(novo)

    return {
        id_filme,
        inscricao_usuario
    }
}