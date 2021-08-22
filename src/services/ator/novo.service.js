const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken")

const { messages } = require("../../helpers")
const { constants } = require("../../utils")
const { atorRepository } = require("../../repositories")
const { promisify } = require("util")

module.exports.novo = async(id, nome, nascimento) => {
    const ator = await atorRepository.getById(id)

    if(ator){
        throw {
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("ator"),
        }
    }

    const novo = {
        id,
        nome,
        nascimento,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    await atorRepository.create(novo)

    return { id, nome }
}
