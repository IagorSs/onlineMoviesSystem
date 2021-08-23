const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { filmeAssistidoRepository } = require("../../repositories")

module.exports.atualizar = async (id_filme, inscricao_usuario, novo_id_filme) => {
    const assistidoPor = await filmeAssistidoRepository.get({id_filme, inscricao_usuario})
    const novoAssistidoPor = await filmeAssistidoRepository.get({id_filme: novo_id_filme, inscricao_usuario})

    if(!assistidoPor){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("registro")
        }
    }

    if(novoAssistidoPor){
        throw{
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("categoria nova")
        }
    }

    await filmeAssistidoRepository.create({idFilme: novo_id_filme,
                                            inscricaoUsuario: inscricao_usuario,
                                            createdAt: assistidoPor.createdAt,
                                            updatedAt: new Date()})
    await filmeAssistidoRepository.destroy(id_filme, inscricao_usuario)

    const novo = await filmeAssistidoRepository.get({id_filme: novo_id_filme, inscricao_usuario})

    return{
        id_filme: novo_id_filme,
        inscricao_usuario,
        createdAt: novo.createdAt,
        updatedAt: novo.updatedAt
    }
}