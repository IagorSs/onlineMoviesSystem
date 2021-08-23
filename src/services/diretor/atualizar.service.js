const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { diretorRepository } = require("../../repositories")

module.exports.atualizar = async (id, nome, nascimento, n_filmes_dirigidos) => {
    const diretor = await diretorRepository.get({id})

    if(!diretor){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("diretor")
        }
    }

    diretor.nome = nome
    if(nascimento != null){
        diretor.nascimento = nascimento
    }
    if(n_filmes_dirigidos != null){
        diretor.n_filmes_dirigidos = n_filmes_dirigidos
    }
    diretor.updatedAt = new Date()

    await diretorRepository.update(diretor)

    return {
        id: diretor.id,
        nome: diretor.nome,
        nascimento: diretor.nascimento,
        n_filmes_dirigidos: diretor.n_filmes_dirigidos,
        createdAt: diretor.createdAt,
        updatedAt: diretor.updatedAt
    }
}