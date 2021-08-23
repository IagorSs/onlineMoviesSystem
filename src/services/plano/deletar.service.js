const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { planoRepository } = require("../../repositories")

module.exports.deletar = async(inscricao, categoria) => {
    const plano = await planoRepository.get({inscricao, categoria})
    
    if(!plano){
        throw {
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("plano"),
        }
    }
    console.log(categoria)
    await planoRepository.destroy({inscricao, categoria})

    return "plano deletado"
}
