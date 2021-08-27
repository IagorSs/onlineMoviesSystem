const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { filmeRepository, atorRepository, diretorRepository } = require("../../repositories")

module.exports.getPelaCategoria = async (categoria) => {
    const filme = await filmeRepository.getByCategory(categoria)

    if(!filme){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("filme")
        }
    }

    const atores = await atorRepository.getAll()
    const diretores = await diretorRepository.getAll()

    filme.forEach(element => {
        atores.forEach(ator => {
            if(element.idAtorPrincipal == ator.id){
                element.idAtorPrincipal = ator
            }
        })
        diretores.forEach(diretor => {
            if(element.idDiretor == diretor.id){
                element.idDiretor = diretor
            }
        })
    });

    return filme
}