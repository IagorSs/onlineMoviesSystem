const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { usuarioRepository } = require("../../repositories");

module.exports.get = async (login, senha) => {
    const usuario = await usuarioRepository.get({ login })

    if(!usuario){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("usuario")
        };
    }
    
    if(usuario.senha != senha){
        throw{
            status: StatusCodes.UNAUTHORIZEDs,
            message: messages.invalidFields("senha")
        };
    }

    return ({
        inscricao: usuario.inscricao, 
        email: usuario.email,
        nome: usuario.nome,
        login: usuario.login,
        createdAt: usuario.createdAt,
        updatedAt: usuario.updatedAt
    })
}