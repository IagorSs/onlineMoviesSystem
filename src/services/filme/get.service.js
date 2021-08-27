const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { filmeRepository, atorRepository, diretorRepository } = require("../../repositories")

module.exports.get = async (id) => {
    const filme = await filmeRepository.get({id})

    if(!filme){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("filme")
        }
    }

    const ator = await atorRepository.get({id:filme.idAtorPrincipal})
    const diretor = await diretorRepository.get({id:filme.idDiretor})

    return {
        id: filme.id,
        categoria: filme.categoria,
        duracao: filme.duracao,
        nome: filme.nome,
        produtora: filme.produtora,
        arquivo: filme.arquivo,
        imageUrl: filme.imageUrl,
        videoUrl: filme.videoUrl,
        descricao: filme.descricao,
        idAtorPrincipal: ator,
        idDiretor: diretor,
        createdAt: filme.createdAt,
        updatedAt: filme.updatedAt
    }
}