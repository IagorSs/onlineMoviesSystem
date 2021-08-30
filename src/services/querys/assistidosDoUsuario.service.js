const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { querysRepository, filmeRepository, atorRepository, diretorRepository } = require("../../repositories")

const find = async (consulta, response) => {
    for (x in consulta){
        let filme = await filmeRepository.list({raw: true, where: {id: consulta[x].id_filme}})
        filme = filme.rows
        
        filme[0].idAtorPrincipal = await atorRepository.list({raw: true, where: {id: filme[0].idAtorPrincipal}})
        filme[0].idAtorPrincipal = filme[0].idAtorPrincipal.rows[0]

        filme[0].idDiretor = await diretorRepository.list({raw: true, where: {id: filme[0].idDiretor}})
        filme[0].idDiretor = filme[0].idDiretor.rows[0]

        
        response.push({
            id: filme[0].id,
            categoria: filme[0].categoria,
            duracao: filme[0].duracao,
            descricao: filme[0].descricao,
            nome: filme[0].nome,
            produtora: filme[0].produtora,
            arquivo: filme[0].arquivo,
            imageUrl: filme[0].imageUrl,
            videoUrl: filme[0].videoUrl,
            descricao: filme[0].descricao,
            idAtorPrincipal: filme[0].idAtorPrincipal,
            idDiretor: filme[0].idDiretor,
            createdAt: filme[0].createdAt,
            updatedAt: filme[0].updatedAt
        })
    }

    return response
}

module.exports.assistidosDoUsuario = async (inscricao) => {
    const consulta = await querysRepository.assistidosDoUsuario(inscricao)

    if(!consulta) {
        throw{
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            message: messages.internalError()
        }
    }

    let response = await find(consulta, [])

    return response
}