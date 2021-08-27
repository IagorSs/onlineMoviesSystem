const { StatusCodes } = require("http-status-codes")
const { catalogoUsuarioService } = require("../../services")

module.exports = {
    catalogoUsuario: async (req, res) => {
        try {            
            const  inscricao  = req.params['inscricao']
            const response = await catalogoUsuarioService.catalogoUsuario(inscricao)
            return res.status(StatusCodes.OK).json(response)
        } catch (error) {
            console.error(error)
            return res.status(
                error.name == "ValidationError"
                    ? StatusCodes.UNPROCESSABLE_ENTITY
                    : error.status || StatusCodes.INTERNAL_SERVER_ERROR
            ).json(error.message)
        }
    }
}