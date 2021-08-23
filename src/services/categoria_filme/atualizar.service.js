const { StatusCodes } = require("http-status-codes");

const { messages } = require("../../helpers");
const { categoriaFilmeRepository } = require("../../repositories");

module.exports.atualizar = async (antigaCategoria, novaCategoria) => {
    const Categoria = await categoriaFilmeRepository.get({categoria: antigaCategoria})
    const CategoriaNova = await categoriaFilmeRepository.get({categoria: novaCategoria})

    if(!Categoria){
        throw{
            status: StatusCodes.NOT_FOUND,
            message: messages.notFound("categoria")
        }
    }

    if(CategoriaNova){
        throw{
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("categoria nova")
        }
    }

    Categoria.categoria = novaCategoria
    Categoria.updatedAt = new Date()
    await categoriaFilmeRepository.create({categoria: novaCategoria, 
                                            createdAt: Categoria.createdAt,
                                            updatedAt: Categoria.updatedAt})                                            
    await categoriaFilmeRepository.destroy(antigaCategoria)
    const NovaCategoria = await categoriaFilmeRepository.get({categoria: novaCategoria})

    return {
        categoria: novaCategoria, 
        createdAt: NovaCategoria.createdAt,
        updatedAt: NovaCategoria.updatedAt
    }
}