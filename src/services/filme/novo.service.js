const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { filmeRepository } = require("../../repositories")

module.exports.novo = async (id, categoria, duracao, nome, produtora, arquivo, video_youtube_id, descricao, id_ator_princial, id_diretor) => {
    const filme = await filmeRepository.get({id})

    if(filme){
        throw{
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("filme")
        }
    }

    const novo = {
        id,
        categoria,
        duracao,
        nome,
        produtora,
        arquivo,
        videoYoutubeId: video_youtube_id,
        descricao,
        idAtorPrincipal: id_ator_princial,
        idDiretor: id_diretor,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    await filmeRepository.create(novo)

    return {
        id,
        categoria,
        duracao,
        nome,
        produtora,
        arquivo,
        videoYoutubeId: video_youtube_id,
        descricao,
        idAtorPrincipal: id_ator_princial,
        idDiretor: id_diretor,
    }
}