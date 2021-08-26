const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { filmeRepository } = require("../../repositories")

module.exports.get = async (id) => {
    const filme = await filmeRepository.get({id})

    if(!filme){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("filme")
        }
    }

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
        idAtorPrincipal: filme.idAtorPrincipal,
        idDiretor: filme.idDiretor,
        createdAt: filme.createdAt,
        updatedAt: filme.updatedAt
    }
}