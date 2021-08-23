const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { categoriaFilmeRepository } = require("../../repositories");

module.exports.get = async (categoria) => {
    const Categoria = await categoriaFilmeRepository.get({categoria})

    if(!Categoria){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("categoria")
        }
    }

    return {
        categoria: Categoria.categoria,
        createdAt: Categoria.createdAt,
        updatedAt: Categoria.updatedAt
    }
}