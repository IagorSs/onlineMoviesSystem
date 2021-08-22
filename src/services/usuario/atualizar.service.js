const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { usuarioRepository } = require("../../repositories");

module.exports.atualizar = async (inscricao, email, nome, login, senha) => {
    const usuario = await usuarioRepository.get({inscricao})

    if(!usuario){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("usuario")
        };
    }

    if(usuario.senha != senha){
        throw{
            status: StatusCodes.UNAUTHORIZED,
            message: messages.invalidFields("senha")
        };
    }

    usuario.email = email
    usuario.nome = nome
    usuario.login = login
    usuario.senha = senha
    usuario.updatedAt = new Date()

    await usuarioRepository.update(usuario)

    return ({
        inscricao: usuario.inscricao, 
        email: usuario.email,
        nome: usuario.nome,
        login: usuario.login,
        createdAt: usuario.createdAt,
        updatedAt: usuario.updatedAt
    })
}