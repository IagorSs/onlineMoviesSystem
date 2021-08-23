const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { categoriaFilmeRepository } = require("../../repositories");

module.exports.deletar = async (categoria) => {
    const Categoria = await categoriaFilmeRepository.get({categoria})

    if(!Categoria){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("categoria")
        }
    }

    await categoriaFilmeRepository.destroy(categoria)

    return "categoria deletada"
}