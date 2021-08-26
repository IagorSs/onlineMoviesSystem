const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { querysRepository, filmeRepository } = require("../../repositories")

module.exports.filmesViews = async () => {
    const consulta = await querysRepository.filmesViews()
    const filmes = await filmeRepository.getAll()

    if(!consulta) {
        throw{
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            message: messages.internalError()
        }
    }

    let response = []
    let found = false
    filmes.forEach(filme => {
        consulta.forEach(element => {
            if(filme.id == element.id_filme){
                response.push({id: filme.id, nome: filme.nome, views: element.views})
                found = true
            }
        })
        if(!found){
            response.push({id: filme.id, nome: filme.nome, views: 0})
        }
        found = false
    });

    return response
}