const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken")

const { messages } = require("../../helpers")
const { constants } = require("../../utils")
const { usuarioRepository } = require("../../repositories")

module.exports.novo = async (email, senha) => {
    const inscricao = parseInt(Math.random() * 10000000000)

    const usuario = await usuarioRepository.get({ inscricao })
    
    if(usuario){
        throw {
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("usuario"),
        }
    }

    const novo = {
        inscricao,
        email: email,
        nome: email.split('@')[0],
        login: email,
        senha,
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    await usuarioRepository.create(novo)

    return {
        inscricao,
        email: novo.email,
        nome: novo.nome,
        login: novo.email,
        createdAt: novo.createdAt,
        updatedAt: novo.updatedAt
    }
}