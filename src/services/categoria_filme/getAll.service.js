const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { categoriaFilmeRepository } = require("../../repositories");

module.exports.getAll = async (categoria) => {
    const Categoria = await categoriaFilmeRepository.list({
        raw: true,
        atributtes: ['categoria']
    })

    if(!Categoria){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("categoria")
        }
    }

    let response = []
    Categoria.rows.forEach(element => {
        response.push(element.categoria)
    });

    return response
}