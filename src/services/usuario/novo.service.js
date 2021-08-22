const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken")

const { messages } = require("../../helpers")
const { constants } = require("../../utils")
const { usuarioRepository } = require("../../repositories")
const { promisify } = require("util")

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

    const payload = {
        inscricao,
        email,
    }

    const sign = promisify(jwt.sign);
    const token = await sign(payload, constants.jwtToken)

    return { email, token }
}