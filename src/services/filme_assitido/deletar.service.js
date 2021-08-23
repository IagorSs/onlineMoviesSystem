const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { filmeAssistidoRepository } = require("../../repositories")

module.exports.deletar = async (id_filme, inscricao_usuario) => {
    const assistidoPor = await filmeAssistidoRepository.get({id_filme, inscricao_usuario})

    if(!assistidoPor){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("registro")
        }
    }

    await filmeAssistidoRepository.destroy(id_filme, inscricao_usuario)

    return "registro deletado"
}