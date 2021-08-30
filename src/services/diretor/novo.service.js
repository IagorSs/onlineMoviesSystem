const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { diretorRepository } = require("../../repositories")

module.exports.novo = async ( nome, nascimento) => {
    const id = parseInt(Math.random() * 100000000000)
    const diretor = await diretorRepository.get({id})

    if(diretor){
        throw{
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("diretor")
        }
    }

    const novo = {
        id: id,
        nome,
        nascimento,
        n_filmes_dirigidos: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    await diretorRepository.create(novo)

    return {
        id,
        nome,
        nascimento,
        n_filmes_dirigidos: 0
    }
}