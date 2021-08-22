const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken")

const { messages } = require("../../helpers")
const { constants } = require("../../utils")
const { usuarioRepository } = require("../../repositories")

module.exports.novo = async (inscricao, email, nome, login, senha) => {
    const usuario = await usuarioRepository.get({ inscricao })
    
    if(usuario){
        throw {
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("usuario"),
        }
    }

    const novo = {
        inscricao,
        email,
        nome,
        login,
        senha,
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    await usuarioRepository.create(novo)

    return {
        inscricao,
        email,
        nome,
        login,
        createdAt: novo.createdAt,
        updatedAt: novo.updatedAt
    }
}