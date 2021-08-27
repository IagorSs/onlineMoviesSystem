const { StatusCodes } = require("http-status-codes")
const { getPelaCategoriaService } = require("../../services")

module.exports = {
    getPelaCategoria: async (req, res) => {
        try {
            const categoria = req.params['categoria']
            const response = await getPelaCategoriaService.getPelaCategoria(categoria)
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