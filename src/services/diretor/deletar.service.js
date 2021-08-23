const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { diretorRepository } = require("../../repositories")

module.exports.deletar = async (id) => {
    const diretor = await diretorRepository.get({id})

    if(!diretor){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("diretor")
        }
    }

    await diretorRepository.destroy(id)

    return "diretor deletado"
}