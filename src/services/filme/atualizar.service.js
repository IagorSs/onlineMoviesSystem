const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { filmeRepository } = require("../../repositories")

module.exports.atualizar = async (id, categoria, duracao, nome, produtora, arquivo, video_youtube_id, descricao, id_ator_princial, id_diretor) => {
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
    if(video_youtube_id != null){
        filme.videoYoutubeId = video_youtube_id
    }
    if(descricao != null){
        filme.descricao = descricao
    }
    if(id_ator_princial != null){
        filme.idAtorPrincipal = id_ator_princial
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
        videoYoutubeId: filme.videoYoutubeId,
        descricao: filme.descricao,
        idAtorPrincipal: filme.idAtorPrincipal,
        idDiretor: filme.idDiretor,
        createdAt: filme.createdAt,
        updatedAt: filme.updatedAt
    }
}