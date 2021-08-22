const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { usuarioRepository } = require("../../repositories");

module.exports.deletar = async (inscricao) => {
    const usuario = await usuarioRepository.get({inscricao})

    if(!usuario){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("usuario")
        };
    }

    await usuarioRepository.destroy(inscricao)

    return "usuario deletado"
}