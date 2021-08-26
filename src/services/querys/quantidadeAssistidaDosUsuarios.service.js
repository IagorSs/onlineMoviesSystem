const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { querysRepository, usuarioRepository } = require("../../repositories")

module.exports.quantidadeAssistidaDosUsuarios = async () => {
    const consulta = await querysRepository.quantidadeAssistidaDosUsuarios()
    const users = await usuarioRepository.getAll()

    if(!consulta) {
        throw{
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            message: messages.internalError()
        }
    }

    let response = []
    let found = false
    users.forEach(user => {
        consulta.forEach(element => {
            if(element.inscricao_usuario == user.inscricao){
                response.push({inscricao: user.inscricao, nome: user.nome, n_assistidos: element.n_assistidos})
                found = true
            }
        })
        if(!found){
            response.push({inscricao: user.inscricao, nome: user.nome, n_assistidos: 0})
        }
        found = false
    });

    return response
}