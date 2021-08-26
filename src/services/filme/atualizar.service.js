const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { filmeRepository } = require("../../repositories")

module.exports.atualizar = async (id, categoria, duracao, nome, produtora, arquivo, image_url, video_url, descricao, id_ator_principal, id_diretor) => {
    const filme = await filmeRepository.get({id})

    if(!filme){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("filme")
        }
    }

    filme.categoria = categoria
    filme.duracao = duracao
    filme.nome = nome
    filme.produtora = produtora
    if(arquivo != null){
        filme.arquivo = arquivo
    }
    if(image_url != null){
        filme.imageUrl = image_url
    }
    if(video_url != null){
        filme.videoUrl = video_url
    }
    if(descricao != null){
        filme.descricao = descricao
    }
    if(id_ator_principal != null){
        filme.idAtorPrincipal = id_ator_principal
    }
    if(id_diretor != null){
        filme.idDiretor = id_diretor
    }
    filme.updatedAt = new Date()

    await filmeRepository.update(filme)

    return {
        id: filme.id,
        categoria: filme.categoria,
        duracao: filme.duracao,
        nome: filme.nome,
        produtora: filme.produtora,
        arquivo: filme.produtora,
        imageUrl: filme.imageUrl,
        videourl: filme.videoUrl,
        descricao: filme.descricao,
        idAtorPrincipal: filme.idAtorPrincipal,
        idDiretor: filme.idDiretor,
        createdAt: filme.createdAt,
        updatedAt: filme.updatedAt
    }
}