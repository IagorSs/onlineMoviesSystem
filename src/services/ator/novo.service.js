const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken")

const { messages } = require("../../helpers")
const { constants } = require("../../utils")
const { atorRepository } = require("../../repositories")
const { promisify } = require("util")

module.exports.novo = async( nome, nascimento) => {
    const id = parseInt(Math.random() * 100000000000)
    const ator = await atorRepository.get({id})

    if(ator){
        throw {
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("ator"),
        }
    }

    const novo = {
        id: id,
        nome,
        nascimento,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    await atorRepository.create(novo)

    return { id, nome , nascimento}
}
