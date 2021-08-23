const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { diretorRepository } = require("../../repositories")

module.exports.novo = async (id, nome, nascimento, n_filmes_dirigidos) => {
    const diretor = await diretorRepository.get({id})

    if(diretor){
        throw{
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("diretor")
        }
    }

    const novo = {
        id,
        nome,
        nascimento,
        n_filmes_dirigidos,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    await diretorRepository.create(novo)

    return {
        id,
        nome,
        nascimento,
        n_filmes_dirigidos
    }
}