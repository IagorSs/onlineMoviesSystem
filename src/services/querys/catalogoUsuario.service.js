const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { querysRepository, filmeRepository, planoRepository} = require("../../repositories")
const { Op, col} = require("sequelize")

module.exports.catalogoUsuario = async (inscricao) => {
    const f = await querysRepository.assistidosDoUsuario(inscricao)
    let aux = []
    f.forEach(element => {
        aux.push(element.id_filme)
    })

    const p = await planoRepository.list({
        atributtes: ['categoria'],
        raw:true,
        where: {inscricao}
    })
    let categoria = []
    p.rows.forEach(element => {
        categoria.push(element.categoria)
    })

    const tf = await filmeRepository.list({
        attributes: ['id', 'nome', 'categoria'],
        raw: true,
        where:{
            categoria:{[Op.in]: categoria}
        }
    })

    const consulta = await querysRepository.catalogoUsuario(aux)

    if(!consulta) {
        throw{
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            message: messages.internalError()
        }
    }

    let response = []
    let insert = false
    tf.rows.forEach(element => {
        consulta.forEach(filme => {
            if(element.id == filme.id){
                response.push({
                    id: element.id,
                    nome: element.nome,
                    assistido: true
                })
                insert = true
            }
        })
        if(!insert){
            response.push({
                id: element.id,
                nome: element.nome,
                assistido: false
            }) 
        }
        insert = false
    }) 


    return response
}