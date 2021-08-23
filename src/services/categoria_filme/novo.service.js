const { StatusCodes } = require("http-status-codes")

const { messages } = require("../../helpers")
const { categoriaFilmeRepository } = require("../../repositories")

module.exports.novo = async (categoria) => {
    const Categoria = await categoriaFilmeRepository.get({categoria})

    if(Categoria){
        throw{
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("categoria")
        }
    }

    const novo = {
        categoria,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    await categoriaFilmeRepository.create(novo)

    return {categoria}
}